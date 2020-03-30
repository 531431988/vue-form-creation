<template>
  <a-layout-content>
    <a-form :form="form" :label-col="{span: 5}" :wrapper-col="{span: 12}" @submit="handleSubmit">
      <a-form-item label="姓名">
        <a-input v-decorator="rules.name" />
      </a-form-item>
      <a-form-item label="姓名">
        <a-input v-decorator="rules.name" />
      </a-form-item>
      <a-form-item label="姓名">
        <a-input v-decorator="rules.name" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">提交</a-button>
        <a-button type="link" @click="form.resetFields()">重置</a-button>
      </a-form-item>
    </a-form>
  </a-layout-content>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      form: this.$form.createForm(this, { name: 'demo' }),
      rules: {
        name: [
          'name',
          {
            rules: [{
              required: true,
              message: '此项不能为空'
            }]
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('验证通过', values)
        }
      })
    }
  },
  mounted () {
    this.$bus.$on('on-click-widget', params => {
      console.log(params)
    })
  }

}
</script>
<style lang="less" scoped>
.ant-layout-content {
  border: 1px solid #ddd;
  border-top: none;
  border-bottom: none;
}
</style>
