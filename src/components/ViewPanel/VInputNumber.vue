<template>
  <a-form-item>
    <ToolTip slot="label" :attrs="attrs" />

    <a-input-number
      v-decorator="decorator"
      :placeholder="attrs.placeholder"
      :min="attrs.min"
      :max="attrs.max"
      :disabled="attrs.disabled"
      :style="`width: ${attrs.width.label}${attrs.width.value}`"
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
