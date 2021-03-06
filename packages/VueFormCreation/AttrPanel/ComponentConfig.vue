<template>
  <a-form class="form-item-margin-sm">
    <a-form-model-item>
      <span slot="label">
        字段标识&nbsp;
        <a-tooltip title="唯一的字段标识（name）">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input placeholder="字段唯一标识" v-model="attrs.name" />
    </a-form-model-item>
    <a-form-model-item>
      <span slot="label">
        字段名称&nbsp;
        <a-tooltip title="该字段显示的名字">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input placeholder="请输入字段名称" v-model="attrs.label" />
    </a-form-model-item>

    <!-- <a-form-model-item>
      <span slot="label">
        默认值&nbsp;
        <a-tooltip title="初始化显示的内容">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input placeholder="默认值" v-model="attrs.value" />
    </a-form-model-item>-->

    <a-form-model-item v-if="attrs.width">
      <span slot="label">
        组件宽度&nbsp;
        <a-tooltip title="单位百分比时最大宽100%">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input v-model="attrs.width.label" :maxLength="3">
        <a-select
          slot="addonAfter"
          v-model="attrs.width.value"
          style="width: 80px"
          @change="onChangeSelect"
        >
          <a-select-option value="px">像素</a-select-option>
          <a-select-option value="%">百分比</a-select-option>
        </a-select>
      </a-input>
    </a-form-model-item>

    <a-form-model-item>
      <span slot="label">
        字段提示语&nbsp;
        <a-tooltip title="当前字段的说明">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input placeholder="请输入字段说明" v-model="attrs.tooltip" />
    </a-form-model-item>

    <a-form-model-item v-if="attrs.placeholder">
      <span slot="label">
        占位内容&nbsp;
        <a-tooltip title="当用户没有输入时的提示文字">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input v-model="attrs.placeholder" />
    </a-form-model-item>

    <a-row>
      <a-col :span="8">
        <a-form-model-item label="是否禁用">
          <a-switch checkedChildren="禁用" unCheckedChildren="启用" v-model="attrs.disabled" />
        </a-form-model-item>
      </a-col>
      <template v-if="ShowAllowClear">
        <a-col :span="8">
          <a-form-model-item label="是否显示清除">
            <a-switch
              checkedChildren="显示"
              unCheckedChildren="隐藏"
              v-model="attrs.allowClear"
              :size="formConfig.size"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="8">
          <a-form-model-item>
            <span slot="label">
              字数限制&nbsp;
              <a-tooltip title="可输入的字数，默认不限制，最大200">
                <a-icon type="question-circle-o" />
              </a-tooltip>
            </span>
            <a-input-number :min="1" :max="200" v-model="attrs.maxLength" :size="formConfig.size" />
          </a-form-model-item>
        </a-col>
      </template>
    </a-row>

    <slot></slot>

    <a-form-model-item label="校验" v-if="attrs.required || attrs.validate">
      <a-checkbox v-model="attrs.required">是否必填</a-checkbox>
      <a-row type="flex" v-if="ShowValidate">
        <a-col>验证规则：</a-col>
        <a-col class="vui-flex-item">
          <a-select allowClear v-model="attrs.validate.value" @change="onChangeValid">
            <a-select-option
              v-for="(item, index) in validRulesList"
              :key="index"
              :value="item.value"
            >{{item.label}}</a-select-option>
          </a-select>
        </a-col>
      </a-row>
      <!-- <div>自定义：</div>
      <a-input placeholder="请输入自定义正则表达式" />
      <a-input placeholder="自定义错误提示语" />-->
    </a-form-model-item>
  </a-form>
</template>

<script>
import { hasOne } from '../libs/utils'
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type === 0 ? baseFormConfig : collapseFormConfig
      },
      activeComponent: state => state.vfc.activeComponent,
      attrs: state => state.vfc.activeComponent.item.attrs,
      type: state => state.vfc.activeComponent.item.type,
      validRulesList: state => state.vfc.validRulesList
    }),
    // 过滤不能自定义验证规则的组件
    ShowValidate () {
      return !hasOne(['inputNumber', 'radio', 'checkbox', 'switch', 'rate', 'slider', 'select', 'cascader', 'datePicker', 'timePicker', 'upload'], this.type)
    },
    // 过滤能配置清除按钮的组件
    ShowAllowClear () {
      return hasOne(['input', 'textarea', 'password'], this.type)
    }
  },
  created () {
    // this.$store.dispatch('GetvalidRulesList')
  },
  watch: {
    attrs: {
      handler () {
        let { item, index } = this.activeComponent
        this.UPDATE_COMPONENT({ index, item })
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations(['UPDATE_COMPONENT']),
    // 更新验证规则
    onChangeValid (value) {
      let { item, index } = this.activeComponent
      if (value) {
        item.attrs.validate = this.validRulesList[value]
      } else {
        item.attrs.validate = {
          label: '',
          value: '',
          pattern: '',
          message: ''
        }
      }
      this.UPDATE_COMPONENT({ index, item })
    },
    // 切换单位
    onChangeSelect (value, option) {
      let { item, index } = this.activeComponent
      if (value === '%') {
        item.attrs.width = {
          label: '100',
          value: '%'
        }
      } else {
        item.attrs.width = {
          label: item.attrs.width.label,
          value
        }
      }
      this.UPDATE_COMPONENT({ index, item })
    }
  }

}
</script>

<style lang="less" scoped>
</style>
