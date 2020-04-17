<template>
  <a-form-model-item :prop="attrs.required ? attrs.name : null">
    <ToolTip slot="label" :attrs="attrs" />
    <a-textarea
      v-model="attrs.value"
      :placeholder="attrs.placeholder"
      :maxLength="attrs.maxLength"
      :allowClear="attrs.allowClear"
      :disabled="attrs.disabled"
      :style="`width: ${attrs.width.label}${attrs.width.value}`"
      :autoSize="attrs.autoSize"
    />
  </a-form-model-item>
</template>

<script>
import view from './view'
export default {
  mixins: [view]
}
</script>

<style lang="less" scoped>
</style>
