<template>
  <span :class="{'form-item-edit': edit}">
    <transition appear name="fadeUp">
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
    </transition>
  </span>
</template>

<script>
import { evil } from '@/libs/utils'
export default {
  props: {
    edit: {
      type: Boolean,
      default: true
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
  components: {
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
      console.log('rules', rules)
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

<style lang="less" >
.form-item-edit {
  position: relative;
  cursor: pointer;
  display: block;
  &:after {
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
