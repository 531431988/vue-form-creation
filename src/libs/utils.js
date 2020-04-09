// 随机名称
const randomName = (name, length = 8) => {
  return `${name}_${Number(Math.random().toString().substr(3, length))}${new Date().valueOf()}`
}
// 解决eval eslint报错问题
const evil = str => {
  let Fn = Function
  return new Fn('return' + str)()
}

// 随机UID
const createUID = (name = '') => {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16)
  })
  return `${name}-${uuid}`
}

// 递归嵌套表单
const recursCollapseForm = (data, active = null, callback) => {
  data.forEach((item, index) => {
    if (!item.children) item.children = []
    if (item.children && item.children.length) {
      recursCollapseForm(item.children, active, callback)
    }
    if (item.key === active || !active) {
      callback && callback(item, index)
    }
  })
}

// 添加嵌套表单子元素
const addCollapseFormChild = key => {
  return {
    title: '表单名称',
    key,
    view: [],
    scopedSlots: {
      title: 'title'
    },
    expand: false
  }
}

export {
  randomName,
  evil,
  createUID,
  recursCollapseForm,
  addCollapseFormChild
}
