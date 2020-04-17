<template>
  <VueFormCreation
    :data="formData"
    @on-save-template="onSaveTemplate"
    @on-close-template="onCloseTemplate"
  />
</template>

<script>
import { getFormTemplate } from '@/api/template'
export default {
  components: {

  },
  data () {
    return {
      formData: {}
    }
  },
  created () {
    getFormTemplate({
      type: this.$route.query.id
    }).then(res => {
      const { data } = res
      this.formData = data
    })
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
