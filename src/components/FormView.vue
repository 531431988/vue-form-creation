<template>
  <a-layout-content>
    <a-form
      :form="form"
      :layout="formConfig.formLayout"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      :labelAlign="formConfig.align"
      :style="`width: ${formConfig.width}%`"
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
      <a-form-item :wrapper-col="btnLayout">
        <template v-for="(item, index) in formConfig.btns">
          <a-button
            v-if="item.htmlType === 'submit'"
            :type="item.type"
            :icon="item.icon"
            :html-type="item.text === '保存' || item.text === '提交' ? 'submit' : 'button'"
            class="mr10"
          >{{item.text}}</a-button>
          <a-button
            v-else
            :type="item.type"
            :icon="item.icon"
            class="mr10"
            @click="form.resetFields()"
          >{{item.text}}</a-button>
        </template>
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
    },
    btnLayout () {
      const { formLayout, labelCol, wrapperCol } = this.formConfig
      return formLayout === 'horizontal' ?
        { offset: formConfig.labelCol }
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
