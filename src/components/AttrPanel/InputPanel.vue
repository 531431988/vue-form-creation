<template>
  <a-form class="pd10">
    <a-form-item label="字段标识">
      <a-input placeholder="字段唯一标识" v-model="options.name" />
    </a-form-item>
    <a-form-item label="字段名称">
      <a-input placeholder="字段标识" v-model="options.label" />
    </a-form-item>

    <a-form-item label="默认值">
      <a-input placeholder="默认值" v-model="options.value" />
    </a-form-item>

    <a-form-item label="输入框宽度">
      <a-input v-model="options.width.label">
        <a-select slot="addonAfter" v-model="options.width.value" style="width: 60px">
          <a-select-option value="px">px</a-select-option>
          <a-select-option value="%">%</a-select-option>
        </a-select>
      </a-input>
    </a-form-item>

    <a-form-item label="占位内容">
      <a-input v-model="options.placeholder" />
    </a-form-item>

    <a-form-item label="状态">
      禁用
      <a-switch checkedChildren="开启" unCheckedChildren="关闭" v-model="options.disabled" />
    </a-form-item>

    <a-form-item label="校验">
      <a-checkbox v-model="options.required">必填项</a-checkbox>
      <a-select v-model="rule">
        <a-select-option
          v-for="(item, index) in rulesList"
          :key="index"
          :value="item.value"
        >{{item.label}}</a-select-option>
      </a-select>
      <!-- <a-input v-model="userRule" placeholder="自定义正则" /> -->
      <!-- <a-input v-if="userRule" v-model="userMsg" placeholder="自定义提示语" /> -->
    </a-form-item>
  </a-form>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
// import validator from '@/libs/validator'
export default {
  data () {
    return {
      rules: [],
      rule: '',
      rulesList: [{
        label: '中文',
        value: 'isChinese'
      }]
    }
  },
  computed: {
    ...mapState({
      activeComponent: state => state.vfc.activeComponent,
      options: state => state.vfc.activeComponent.item.options
    })
  },
  methods: {
    ...mapMutations(['UPDATE_COMPONENT'])
  }

}
</script>

<style lang="less" scoped>
</style>
