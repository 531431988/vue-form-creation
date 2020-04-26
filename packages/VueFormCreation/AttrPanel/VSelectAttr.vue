<template>
  <ComponentConfig>
    <a-form-model-item label="模式选择">
      <a-radio-group v-model="attrs.mode" @change="onChange">
        <a-radio value="default">单选</a-radio>
        <a-radio value="multiple">多选</a-radio>
      </a-radio-group>
    </a-form-model-item>
    <Options />
  </ComponentConfig>
</template>

<script>
import attr from './attr'
import Options from './Options'
import { mapState, mapMutations } from 'vuex'
export default {
  mixins: [attr],
  components: {
    Options
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
      item.attrs.value = value === 'default' ? undefined : []
      item.attrs.validate = {
        type: value === 'default' ? 'string' : 'array'
      }
      this.UPDATE_COMPONENT({ index, item })
    }
  },
}
</script>

<style lang="less" scoped>
</style>
