<template>
  <transition-group appear name="fadeUp" :class="className">
    <a-form-item
      :label="options.label"
      v-if="type === 'input'"
      :class="{'vui-flex-item': edit}"
      key="1"
      @click.native="$emit('on-click')"
    >
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
    <a-button
      type="link"
      class="del"
      v-if="edit && del"
      shape="circle"
      key="2"
      @click="$emit('on-del')"
    >
      <a-icon type="delete" v-color="$color.error"></a-icon>
    </a-button>
  </transition-group>
</template>

<script>
import { evil } from '@/libs/utils'
import { mapState } from 'vuex'
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
    },
    del: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type === 0 ? baseFormConfig : collapseFormConfig
      }
    }),
    className () {
      const { formLayout } = this.formConfig
      return {
        'form-item-wrap': this.edit,
        'form-item-edit': this.edit && formLayout !== 'inline',
        'inline': this.edit && formLayout === 'inline',
        'vertical': this.edit && formLayout === 'vertical',
        'vui-flex': this.edit && (formLayout === 'horizontal' || formLayout === 'vertical'),
        'vui-flex-middle': this.edit && (formLayout === 'horizontal' || formLayout === 'vertical')
      }
    },
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
  },
  methods: {
  }
}
</script>

<style lang="less" >
.form-item-edit {
  position: relative;
  cursor: pointer;
  display: block;
  /deep/ .ant-form-item {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
    }
  }
  .del {
    margin-top: 0;
    margin-bottom: 24px;
  }
  &.vertical .del {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.form-item-wrap {
  .ant-form-item {
    margin-right: 8px !important;
  }
  &.inline .del {
    margin: 3px 16px 0 0;
  }
}
</style>
