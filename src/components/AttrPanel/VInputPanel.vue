<template>
  <ComponentConfig>
    <a-form-item label="是否显示清除">
      <a-switch
        checkedChildren="显示"
        unCheckedChildren="隐藏"
        v-model="options.allowClear"
        :size="formConfig.size"
      />
    </a-form-item>

    <a-form-item>
      <span slot="label">
        字数限制&nbsp;
        <a-tooltip title="可输入的字数，默认不限制，最大200">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input-number :min="1" :max="200" v-model="options.maxLength" :size="formConfig.size" />
    </a-form-item>

    <a-form-item v-if="!options.allowClear">
      <span slot="label">
        前后缀内容&nbsp;
        <a-tooltip title="常用示例 前缀￥ 后缀RMB">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-row>
        <a-col :span="11">
          <a-input v-model="options.prefix" :size="formConfig.size" />
        </a-col>
        <a-col :span="11" :offset="2">
          <a-input v-model="options.suffix" :size="formConfig.size" />
        </a-col>
      </a-row>
    </a-form-item>

    <a-form-item>
      <span slot="label">
        前后置标签&nbsp;
        <a-tooltip title="常用示例 前置http 后置.com">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-row>
        <a-col :span="11">
          <a-input v-model="options.addonBefore" :size="formConfig.size" />
        </a-col>
        <a-col :span="11" :offset="2">
          <a-input v-model="options.addonAfter" :size="formConfig.size" />
        </a-col>
      </a-row>
    </a-form-item>
  </ComponentConfig>
</template>

<script>
import panelMixins from './panelMixins'
export default {
  mixins: [panelMixins]
}
</script>

<style lang="less" scoped>
</style>
