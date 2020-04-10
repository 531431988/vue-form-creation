<template>
  <a-form-item>
    <span slot="label">
      {{options.label}}&nbsp;
      <a-tooltip v-if="options.tooltip" :title="options.tooltip">
        <a-icon type="question-circle-o" />
      </a-tooltip>
    </span>

    <a-input
      v-decorator="decorator"
      :placeholder="options.placeholder"
      :maxLength="options.maxLength"
      :allowClear="options.allowClear"
      :disabled="options.disabled"
      :style="`width: ${options.width.label}${options.width.value}`"
      :prefix="options.prefix"
      :suffix="options.suffix"
      :addonBefore="options.addonBefore"
      :addonAfter="options.addonAfter"
    ></a-input>
  </a-form-item>
</template>

<script>
import view from './view'
export default {
  mixins: [view]
}
</script>

<style lang="less" scoped>
</style>
