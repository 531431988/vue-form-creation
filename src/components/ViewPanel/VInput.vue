<template>
  <a-form-item>
    <ToolTip slot="label" :attrs="attrs" />
    <a-input
      v-decorator="decorator"
      :placeholder="attrs.placeholder"
      :maxLength="attrs.maxLength"
      :allowClear="attrs.allowClear"
      :disabled="attrs.disabled"
      :style="`width: ${attrs.width.label}${attrs.width.value}`"
      :prefix="attrs.prefix"
      :suffix="attrs.suffix"
      :addonBefore="attrs.addonBefore"
      :addonAfter="attrs.addonAfter"
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
