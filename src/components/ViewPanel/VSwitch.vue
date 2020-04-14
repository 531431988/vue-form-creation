<template>
  <a-form-item>
    <ToolTip slot="label" :attrs="attrs" />
    <a-switch
      v-decorator="decorator"
      :checkedChildren="attrs.checkedChildren"
      :unCheckedChildren="attrs.unCheckedChildren"
      :disabled="attrs.disabled"
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
