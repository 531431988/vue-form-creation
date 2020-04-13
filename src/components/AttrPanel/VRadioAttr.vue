<template>
  <ComponentConfig>
    <a-form-item>
      <span slot="label">
        字数限制&nbsp;
        <a-tooltip title="可输入的字数，默认不限制，最大200">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
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
