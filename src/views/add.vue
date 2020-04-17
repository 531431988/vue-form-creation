<template>
  <VueFormCreation @on-save-template="onSaveTemplate" @on-close-template="onCloseTemplate" />
</template>

<script>
export default {
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
    // 保存模版
    onSaveTemplate (data) {
      console.log(data)
      this.$router.go(-1)
    },
    // 取消添加
    onCloseTemplate () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
