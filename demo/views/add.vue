<template>
  <VueFormCreation
    @on-save-template="onSaveTemplate"
    @on-close-template="onCloseTemplate"
    :rulesList="rulesList"
  />
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      rulesList: {
        isChinese: {
          label: '中文',
          value: 'isChinese',
          pattern: '/^[\u4e00-\u9fa5]+$/',
          message: '只能输入中文'
        },
        isPhone: {
          label: '手机号',
          value: 'isPhone',
          pattern: '/^[1][0-9]{10}$/gi',
          message: '手机号码格式不正确'
        }
      }
    }
  },
  methods: {
    // 保存模版
    onSaveTemplate (data) {
      console.log(JSON.stringify(data))
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
