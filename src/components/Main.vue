<template>
  <a-layout-content>
    <TopTool />
    <FormView />
  </a-layout-content>
</template>

<script>
import FormView from './FormView/index'
import TopTool from './FormView/TopTool'
export default {
  components: {
    TopTool,
    FormView
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
