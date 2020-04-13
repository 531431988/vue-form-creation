<template>
  <ComponentConfig>
    <a-row>
      <a-col :span="12">
        <a-form-item>
          <span slot="label">
            最小值&nbsp;
            <a-tooltip title="可输入最小值 默认0">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input-number :min="1" :max="200" v-model="attrs.min" :size="formConfig.size" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item>
          <span slot="label">
            最大值&nbsp;
            <a-tooltip title="可输入最大值">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input-number :min="1" :max="200" v-model="attrs.max" :size="formConfig.size" />
        </a-form-item>
      </a-col>
    </a-row>
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
