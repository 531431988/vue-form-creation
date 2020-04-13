<template>
  <a-form-item>
    <span slot="label">
      {{attrs.label}}&nbsp;
      <a-tooltip v-if="attrs.tooltip" :title="attrs.tooltip">
        <a-icon type="question-circle-o" />
      </a-tooltip>
    </span>

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
