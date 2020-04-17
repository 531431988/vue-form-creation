<template>
  <a-form-model-item :prop="attrs.required ? attrs.name : null">
    <ToolTip slot="label" :attrs="attrs" />

    <a-input-number
      v-model="attrs.value"
      :placeholder="attrs.placeholder"
      :min="attrs.min"
      :max="attrs.max"
      :disabled="attrs.disabled"
      :style="`width: ${attrs.width.label}${attrs.width.value}`"
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
