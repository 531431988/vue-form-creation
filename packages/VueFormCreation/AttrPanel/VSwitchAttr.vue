<template>
  <ComponentConfig>
    <a-form-model-item label="开启时显示的文字">
      <a-input v-model="attrs.checkedChildren" :size="formConfig.size" />
    </a-form-model-item>

    <a-form-model-item label="关闭时显示的文字">
      <a-input v-model="attrs.unCheckedChildren" :size="formConfig.size" />
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
