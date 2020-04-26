<template>
  <div :class="className">
    <component
      :is="`V${type.substr(0, 1).toUpperCase()}${type.substr(1)}`"
      :attrs="attrs"
      :type="type"
      :class="activeClass"
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
      <a-icon type="delete" class="icon-delete"></a-icon>
    </a-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VInput from './VInput'
import VTextarea from './VTextarea'
import VPassword from './VPassword'
import VInputNumber from './VInputNumber'
import VRadio from './VRadio'
import VCheckbox from './VCheckbox'
import VSwitch from './VSwitch'
import VSelect from './VSelect'
import VRate from './VRate'
import VSlider from './VSlider'

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
    attrs: {
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
    VInputNumber,
    VRadio,
    VCheckbox,
    VSwitch,
    VSelect,
    VRate,
    VSlider
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
        // 'inline': !this.edit || formLayout === 'inline',
        'vertical': this.edit && formLayout === 'vertical',
        'vui-flex': this.edit && (formLayout === 'horizontal' || formLayout === 'vertical'),
        'vui-flex-middle': this.edit && (formLayout === 'horizontal' || formLayout === 'vertical')
      }
    },
    activeClass () {
      const { type, activeComponent } = this.$store.state.vfc
      return {
        'vui-flex-item': this.edit,
        'active': this.attrs.name === (activeComponent.item && activeComponent.item.attrs.name)
      }
    }
  }
}
</script>

<style lang="less" >
.form-item-wrap {
  position: relative;
  // display: block;
  /deep/ .ant-form-item {
    margin-bottom: 0;
    padding: 12px 10px;
    cursor: pointer;
    &.active {
      background: fade(@primary-color, 10%);
    }
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
  &.inline {
    .ant-form-item {
      margin-right: 8px !important;
      vertical-align: middle;
    }
  }
}
</style>
