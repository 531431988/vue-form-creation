<template>
  <a-form-item>
    <ToolTip slot="label" :attrs="attrs" />

    <a-radio-group v-decorator="decorator" :options="attrs.options" :disabled="attrs.disabled" />
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
