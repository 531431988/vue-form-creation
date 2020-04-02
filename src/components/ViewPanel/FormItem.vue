<template>
  <div>
    <a-form-item :label="options.label" v-if="type === 'input'">
      <a-input
        v-decorator="options.rules"
        :placeholder="options.placeholder"
        :maxLength="options.maxLength"
        :allowClear="options.allowClear"
        :disabled="options.disabled"
        :style="`width: ${options.width}`"
      >
        <a-icon v-if="options.prefix" slot="prefix" type="user" />
        <a-icon v-if="options.suffix" slot="suffix" type="user" />
      </a-input>
    </a-form-item>
  </div>
</template>

<script>
export default {
  props: ['type', 'options'],
  data () {
    return {
    }
  },
  computed: {
    decorator () {
      return [this.options.name, {
        rules: []
      }]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
</style>
