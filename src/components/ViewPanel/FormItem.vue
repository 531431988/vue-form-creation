<template>
  <transition-group appear name="fadeUp" :class="className">
    <component
      :is="`V${type.substr(0, 1).toUpperCase()}${type.substr(1)}`"
      :options="options"
      :class="{'vui-flex-item': edit}"
      :key="options.name"
      @click.native="$emit('on-click')"
    />
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
import { mapState } from 'vuex'
import VInput from './VInput'
import VTextarea from './VTextarea'
import VPassword from './VPassword'
import VInputNumber from './VInputNumber'

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
    VInput,
    VTextarea,
    VPassword,
    VInputNumber
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
    }
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
      z-index: 3;
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
