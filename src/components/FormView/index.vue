<template>
  <a-form
    :form="form"
    :layout="formConfig.formLayout"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
    :labelAlign="formConfig.align"
    :style="`width: ${formConfig.width}%`"
    @submit="handleSubmit"
  >
    <FormItem
      v-for="(item, index) in formList"
      :key="index"
      :options="item.options"
      :type="item.type"
      @click.native="onClickItem(item, index)"
    />

    <a-form-item :wrapper-col="btnLayout" v-if="formList.length">
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
</template>

<script>
import { formConfig, antvComponents } from '@/config'
import WidgetView from './WidgetView'
import FormItem from './FormItem'
export default {
  components: {
    WidgetView,
    FormItem
  },
  data () {
    return {
      formConfig,
      antvComponents,
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
      },
      formList: []
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
      const { formLayout, labelCol } = this.formConfig
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
    },
    // 表单元素单击
    onClickItem (item, index) {
      this.$bus.$emit('on-click-item', item, index)
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 获取组件属性
      this.$bus.$on('on-click-widget', params => {
        this.formList.push(params)
      })
      // 获取表单配置
      this.$bus.$on('on-form-config', config => {
        this.formConfig = Object.assign(this.formConfig, config)
      })
      // 获取组件配置
      this.$bus.$on('on-component-config', (rules, index) => {
        this.formList[index].options.rules = rules
        // console.log(this.formList)
      })
      // 生成JSON
      this.$bus.$on('on-create-json', () => {
        console.log(this.formList)
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
