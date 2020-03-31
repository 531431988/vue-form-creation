<template>
  <div>
    <pre>
      <highlight-code lang="vue" inline>{{ code }}</highlight-code>
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'html'
    },
    bordered: Boolean,
    code: String,
    expanded: Boolean,
    title: String
  },
  data () {
    return {

    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
</style>
