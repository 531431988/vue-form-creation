<template>
  <a-layout-header>
    <a-row type="flex">
      <a-col>
        <h2 class="b">表单配置工具——{{type ? '高级嵌套' : '基础'}}模式</h2>
      </a-col>
      <a-col class="vui-flex-item tr">
        <a-button class="ml10" @click="validModalShow = true">添加校验规则</a-button>
        <a-button class="ml10" @click="onChangeModal">切换模式</a-button>
        <a-button class="ml10" @click="FormConfigShow = true">表单全局配置</a-button>
        <a-button type="danger" ghost class="ml10" @click="onClear" :disabled="disabled">清空</a-button>
        <a-button
          type="primary"
          ghost
          class="ml10"
          @click="previewShow = true"
          :disabled="disabled"
        >预览</a-button>
        <a-button type="primary" class="ml10" :disabled="disabled">保存</a-button>
      </a-col>
    </a-row>

    <ModalSelect :visible="modalShow" @on-ok="modalShow = false" />

    <a-drawer
      :title="type ? '高级表单全局配置' : '基础表单全局配置'"
      width="25%"
      placement="right"
      :closable="false"
      :visible="FormConfigShow"
      @close="FormConfigShow = false"
    >
      <BaseFormConfig v-if="type === 0" />
      <CollapseFormConfig v-if="type === 1" />
    </a-drawer>

    <a-drawer
      title="表单预览"
      width="40%"
      placement="left"
      :closable="false"
      :visible="previewShow"
      @close="previewShow = false"
    >
      <ViewPanel :data="type ? collapseForm: baseForm " :edit="false" />
    </a-drawer>

    <AddValidModal
      ref="addValidModal"
      :visible="validModalShow"
      @on-cancel="onCancel"
      @on-ok="onOk"
    />
  </a-layout-header>
</template>

<script>
import { ls, createUID } from '@/libs/utils'
import { mapState, mapMutations } from 'vuex'
import ModalSelect from '../ViewPanel/ModalSelect'
import BaseFormConfig from '../AttrPanel/BaseFormConfig'
import CollapseFormConfig from '../AttrPanel/CollapseFormConfig'
import ViewPanel from '../ViewPanel/index'
import AddValidModal from './AddValidModal'
export default {
  components: {
    ModalSelect,
    BaseFormConfig,
    CollapseFormConfig,
    ViewPanel,
    AddValidModal
  },
  data () {
    return {
      modalShow: this.type,
      FormConfigShow: false,
      previewShow: false,
      validModalShow: false
    }
  },
  created () {
    if (!this.$ls.get('state')) {
      this.modalShow = true
    }
  },
  watch: {
    type () {
      this.modalShow = this.type === null ? true : false
    }
  },
  computed: {
    ...mapState({
      type: state => state.vfc.type,
      baseForm: state => state.vfc.baseForm,
      collapseForm: state => state.vfc.collapseForm
    }),
    // 设置按钮状态
    disabled () {
      let disabled = false
      if (this.type) {
        let arr = this.isData(this.collapseForm).flat(Infinity)
        disabled = arr.find(item => item) ? false : true
      } else {
        disabled = this.baseForm.length ? false : true
      }
      return disabled
    }
  },
  methods: {
    ...mapMutations(['INIT_FORM_VIEW', 'SET_TYPE']),
    // 切换模式
    onChangeModal () {
      this.$confirm({
        title: '切换模式',
        content: '您确定要切换模式吗？切换后已经配置好的数据将丢失！！！',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          this.SET_TYPE(this.type ? 0 : 1)
          this.INIT_FORM_VIEW({ type: 'change' })
          this.$message.success(`切换${this.type ? '高级嵌套' : '基础'}模式成功`)
        }
      })
    },
    // 清空
    onClear () {
      this.$confirm({
        title: '清空确认',
        content: '您确定要清空所有组件吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          this.INIT_FORM_VIEW({ type: 'change' })
          ls.remove('state')
          this.SET_TYPE(null)
          this.$message.success('清空成功')
        }
      })
    },
    // 取消添加正则
    onCancel () {
      this.validModalShow = false
      this.$refs.addValidModal.form.resetFields()
    },
    // 保存正则
    onOk () {
      const form = this.$refs.addValidModal.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        const { label, value, message } = values
        this.$store.dispatch('AddValidRule', { label, pattern: value, value: createUID('valid'), message })
        form.resetFields()
        this.validModalShow = false
      })
    },
    // 递归判断是否有数据
    isData (data) {
      return data.map(item => {
        if (item.children && item.children.length) {
          return this.isData(item.children)
        } else {
          return item.view && item.view.length > 0
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-layout-header {
  padding: 0 24px;
  background: #fff;
  position: fixed;
  width: 100%;
  box-shadow: 0px 3px 8px 0px rgba(224, 229, 236, 0.4);
  z-index: 9;
}
</style>
