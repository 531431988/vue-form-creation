<template>
  <a-form class="pd10">
    <a-form-item label="表单布局">
      <a-radio-group v-model="formConfig.formLayout" buttonStyle="solid" :size="formConfig.size">
        <a-radio-button value="horizontal">水平</a-radio-button>
        <a-radio-button value="vertical">垂直</a-radio-button>
        <a-radio-button value="inline">内联</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="表单宽度">
      <a-input-number
        :min="1"
        :max="100"
        v-model="formConfig.width"
        placeholder="百分比最大100"
        :size="formConfig.size"
      />
    </a-form-item>

    <a-form-item label="标签的文本对齐方式">
      <a-radio-group v-model="formConfig.align" buttonStyle="solid" :size="formConfig.size">
        <a-radio-button value="left">左对齐</a-radio-button>
        <a-radio-button value="right">右对齐</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <template v-if="formConfig.formLayout === 'horizontal'">
      <a-form-item label="标签的文本占比">
        <a-input-number
          :min="1"
          :max="23"
          v-model="labelCol"
          placeholder="1-24"
          :size="formConfig.size"
        />
      </a-form-item>

      <a-form-item label="表单控件占比">
        <a-input-number
          :min="1"
          :max="23"
          v-model="wrapperCol"
          placeholder="1-24"
          :size="formConfig.size"
        />
      </a-form-item>
    </template>
    <a-form-item label="按钮配置">
      <a-row :gutter="4" v-for="(item, index) in formConfig.btns" :key="index">
        <a-col :span="22">
          <a-input v-model="item.text" placeholder="按钮名" :size="formConfig.size">
            <a-tooltip slot="addonBefore" title="可选按钮图标" placement="right">
              <a-select v-model="item.icon" :size="formConfig.size" style="width: 70px">
                <a-select-option
                  v-for="icon in iconConfig"
                  :key="icon.value"
                  :value="icon.value"
                >{{icon.label}}</a-select-option>
              </a-select>
            </a-tooltip>
            <a-tooltip slot="addonAfter" title="可选按钮配色" placement="right">
              <a-select
                v-model="item.type"
                :size="formConfig.size"
                placeholder="主题"
                style="width: 60px"
              >
                <a-select-option
                  v-for="btn in btnTheme"
                  :key="btn.value"
                  :value="btn.value"
                >{{btn.label}}</a-select-option>
              </a-select>
            </a-tooltip>
          </a-input>
        </a-col>
        <a-col :span="2" class="tc">
          <a-button type="link" shape="circle" :size="formConfig.size" @click="onDel(index)">
            <a-icon type="delete" v-color="$color.error"></a-icon>
          </a-button>
        </a-col>
      </a-row>
      <div class="tc">
        <a-button size="small" type="primary" icon="plus" :size="formConfig.size" @click="onAdd">添加</a-button>
      </div>
    </a-form-item>
  </a-form>
</template>

<script>
import { formConfig, iconConfig, btnTheme } from '@/config'
export default {
  data () {
    return {
      formConfig,
      iconConfig,
      btnTheme,
      labelCol: formConfig.labelCol,
      wrapperCol: formConfig.wrapperCol
    }
  },
  watch: {
    labelCol () {
      this.wrapperCol = 24 - this.labelCol
      this.formConfig.wrapperCol = this.wrapperCol
      this.formConfig.labelCol = this.labelCol
    },
    wrapperCol () {
      this.labelCol = 24 - this.wrapperCol
      this.formConfig.wrapperCol = this.wrapperCol
      this.formConfig.labelCol = this.labelCol
    },
    formConfig: {
      handler () {
        this.upDated()
      },
      deep: true
    }
  },
  methods: {
    onDel (index) {
      this.formConfig.btns.splice(index, 1)
      this.upDated()
    },
    onAdd () {
      this.formConfig.btns.push({
        icon: '',
        text: '按钮',
        type: 'primary'
      })
      this.upDated()
    },
    upDated () {
      this.$bus.$emit('on-form-config', Object.assign(this.formConfig, {
        labelCol: this.labelCol,
        wrapperCol: this.wrapperCol
      }))
    }

  },
}
</script>

<style lang="less" scoped>
</style>
