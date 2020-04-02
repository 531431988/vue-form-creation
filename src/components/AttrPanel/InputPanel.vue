<template>
  <a-form class="pd10">
    <a-form-item label="字段标识">
      <a-input placeholder="字段唯一标识" v-model="options.name" />
    </a-form-item>
    <a-form-item label="字段名称">
      <a-input placeholder="字段标识" v-model="options.label" />
    </a-form-item>

    <a-form-item label="输入框宽度">
      <a-input v-model="width">
        <a-select slot="addonAfter" v-model="unit" style="width: 60px">
          <a-select-option value="px">px</a-select-option>
          <a-select-option value="%">%</a-select-option>
        </a-select>
      </a-input>
    </a-form-item>

    <a-form-item label="占位内容">
      <a-input v-model="options.placeholder" />
    </a-form-item>

    <a-form-item label="是否禁用">
      <a-switch checkedChildren="启用" unCheckedChildren="禁用" v-model="options.disabled" />
    </a-form-item>

    <a-form-item label="校验">
      <a-checkbox v-model="required">必填项</a-checkbox>
      <a-select v-model="rule">
        <a-select-option
          v-for="(item, index) in rulesList"
          :key="index"
          :value="item.value"
        >{{item.label}}</a-select-option>
      </a-select>
      <a-input v-model="userRule" placeholder="自定义正则" />
      <a-input v-if="userRule" v-model="userMsg" placeholder="自定义提示语" />
    </a-form-item>
  </a-form>
</template>

<script>
import validator from '@/libs/validator'
export default {
  props: ['options'],
  data () {
    return {
      index: 0,
      unit: '%',
      width: this.options.width,
      required: false,
      rules: [],
      rule: '',
      userRule: '',
      rulesList: [{
        label: '中文',
        value: 'isChinese'
      }]
    }
  },
  watch: {
    width (newVal) {
      this.setWidth()
    },
    unit (newVal) {
      this.setWidth()
    },
    required (newVal) {
      if (newVal) {
        this.rules[0] = { required: true, message: '此项必填' }
      } else {
        this.rules[0] = []
      }
      this.setRules(this.rules)
    },
    rule (newVal) {
      this.rules[1] = {
        validator: validator[newVal]
      }
      this.setRules(this.rules)
    }
  },
  methods: {
    setWidth () {
      this.options.width = `${this.width}${this.unit}`
    },
    setRules (rules) {
      this.$bus.$emit('on-component-config', [this.options.name, {
        rules
      }], this.index)
    }
  },
  mounted () {
    this.$bus.$on('on-click-item', (item, index) => {
      this.index = index
    })
  }

}
</script>

<style lang="less" scoped>
</style>
