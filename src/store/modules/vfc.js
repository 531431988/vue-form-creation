import { createUID } from '@/libs/utils'
import { antvComponents, baseFormConfig, iconConfig, btnTheme } from '@/config/form'
import { getValidRulesList, addValidRule } from '@/api/vfc'
import message from 'ant-design-vue/es/message'

const vfc = {
  state: {
    iconConfig,
    btnTheme,
    // 表单模式（0:基础 1: 高级）
    type: null,
    antvComponents,
    // 基础表单
    baseForm: [],
    baseFormConfig,
    // 高级表单
    collapseForm: [{
      title: '表单名称1',
      key: createUID(),
      view: [],
      children: [{
        title: '子表单1',
        key: createUID(),
        view: []
      }, {
        title: '子表单2',
        key: createUID(),
        view: [],
        children: [{
          title: '子表单2',
          key: createUID(),
          view: []
        }]
      }]
    }, {
      title: '表单名称2',
      key: createUID(),
      view: []
    }],
    // 当前选择的折叠面板
    activeCollapse: null,
    // 属性面板
    attrPanelShow: false,
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
    INIT_FORM_VIEW (state, params = []) {
      state.baseForm = params
      state.activeCollapse = null
      state.activeComponent = {
        index: 0,
        name: '',
        item: null
      }
    },
    // 添加组件
    ADD_COMPONENT (state, params) {
      params = JSON.parse(JSON.stringify(params))
      params.options.name = createUID()
      state.baseForm.push(params)
      // 基础模式
      if (state.type === 0) {
        console.log('添加基础表单组件')
        state.activeCollapse = []
      } else {
        if (state.activeCollapse) {
          // 递归设置
          const addCollapseForm = data => {
            data.forEach(item => {
              if (item.children && item.children.length) {
                addCollapseForm(item.children)
              } else {
                if (item.key === state.activeCollapse) {
                  item.view = [...state.baseForm]
                }
              }
            })
          }
          addCollapseForm(state.collapseForm)
          console.log('添加高级表单组件')
        } else {
          message.error('请选择要添加的位置')
        }
      }
    },
    // 设置编辑的折叠面板
    SET_ACTIVE_COLLAPSE (state, key) {
      state.activeCollapse = key
    },
    // 设置编辑的组件
    SET_ACTIVE_COMPONENT (state, index) {
      let item = null
      // 高级模式表单
      if (state.type === 1) {
        // 递归设置
        const addCollapseForm = data => {
          data.forEach(child => {
            if (child.children && child.children.length) {
              addCollapseForm(child.children)
            } else {
              if (child.key === state.activeCollapse) {
                item = child.view[index]
              }
            }
          })
        }
        addCollapseForm(state.collapseForm)
      } else {
        // 普通模式表单
        item = state.baseForm[index]
      }
      const name = `${item.type.substr(0, 1).toUpperCase()}${item.type.substr(1)}Panel`
      state.activeComponent = {
        index,
        name,
        item
      }
    },
    // 设置组件面板状态
    SET_ATTR_PANEL_STATE (state, params) {
      state.attrPanelShow = params
    },
    // 更新组件
    UPDATE_COMPONENT (state, { value, index, item }) {
      item = JSON.parse(JSON.stringify(item))
      item.options.valid = state.validRulesList[value]
      state.baseForm[index] = item
    },
    // 更新基础表单属性面板
    UPDATE_BASE_FORM_CONFIG (state, { key, val }) {
      state.baseFormConfig[key] = val
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
