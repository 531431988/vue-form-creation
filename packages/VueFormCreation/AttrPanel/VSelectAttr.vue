<template>
  <ComponentConfig>
    <a-form-model-item label="模式选择">
      <a-select v-model="attrs.mode" @change="onChange">
        <a-select-option value="default">单选</a-select-option>
        <a-select-option value="multiple">多选</a-select-option>
      </a-select>
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
    onChange (value, option) {
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
