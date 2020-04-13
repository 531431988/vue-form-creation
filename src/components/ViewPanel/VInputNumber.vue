<template>
  <a-form-item>
    <span slot="label">
      {{attrs.label}}&nbsp;
      <a-tooltip v-if="attrs.tooltip" :title="attrs.tooltip">
        <a-icon type="question-circle-o" />
      </a-tooltip>
    </span>

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
