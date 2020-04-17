<template>
  <span>
    {{attrs.label}}&nbsp;
    <a-tooltip v-if="attrs.tooltip" :title="attrs.tooltip">
      <a-icon type="question-circle-o" />
    </a-tooltip>
  </span>
</template>

<script>
export default {
  props: {
    attrs: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="less" scoped>
</style>
