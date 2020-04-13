<template>
  <ComponentConfig>
    <a-form-item label="是否显示清除">
      <a-switch
        checkedChildren="显示"
        unCheckedChildren="隐藏"
        v-model="attrs.allowClear"
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
      <a-input-number :min="1" :max="200" v-model="attrs.maxLength" :size="formConfig.size" />
    </a-form-item>
  </ComponentConfig>
</template>

<script>
import attr from './attr'
export default {
  mixins: [attr]
}
</script>

<style lang="less" scoped>
</style>
