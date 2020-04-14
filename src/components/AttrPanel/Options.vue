<template>
  <a-form-item label="选项配置">
    <div class="vui-flex vui-flex-middle mb5" v-for="(item, index) in attrs.options">
      <a-input
        :ref="item.value"
        v-model="item.label"
        placeholder="请输入选项名称"
        class="vui-flex-item mr15"
        :size="formConfig.size"
        @change="onchange($event, index)"
        @blur="onBlur($event, index)"
      />
      <a-button type="link" size="small" shape="circle" @click="onDel(item, index)">
        <a-icon type="delete" v-color="$color.error"></a-icon>
      </a-button>
    </div>
    <div class="tc mt15">
      <a-button type="primary" htmlType="submit" @click="onAdd" :size="formConfig.size">添加选项</a-button>
    </div>
  </a-form-item>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import attr from './attr'
export default {
  mixins: [attr],
  computed: {
    ...mapState({
      baseForm: state => state.vfc.baseForm,
      type: state => state.vfc.activeComponent.item.type,
      index: state => state.vfc.activeComponent.index
    })
  },
  methods: {
    ...mapMutations(['UPDATE_COMPONENT_OPTIONS']),
    onDel (item, index) {
      let options = this.baseForm[this.index].attrs.options
      if (options.length > 1) {

        this.addOption({
          label: '',
          type: 'del',
          index
        })
      } else {
        this.$message.info('至少留一个吧~')
      }
    },
    onBlur (e, i) {
      if (e.target.value === '') {
        this.addOption({
          label: '',
          type: 'del',
          index: i
        })
      }
    },
    onchange (e, i) {
      this.addOption({
        label: e.target.value,
        type: 'edit',
        index: i
      })
    },
    onAdd () {
      let options = this.baseForm[this.index].attrs.options
      this.addOption({
        label: '',
        type: 'add',
        index: null
      })
      this.$nextTick(() => {
        this.$refs[options[options.length - 1].value][0].focus()
      })
    },
    addOption ({ label, type, index }) {
      this.UPDATE_COMPONENT_OPTIONS({
        parentIndex: this.index,
        label,
        type,
        index,
        name: this.type
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
