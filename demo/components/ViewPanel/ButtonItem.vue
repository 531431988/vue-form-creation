<template>
  <span>
    <a-button
      :type="data.type"
      :icon="data.icon"
      class="mr10"
      @click="$emit('on-click')"
    >{{data.text}}</a-button>
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
</style>
