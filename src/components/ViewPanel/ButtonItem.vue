<template>
  <span>
    <a-button
      v-if="data.htmlType === 'submit'"
      :type="data.type"
      :icon="data.icon"
      :html-type="data.text === '保存' || data.text === '提交' ? 'submit' : 'button'"
      class="mr10"
    >{{data.text}}</a-button>
    <a-button
      v-else
      :type="data.type"
      :icon="data.icon"
      class="mr10"
      @click="onReset"
      html-type="reset"
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
  },
  methods: {
    onReset () {
      this.$emit('on-reset')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
