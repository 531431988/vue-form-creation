<template>
  <a-form-item>
    <span slot="label">
      {{options.label}}&nbsp;
      <a-tooltip v-if="options.tooltip" :title="options.tooltip">
        <a-icon type="question-circle-o" />
      </a-tooltip>
    </span>

    <a-textarea
      v-decorator="decorator"
      :placeholder="options.placeholder"
      :maxLength="options.maxLength"
      :allowClear="options.allowClear"
      :disabled="options.disabled"
      :style="`width: ${options.width.label}${options.width.value}`"
      :autoSize="options.autoSize"
    />
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
