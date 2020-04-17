<template>
  <a-form-model-item :prop="attrs.required ? attrs.name : null">
    <ToolTip slot="label" :attrs="attrs" />
    <a-switch
      v-model="attrs.value"
      :checkedChildren="attrs.checkedChildren"
      :unCheckedChildren="attrs.unCheckedChildren"
      :disabled="attrs.disabled"
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
