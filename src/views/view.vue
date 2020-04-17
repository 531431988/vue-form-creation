<template>
  <VueFormCreation
    :view="false"
    :data="formData"
    @on-form-cancel="onFormCancel"
    @on-form-submit="onFormSubmit"
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
    // 保存
    onFormSubmit (data) {
      console.log(JSON.stringify(data))
      this.$router.go(-1)
    },
    // 取消
    onFormCancel () {
      this.$router.go(-1)
    }

  }
}
</script>

<style lang="less" scoped>
</style>
