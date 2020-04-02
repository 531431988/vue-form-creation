<template>
  <div :class="{'form-item-edit': edit}">
    <a-form-item :label="options.label" v-if="type === 'input'">
      <a-input
        v-decorator="decorator"
        :placeholder="options.placeholder"
        :maxLength="options.maxLength"
        :allowClear="options.allowClear"
        :disabled="options.disabled"
        :style="`width: ${options.width.label}${options.width.value}`"
      >
        <a-icon v-if="options.prefix" slot="prefix" type="user" />
        <a-icon v-if="options.suffix" slot="suffix" type="user" />
      </a-input>
    </a-form-item>
  </div>
</template>

<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
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
      return [
        this.options.name,
        {
          initialValue: this.options.value,
          rules: this.options.required ? [{ required: true, message: '此项必填' }] : []
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
.form-item-edit {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
