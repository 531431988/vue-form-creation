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
      const { required, valid } = this.options
      console.log(this.options)
      let rules = []
      // 必填
      if (required) {
        rules = [{ required: true, message: '此项必填' }]
      // 不必填
      } else {
        let v = Object.values(valid).join('')
        // 有其他规则
        if (v !== '') {
          rules.push({
            pattern: new RegExp(valid.pattern),
            message: valid.message
          })
        // 没有其他规则
        } else {
          rules = []
        }
      }
      return [
        this.options.name,
        {
          initialValue: this.options.value,
          rules
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
  cursor: pointer;
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
