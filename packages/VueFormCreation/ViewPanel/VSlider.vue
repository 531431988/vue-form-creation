<template>
  <a-form-model-item>
    <ToolTip slot="label" :attrs="attrs" />
    <a-slider v-model="attrs.value" :range="attrs.range" :disabled="attrs.disabled" />
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
