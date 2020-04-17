<template>
  <ComponentConfig>
    <a-form-model-item v-if="!attrs.allowClear">
      <span slot="label">
        前后缀内容&nbsp;
        <a-tooltip title="常用示例 前缀￥ 后缀RMB">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-row>
        <a-col :span="11">
          <a-input v-model="attrs.prefix" placeholder="请输入前缀 如：$" :size="formConfig.size" />
        </a-col>
        <a-col :span="11" :offset="2">
          <a-input v-model="attrs.suffix" placeholder="请输入后缀 如：RMB" :size="formConfig.size" />
        </a-col>
      </a-row>
    </a-form-model-item>

    <a-form-model-item :prop="attrs.required ? attrs.name : null">
      <span slot="label">
        前后置标签&nbsp;
        <a-tooltip title="常用示例 前置http 后置.com">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-row>
        <a-col :span="11">
          <a-input v-model="attrs.addonBefore" placeholder="请输入前缀 如：http" :size="formConfig.size" />
        </a-col>
        <a-col :span="11" :offset="2">
          <a-input v-model="attrs.addonAfter" placeholder="请输入后缀 如：.com" :size="formConfig.size" />
        </a-col>
      </a-row>
    </a-form-model-item>
  </ComponentConfig>
</template>

<script>
import attr from './attr'
export default {
  mixins: [attr]
}
</script>

<style lang="less" scoped>
</style>
