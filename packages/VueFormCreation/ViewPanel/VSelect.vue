<template>
  <a-form-model-item :prop="attrs.required ? attrs.name : null">
    <ToolTip slot="label" :attrs="attrs" />

    <a-select
      v-model="attrs.value"
      :mode="attrs.mode"
      :placeholder="attrs.placeholder"
      :allowClear="attrs.allowClear"
      :disabled="attrs.disabled"
      :style="`width: ${attrs.width.label}${attrs.width.value}`"
    >
      <a-select-option
        :value="item.value"
        v-for="(item, index) in attrs.options"
        :key="index"
      >{{item.label}}</a-select-option>
    </a-select>
  </a-form-model-item>
</template>

<script>
import view from './view'
export default {
  mixins: [view]
}
</script>

<style lang="less" scoped>
</style>
