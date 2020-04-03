<template>
  <a-modal
    title="添加校验规则"
    :visible="visible"
    okText="添加"
    cancelText="取消"
    @cancel="() => { $emit('on-cancel') }"
    @ok="() => { $emit('on-ok') }"
  >
    <a-form :form="form">
      <a-form-item label="验证规则名称">
        <a-input placeholder="请输入验证规则名称如：手机号" v-decorator="['label', { rules: rules.label }]" />
      </a-form-item>
      <a-form-item label="正则">
        <a-textarea
          placeholder="请输入完成的正则表达式如：/\d/"
          v-decorator="['value', { rules: rules.value }]"
        />
      </a-form-item>
      <a-form-item label="错误提示信息">
        <a-input
          placeholder="请输入错误提示信息如：手机号格式不正确"
          v-decorator="['message', { rules: rules.message }]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { isRegExp } from '@/libs/validator'
export default {
  props: ['visible'],
  data () {
    return {
      form: this.$form.createForm(this, { name: 'form' }),
      rules: {
        label: [{
          required: true,
          message: '此项不能为空'
        }, { pattern: /([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+/, message: '请输入中文' }],
        value: [{
          required: true,
          message: '此项不能为空'
        }, { validator: isRegExp }],
        message: [{
          required: true,
          message: '此项不能为空'
        }, { pattern: /([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+/, message: '请输入中文' }]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
