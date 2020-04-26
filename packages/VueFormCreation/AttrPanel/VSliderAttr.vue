<template>
  <ComponentConfig>
    <a-form-model-item>
      <template slot="label">
        模式选择
        <a-tooltip :title="title" placement="right" :visible="visible"></a-tooltip>
      </template>
      <a-radio-group v-model="attrs.range" @change="onChange">
        <a-radio :value="false">固定值</a-radio>
        <a-radio :value="true">范围值</a-radio>
      </a-radio-group>
    </a-form-model-item>
  </ComponentConfig>
</template>

<script>
import attr from './attr'
import { mapState, mapMutations } from 'vuex'
export default {
  mixins: [attr],
  data () {
    return {
      title: '',
      visible: false
    }
  },
  computed: {
    ...mapState({
      activeComponent: state => state.vfc.activeComponent
    })
  },
  methods: {
    ...mapMutations(['UPDATE_COMPONENT']),
    onChange (e) {
      const { value } = e.target
      let { item, index } = this.activeComponent
      item.attrs.value = value ? [0, 20] : 0
      item.attrs.validate = {
        type: value ? 'array' : 'number'
      }
      this.title = value ? '范围值 如：0-50' : '固定一个值 如：50'
      this.visible = true
      this.UPDATE_COMPONENT({ index, item })
      setTimeout(() => {
        this.visible = false
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
