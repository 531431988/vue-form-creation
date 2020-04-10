<template>
  <ComponentConfig>
    <a-form-item label="是否显示清除">
      <a-switch
        checkedChildren="显示"
        unCheckedChildren="隐藏"
        v-model="options.allowClear"
        :size="formConfig.size"
      />
    </a-form-item>

    <a-form-item>
      <span slot="label">
        字数限制&nbsp;
        <a-tooltip title="可输入的字数，默认不限制，最大200">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input-number :min="1" :max="200" v-model="options.maxLength" :size="formConfig.size" />
    </a-form-item>
  </ComponentConfig>
</template>

<script>

import ComponentConfig from './ComponentConfig'
import { mapState } from 'vuex'
export default {
  components: {
    ComponentConfig
  },
  computed: {
    ...mapState({
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type === 0 ? baseFormConfig : collapseFormConfig
      },
      options: state => state.vfc.activeComponent.item.options,
    })
  },
}
</script>

<style lang="less" scoped>
</style>
