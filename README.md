# vue-form-creation
基于VUE ANTD的可视化表单创建工具（双向数据绑定模式）

---

### 使用说明
- :point_right: 安装：npm i vue-form-creation -S 或 cnpm i 或 yarn add vue-form-creation
- :point_right: 运行：npm start 或 yarn serve

### API

#### props
|参数|说明|type|默认值|
| --- | --- | --- | --- |
| data | 组件数据 | Object | null |
| view | 视图模式（true：构建模式， false: 填报模式） | Boolean | true |

#### event
|事件名称|说明|回调参数|
| --- | --- | --- | --- |
| on-save-template | 点击保存模板的回调(返回类型、配置、组件列表) | function({type, config, component}) |
| on-close-template | 点击取消编辑模板的回调 | function |
| on-form-cancel | 点击取消表单提交的回调 |  function |
| on-form-submit | 点击表单提交的回调 |  function({type, config, component}) |


