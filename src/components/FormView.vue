<template>
  <a-layout-content>
    <a-form
      :form="form"
      :layout="formConfig.formLayout"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      @submit="handleSubmit"
    >
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
        <template v-for="(item, index) in formConfig.btns">
          <a-button :type="item.type" :icon="item.icon" :html-type="item.htmlType">{{item.text}}</a-button>
        </template>
        <!-- <a-button type="primary" html-type="submit">{{}}</a-button>
        <a-button type="link" @click="form.resetFields()">重置</a-button>-->
      </a-form-item>
    </a-form>
  </a-layout-content>
</template>

<script>
import { formConfig } from '@/config'
export default {
  components: {
  },
  data () {
    return {
      formConfig,
      form: this.$form.createForm(this, { name: 'form' }),
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
  computed: {
    formItemLayout () {
      const { formLayout, labelCol, wrapperCol } = this.formConfig
      return formLayout === 'horizontal'
        ? {
          labelCol: { span: labelCol },
          wrapperCol: { span: wrapperCol },
        }
        : {}
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
    this.$nextTick(() => {
      // 获取组件属性
      this.$bus.$on('on-click-widget', params => {
        console.log(params)
      })
      // 获取表单配置
      this.$bus.$on('on-form-config', config => {
        this.formConfig = Object.assign(this.formConfig, config)
        console.log(this.formConfig)
      })
    })
  }

}
</script>
<style lang="less" scoped>
.ant-layout-content {
  padding: 15px;
  border: 1px solid #ddd;
  border-top: none;
  border-bottom: none;
}
</style>
