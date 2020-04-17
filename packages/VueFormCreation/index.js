// 导入组件，组件必须声明 name
import VueFormCreation from './index.vue'

// 为组件提供 install 安装方法，供按需引入
VueFormCreation.install = function (Vue) {
  Vue.component(VueFormCreation.name, VueFormCreation)

}

// 默认导出组件
export default VueFormCreation
