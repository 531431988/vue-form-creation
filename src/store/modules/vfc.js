import { createUID, recursCollapseForm, addCollapseFormChild } from '@/libs/utils'
import { baseFormConfig, collapseFormConfig, iconConfig, btnTheme } from '@/config/form'
import { getValidRulesList, addValidRule } from '@/api/vfc'
import message from 'ant-design-vue/es/message'

const vfc = {
  state: {
    iconConfig,
    btnTheme,
    // 表单模式（0:基础 1: 高级）
    type: 1,
    // 基础表单
    baseForm: [],
    baseFormConfig,
    // 高级表单
    collapseFormConfig,
    collapseForm: [],
    // 当前展开的折叠面板
    expandCollapseKey: [],
    // 当前选择的折叠面板
    activeCollapse: null,
    // 当前编辑组件
    activeComponent: {
      index: 0,
      name: '',
      item: null
    },
    // 内置的验证规则列表
    validRulesList: []
  },
  mutations: {
    // 设置表单模式
    SET_TYPE (state, params) {
      state.type = params
    },
    // 设置校验规则列表数据
    SET_VALID_RULE_LIST (state, params) {
      state.validRulesList = params
    },
    // 添加校验规则
    ADD_VALID_RULE (state, params) {
      state.validRulesList[params.value] = params
    },
    // 初始化表单数据
    INIT_FORM_VIEW (state, { component = [], type = 0 }) {
      // 切换表单模式（高级）
      if (type) {
        state.baseForm = []
        state.collapseForm = component.length ? component : [addCollapseFormChild(createUID('collapse'))]
      } else {
        state.baseForm = component
      }
      state.activeCollapse = null
      state.activeComponent = {
        index: 0,
        name: '',
        item: null
      }
    },
    // 添加组件（基础 嵌套）
    ADD_COMPONENT (state, params) {
      params = JSON.parse(JSON.stringify(params))
      params.attrs.name = createUID('form')
      // 基础表单
      if (state.type === 0) {
        state.baseForm.push(params)
        state.activeCollapse = null
      } else {
        // 嵌套表单
        if (state.activeCollapse) {
          recursCollapseForm(state.collapseForm, state.activeCollapse, item => {
            item.view.push(params)
          })
        } else {
          message.error('请选择要添加的位置')
        }
      }
    },
    // 删除组件（基础 嵌套）
    DEL_COMPONENT (state, index) {
      if (state.type === 0) {
        state.baseForm.splice(index, 1)
      } else {
        recursCollapseForm(state.collapseForm, state.activeCollapse, item => {
          item.view.splice(index, 1)
        })
      }
    },
    // 设置展开的折叠面板
    SET_EXPAND_COLLAPSE (state, key) {
      state.expandCollapseKey = key
    },
    // 设置编辑的折叠面板
    SET_ACTIVE_COLLAPSE (state, key) {
      state.activeCollapse = key
    },
    // 设置编辑的组件
    SET_ACTIVE_COMPONENT (state, index = null) {
      if (index !== null) {
        let view = null
        // 基础表单
        if (state.type === 0) {
          // 嵌套表单
          view = state.baseForm[index]
        } else {
          recursCollapseForm(state.collapseForm, state.activeCollapse, item => {
            view = item.view[index]
          })
        }
        const name = `V${view.type.substr(0, 1).toUpperCase()}${view.type.substr(1)}Attr`
        state.activeComponent = {
          index,
          name,
          item: view
        }
      } else {
        state.activeComponent = {
          index: 0,
          name: '',
          item: null
        }
      }
    },
    // 修改嵌套表单名称
    EDIT_COLLAPSE_FORM_NAME (state, { key, name }) {
      recursCollapseForm(state.collapseForm, key, item => {
        item.title = name
      })
    },
    // 删除嵌套表单
    DEL_COLLAPSE_FORM (state, key) {
      const searchOption = (arr, key) => {
        arr.forEach((item, index) => {
          if (item.key === key) {
            arr.splice(index, 1)
          }
          if (item.children && item.children.length > 0) {
            searchOption(item.children, key)
          }
        })
      }
      searchOption(state.collapseForm, key)
      // 强制更新
      state.collapseForm = JSON.parse(JSON.stringify(state.collapseForm))
    },
    // 新增嵌套表单层级
    ADD_COLLAPSE_FORM (state, key) {
      recursCollapseForm(state.collapseForm, key, item => {
        if (item.key === key) {
          item.children.push(addCollapseFormChild(createUID('collapse')))
        }
      })
      state.collapseForm = JSON.parse(JSON.stringify(state.collapseForm))
    },
    // 更新组件
    UPDATE_COMPONENT (state, { index, item }) {
      state.baseForm[index] = item
    },
    // 更新基础表单属性面板
    UPDATE_BASE_FORM_CONFIG (state, { key, val }) {
      state[state.type === 0 ? 'baseFormConfig' : 'collapseFormConfig'][key] = val
    },
    // 更新表单列表
    UPDATE_BASE_FORM (state, component) {
      state.baseForm = component
    },
    UPDATE_COLLAPSE_FORM (state, component) {
      state.collapseForm = component
    },
    // 更新选项（单选、多选、下拉）
    UPDATE_COMPONENT_OPTIONS (state, { parentIndex, label, type = 'add', index = null, name = 'radio' }) {
      if (type === 'add') {
        state.baseForm[parentIndex].attrs.options.push({ label, value: createUID(name) })
      } else if (type === 'edit') {
        state.baseForm[parentIndex].attrs.options[index].label = label
      } else {
        state.baseForm[parentIndex].attrs.options.splice(index, 1)
      }
    }
  },
  actions: {
    // 获取自定义校验规则
    GetvalidRulesList ({ commit }) {
      getValidRulesList().then(res => {
        const { data } = res
        commit('SET_VALID_RULE_LIST', data)
      })
    },
    // 新增自定义校验规则
    AddValidRule ({ commit }, params) {
      addValidRule().then(res => {
        const { data } = res
        if (data) {
          commit('ADD_VALID_RULE', params)
          message.success('添加成功')
        } else {
          message.error('添加失败')
        }
      })
    }
  },
  getters: {

  }

}
export default vfc
