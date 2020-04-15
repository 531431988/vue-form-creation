<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :layout="formConfig.formLayout"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
    :labelAlign="formConfig.align"
    :style="`width: ${formConfig.width}%`"
  >
    <BaseForm :data="formData" :edit="edit" v-if="type === 0" />
    <CollapseForm :data="formData" :edit="edit" v-if="type === 1" />
    <div
      :class="{tc: type, mt20: type, block: formConfig.formLayout === 'inline', 'form-item-edit': edit}"
    >
      <a-form-model-item
        :wrapper-col="type ? {span: 24} : btnLayout"
        v-if="data.length && type !== null"
      >
        <a-button
          v-for="(item, index) in formConfig.btns"
          :type="item.type"
          :icon="item.icon"
          class="mr10"
          @click="onClick(item)"
        >{{item.text}}</a-button>
      </a-form-model-item>
    </div>
  </a-form-model>
</template>

<script>
import { evil, hasOne, recursCollapseForm } from '@/libs/utils'
import BaseForm from '@/components/ViewPanel/BaseForm'
import CollapseForm from '@/components/ViewPanel/CollapseForm'
import ButtonItem from './ButtonItem'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    edit: {
      type: Boolean,
      default: true
    }
  },
  components: {
    BaseForm,
    CollapseForm,
    ButtonItem
  },
  created () {
    this.INIT_FORM_VIEW({ component: this.data })
  },
  computed: {
    ...mapState({
      form: state => {
        let obj = {}
        const { type, baseForm, collapseForm } = state.vfc
        if (type === 0) {
          baseForm.forEach(item => {
            const { name, value } = item.attrs
            obj[name] = value
          })
        } else {
          recursCollapseForm(collapseForm, null, child => {
            child.view.forEach(item => {
              const { name, value } = item.attrs
              obj[name] = value
            })
          })
        }
        return obj
      },
      rules: state => {
        let obj = {}
        let rules = []
        const { type, baseForm, collapseForm } = state.vfc
        if (type === 0) {
          baseForm.forEach(item => {
            const { required, name, value, validate } = item.attrs
            let rules = null
            if (hasOne(['radio', 'checkbox', 'switch'], item.type)) {
              rules = { required: true, message: '此项必填', trigger: 'change', type: validate.type }
            } else {
              rules = { required: true, message: '此项必填', trigger: 'blur' }
            }
            // 必填
            if (required) {
              obj[name] = [rules]
            }
            if (validate.value) {
              obj[name] = [rules, {
                pattern: evil(validate.pattern),
                message: validate.message
              }]
            }
          })
        } else {
          recursCollapseForm(collapseForm, null, child => {
            child.view.forEach(item => {
              const { required, name, value, validate } = item.attrs
              let rules = null
              if (hasOne(['radio', 'checkbox', 'switch'], item.type)) {
                rules = { required: true, message: '此项必填', trigger: 'change', type: validate.type }
              } else {
                rules = { required: true, message: '此项必填', trigger: 'blur' }
              }
              // 必填
              if (required) {
                obj[name] = [rules]
              }
              if (validate.value) {
                obj[name] = [rules, {
                  pattern: evil(validate.pattern),
                  message: validate.message
                }]
              }
            })
          })
        }
        console.log(obj)
        return obj
      },
      type: state => state.vfc.type,
      formData: state => {
        const { type, baseForm, collapseForm } = state.vfc
        return type === 0 ? baseForm : collapseForm
      },
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type === 0 ? baseFormConfig : collapseFormConfig
      }
    }),
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
        { offset: labelCol }
        : {}
    }
  },
  methods: {
    ...mapMutations(['INIT_FORM_VIEW']),
    onClick (item) {
      if (item.text === '提交' || item.text === '保存') {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            console.log(this.form)
            console.log(this.formData)
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      } else {
        this.$refs.ruleForm.resetFields()
      }
    }
  },
  mounted () {
  },
}
</script>

<style lang="less" scoped>
.form-item-edit {
  cursor: default;
}
.ant-form-inline {
  /deep/ .inline {
    display: inline-block;
    height: 100%;
  }
}
</style>
