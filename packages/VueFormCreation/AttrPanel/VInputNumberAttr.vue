<template>
  <ComponentConfig>
    <a-row>
      <a-col :span="12">
        <a-form-model-item :prop="attrs.required ? attrs.name : null">
          <span slot="label">
            最小值&nbsp;
            <a-tooltip title="可输入最小值">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input-number
            :min="attrs.min"
            :max="attrs.max"
            v-model="attrs.min"
            :size="formConfig.size"
          />
        </a-form-model-item>
      </a-col>
      <a-col :span="12">
        <a-form-model-item :prop="attrs.required ? attrs.name : null">
          <span slot="label">
            最大值&nbsp;
            <a-tooltip title="可输入最大值">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input-number
            :min="attrs.min"
            :max="attrs.max"
            v-model="attrs.max"
            :size="formConfig.size"
          />
        </a-form-model-item>
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
