<template>
  <a-form class="pd10">
    <a-form-item>
      <span slot="label">
        字段标识&nbsp;
        <a-tooltip title="唯一的字段标识（name）">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input placeholder="字段唯一标识" v-model="options.name" />
    </a-form-item>
    <a-form-item label="字段名称">
      <a-input placeholder="请输入字段名称" v-model="options.label" />
    </a-form-item>

    <a-form-item>
      <span slot="label">
        默认值&nbsp;
        <a-tooltip title="初始化显示的内容">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input placeholder="默认值" v-model="options.value" />
    </a-form-item>

    <a-form-item label="组件宽度">
      <a-input v-model="options.width.label" :maxLength="3">
        <a-select slot="addonAfter" v-model="options.width.value" style="width: 60px">
          <a-select-option value="px">px</a-select-option>
          <a-select-option value="%">%</a-select-option>
        </a-select>
      </a-input>
    </a-form-item>

    <a-form-item label="占位内容（输入提示语）" v-if="options.placeholder">
      <a-input v-model="options.placeholder" />
    </a-form-item>
    <a-form-item label="是否禁用">
      <a-switch checkedChildren="禁用" unCheckedChildren="启用" v-model="options.disabled" />
    </a-form-item>

    <slot></slot>

    <a-form-item label="校验">
      <a-checkbox v-model="options.required">是否必填</a-checkbox>
      <a-row type="flex">
        <a-col>验证规则：</a-col>
        {{options.valid.value}}
        <a-col class="vui-flex-item">
          <a-select v-model="options.valid.value" @change="onChangeValid">
            <a-select-option
              v-for="(item, index) in validRulesList"
              :key="index"
              :value="item.value"
            >{{item.label}}</a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <div>自定义：</div>
      <a-input placeholder="请输入自定义正则表达式" />
      <a-input placeholder="自定义错误提示语" />
    </a-form-item>
  </a-form>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      activeComponent: state => state.vfc.activeComponent,
      options: state => state.vfc.activeComponent.item.options,
      validRulesList: state => state.vfc.validRulesList
    })
  },
  created () {
    this.$store.dispatch('GetvalidRulesList')
  },
  methods: {
    ...mapMutations(['UPDATE_COMPONENT']),
    // 更新验证规则
    onChangeValid (value) {
      let { item, index } = this.activeComponent
      this.UPDATE_COMPONENT({ value, index, item })
    }
  }

}
</script>

<style lang="less" scoped>
</style>
