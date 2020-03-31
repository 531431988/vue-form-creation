/*
  中文
*/
const isChinese = (rule, value, callback) => {
  var reg = /^[\u4e00-\u9fa5]+$/g
  if (!value) callback()
  if (!reg.test(value)) {
    return callback(new Error('只能输入中文'))
  } else {
    callback()
  }
}

export default {
  isChinese
}
