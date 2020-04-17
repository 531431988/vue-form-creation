import Mock from 'mockjs'
import { getBody } from './util'

const collapse = {
  "type": 1,
  "config": {
    "size": "default",
    "formLayout": "horizontal",
    "width": 100,
    "align": "right",
    "labelCol": 3,
    "wrapperCol": 21,
    "btns": [{
      "icon": "check",
      "text": "提交",
      "type": "primary",
      "htmlType": "submit"
    }, {
      "icon": "sync",
      "text": "取消",
      "type": "link"
    }],
    "title": "表单名称",
    "key": "collapse-ada11109-4b31-4505-e685-ae3b5fc5f7c3",
    "view": [],
    "scopedSlots": {
      "title": "title"
    },
    "expand": false
  },
  "component": [{
    "title": "表单名称",
    "key": "collapse-683bceb6-b0a1-4163-db87-99a4d33cee4f",
    "view": [],
    "scopedSlots": {
      "title": "title"
    },
    "expand": false,
    "children": [{
      "title": "表单名称",
      "key": "collapse-82d299a2-0419-4f37-df91-16c00f8840ab",
      "view": [{
        "name": "单行文本",
        "type": "input",
        "icon": "edit",
        "attrs": {
          "disabled": false,
          "value": "",
          "required": false,
          "validate": {
            "type": null,
            "label": "",
            "value": "",
            "pattern": "",
            "message": ""
          },
          "tooltip": null,
          "maxLength": null,
          "prefix": null,
          "suffix": null,
          "addonBefore": null,
          "addonAfter": null,
          "width": {
            "label": "300",
            "value": "px"
          },
          "allowClear": null,
          "label": "单行文本",
          "name": "form-4318f6bf-3fbb-4f57-8b0d-ea117069b6da",
          "placeholder": "请输入关键字"
        }
      }, {
        "name": "多行文本",
        "type": "textarea",
        "icon": "code",
        "attrs": {
          "disabled": false,
          "value": "",
          "required": false,
          "validate": {
            "type": null,
            "label": "",
            "value": "",
            "pattern": "",
            "message": ""
          },
          "tooltip": null,
          "maxLength": null,
          "width": {
            "label": "100",
            "value": "%"
          },
          "allowClear": null,
          "autoSize": {
            "minRows": 2,
            "maxRows": 6
          },
          "label": "多行文本",
          "name": "form-eb5e8740-2ec2-4f62-89ca-e4a86908ddbf",
          "placeholder": "请输入关键字"
        }
      }],
      "scopedSlots": {
        "title": "title"
      },
      "expand": false,
      "children": []
    }]
  }, {
    "title": "表单名称",
    "key": "collapse-1071a287-9781-4e31-a02a-40694a3384e4",
    "view": [{
      "name": "单选框",
      "type": "radio",
      "icon": "radio",
      "attrs": {
        "disabled": false,
        "value": null,
        "required": false,
        "validate": {
          "type": "string"
        },
        "tooltip": null,
        "options": [{
          "label": "选项1",
          "value": "radio-5388af71-536e-41d9-a46c-fb7ff2abf7e3"
        }],
        "label": "单选框",
        "name": "form-57c2e791-2c7e-4a69-ce8d-ffbc258be8f1"
      }
    }, {
      "name": "开关",
      "type": "switch",
      "icon": "switch",
      "attrs": {
        "disabled": false,
        "required": false,
        "validate": {
          "type": "boolean"
        },
        "tooltip": null,
        "checkedChildren": "开启",
        "unCheckedChildren": "关闭",
        "label": "开关",
        "name": "form-cb96aa9f-f8dc-4444-eaa1-4df6a213d888"
      }
    }],
    "scopedSlots": {
      "title": "title"
    },
    "expand": false,
    "children": []
  }]
}
const base = {
  type: 0,
  config: {},
  component: [
    {
      "name": "单行文本",
      "type": "input",
      "icon": "edit",
      "attrs": {
        "disabled": false,
        "value": "",
        "required": false,
        "validate": {
          "type": null,
          "label": "",
          "value": "",
          "pattern": "",
          "message": ""
        },
        "tooltip": null,
        "maxLength": null,
        "prefix": null,
        "suffix": null,
        "addonBefore": null,
        "addonAfter": null,
        "width": {
          "label": "300",
          "value": "px"
        },
        "allowClear": null,
        "label": "单行文本",
        "name": "input-d135da11-eded-4e6d-ac51-fabf4f9852fa",
        "placeholder": "请输入关键字"
      }
    }
  ]
}


const getFormTemplate = options => {
  const { type } = getBody(options)
  return {
    code: 200,
    data: Number(type) ? collapse : base,
    msg: '获取成功'
  }
}

Mock.mock('/getFormTemplate', 'post', getFormTemplate)
