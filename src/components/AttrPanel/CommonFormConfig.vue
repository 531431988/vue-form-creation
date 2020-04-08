<template>
  <a-form class="pd10 form-item-margin-sm">
    <a-form-item label="表单布局">
      <a-radio-group
        v-model="baseFormConfig.formLayout"
        buttonStyle="solid"
        :size="baseFormConfig.size"
      >
        <a-radio-button value="horizontal">水平</a-radio-button>
        <a-radio-button value="vertical">垂直</a-radio-button>
        <a-radio-button value="inline">内联</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="表单宽度（%）">
      <a-input-number
        :min="1"
        :max="100"
        v-model="baseFormConfig.width"
        placeholder="百分比最大100"
        :size="baseFormConfig.size"
      />
    </a-form-item>
    <template v-if="baseFormConfig.formLayout === 'horizontal'">
      <a-form-item label="标签的文本对齐方式">
        <a-radio-group
          v-model="baseFormConfig.align"
          buttonStyle="solid"
          :size="baseFormConfig.size"
        >
          <a-radio-button value="left">左对齐</a-radio-button>
          <a-radio-button value="right">右对齐</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="标签的文本占比">
        <a-input-number
          :min="1"
          :max="23"
          v-model="baseFormConfig.labelCol"
          placeholder="1-24"
          :size="baseFormConfig.size"
        />
      </a-form-item>

      <a-form-item label="表单控件占比">
        <a-input-number
          :min="1"
          :max="23"
          v-model="baseFormConfig.wrapperCol"
          placeholder="1-24"
          :size="baseFormConfig.size"
        />
      </a-form-item>
    </template>
    <a-form-item label="按钮配置（图标 文字 颜色）">
      <a-row :gutter="4" v-for="(item, index) in baseFormConfig.btns" :key="index">
        <a-col :span="22">
          <a-input v-model="item.text" placeholder="按钮名" :size="baseFormConfig.size">
            <a-tooltip slot="addonBefore" title="可选按钮图标" placement="right">
              <a-select v-model="item.icon" :size="baseFormConfig.size" style="width: 80px">
                <a-select-option
                  v-for="icon in iconConfig"
                  :key="icon.value"
                  :value="icon.value"
                >{{icon.label}}</a-select-option>
              </a-select>
            </a-tooltip>
            <a-tooltip slot="addonAfter" title="可选按钮配色" placement="right">
              <a-select
                v-model="item.type"
                :size="baseFormConfig.size"
                placeholder="主题"
                style="width: 80px"
              >
                <a-select-option
                  v-for="btn in btnTheme"
                  :key="btn.value"
                  :value="btn.value"
                >{{btn.label}}</a-select-option>
              </a-select>
            </a-tooltip>
          </a-input>
        </a-col>
        <a-col :span="2" class="tc">
          <a-button type="link" shape="circle" :size="baseFormConfig.size" @click="onDel(index)">
            <a-icon type="delete" v-color="$color.error"></a-icon>
          </a-button>
        </a-col>
      </a-row>
      <div class="tc">
        <a-button type="primary" icon="plus" :size="baseFormConfig.size" @click="onAdd">添加</a-button>
      </div>
    </a-form-item>
    <slot></slot>
  </a-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      labelCol: 3,
      wrapperCol: 21
    }
  },
  created () {
    console.log(this.baseFormConfig)
  },
  watch: {
    'baseFormConfig.labelCol' () {
      this.UPDATE_BASE_FORM_CONFIG({
        key: 'wrapperCol',
        val: 24 - this.baseFormConfig.labelCol
      })
    },
    'baseFormConfig.wrapperCol' () {
      this.UPDATE_BASE_FORM_CONFIG({
        key: 'labelCol',
        val: 24 - this.baseFormConfig.wrapperCol
      })
    }
  },
  computed: {
    ...mapState({
      baseFormConfig: state => state.vfc.baseFormConfig,
      iconConfig: state => state.vfc.iconConfig,
      btnTheme: state => state.vfc.btnTheme
    })
  },
  methods: {
    ...mapMutations(['UPDATE_BASE_FORM_CONFIG']),
    onDel (index) {
      const { btns } = this.baseFormConfig
      btns.splice(index, 1)
      this.UPDATE_BASE_FORM_CONFIG({
        key: 'btns',
        val: btns
      })
    },
    onAdd () {
      const { btns } = this.baseFormConfig
      btns.push({
        icon: '',
        text: '按钮',
        type: 'primary'
      })
      this.UPDATE_BASE_FORM_CONFIG({
        key: 'btns',
        val: btns
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
