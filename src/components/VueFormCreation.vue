<template>
  <a-layout class="vue-form-creation">
    <a-row type="flex" class="vue-form-creation-header" v-if="view">
      <a-col>
        <h2 class="b">表单配置工具——{{type ? '高级嵌套' : '基础'}}模式</h2>
      </a-col>
      <a-col class="vui-flex-item tr">
        <a-button class="ml10" @click="onChangeModal">切换模式</a-button>
        <a-button class="ml10" @click="FormConfigShow = true">表单全局配置</a-button>
        <a-button type="danger" ghost class="ml10" @click="onClear" :disabled="disabled">清空</a-button>
        <a-button type="primary" class="ml10" :disabled="disabled" @click="onSave">保存</a-button>
        <a-button type="danger" ghost class="ml10" @click="onClose">取消</a-button>
      </a-col>
    </a-row>

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

    <a-layout>
      <AddPanel v-if="view" />
      <a-layout-content :style="{height: view ? 'calc(100vh - 64px - 64px - 69px)' : '100%'}">
        <ViewPanel
          :data="formData"
          :edit="view"
          @on-form-cancel="$emit('on-form-cancel')"
          @on-form-submit="data => $emit('on-form-submit', data)"
        />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { ls, createUID } from '@/libs/utils'
import BaseFormConfig from './AttrPanel/BaseFormConfig'
import CollapseFormConfig from './AttrPanel/CollapseFormConfig'
import AddPanel from './AddPanel/index'
import ViewPanel from './ViewPanel/index'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    data: {
      type: Object,
      default: null
    },
    view: {
      type: Boolean,
      default: true
    }
  },
  name: 'VueFormCreation',
  components: {
    BaseFormConfig,
    CollapseFormConfig,
    AddPanel,
    ViewPanel
  },
  data () {
    return {
      FormConfigShow: false
    }
  },
  watch: {
    data () {
      if (this.data) {
        console.log(this.data)
        const { type, config, component } = this.data
        this.SET_TYPE(type)
        this.INIT_FORM_VIEW({
          component,
          type
        })
      }
    }
  },
  computed: {
    ...mapState({
      type: state => state.vfc.type,
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type ? collapseFormConfig : baseFormConfig
      },
      formData: state => {
        const { type, baseForm, collapseForm } = state.vfc
        return type ? collapseForm : baseForm
      },
      // 设置按钮状态
      disabled () {
        let disabled = false
        console.log(this.formData)
        if (this.type) {
          let arr = this.isData(this.formData).flat(Infinity)
          disabled = arr.find(item => item) ? false : true
        } else {
          disabled = this.formData.length ? false : true
        }
        return disabled
      }
    })
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
          this.INIT_FORM_VIEW({ type: this.type })
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
          this.INIT_FORM_VIEW({ type: this.type })
          ls.remove('state')
          this.$message.success('清空成功')
        }
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
    },
    // 保存
    onSave () {
      this.$emit('on-save-template', {
        type: this.type,
        config: this.formConfig,
        component: this.formData
      })
      this.INIT_FORM_VIEW({ component: [], type: 0 })
      ls.remove('state')
    },
    onClose () {
      this.$emit('on-close-template')
      this.INIT_FORM_VIEW({ component: [], type: 0 })
      this.SET_TYPE(0)
      ls.remove('state')
    }
  }
}
</script>

<style lang="less" scoped>
.vue-form-creation {
  margin: -48px -40px;
  overflow-x: hidden;
  .ant-layout-has-sider {
    background: #f0f0f0;
  }
  .ant-layout-content {
    position: relative;
    margin: 0 0 0 16px;
    padding: 45px 5% 10px;
  }
  .sider-component-panel,
  .ant-layout-content {
    background: #fff;
    // height: calc(100vh - 64px - 64px - 69px);
    overflow: auto;
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
  &-header {
    padding: 0 16px;
    height: 64px;
    line-height: 64px;
    box-shadow: 0px 3px 8px 0px rgba(224, 229, 236, 0.4);
    position: relative;
    z-index: 1;
  }
}
</style>
