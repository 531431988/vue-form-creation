<template>
  <a-form-item>
    <span slot="label">
      {{options.label}}&nbsp;
      <a-tooltip v-if="options.tooltip" :title="options.tooltip">
        <a-icon type="question-circle-o" />
      </a-tooltip>
    </span>

    <a-input-number
      v-decorator="decorator"
      :placeholder="options.placeholder"
      :maxLength="options.maxLength"
      :disabled="options.disabled"
      :style="`width: ${options.width.label}${options.width.value}`"
    />
  </a-form-item>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {

    }
  },
  computed: {
    decorator () {
      const { required, valid } = this.options
      let rules = []
      // 必填
      if (required) {
        rules = [{ required: true, message: '此项必填' }]
      }
      if (valid.value) {
        rules = [...rules, {
          pattern: evil(valid.pattern),
          message: valid.message
        }]
      } else {
        rules = [...rules]
      }
      return [
        this.options.name,
        {
          initialValue: this.options.value,
          rules
        }]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
