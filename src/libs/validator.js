/*
  中文
*/
const isRegExp = (rule, value, callback) => {
  if (!value) callback()
  var isreg
  try {
    isreg = eval(value) instanceof RegExp
  } catch (e) {
    isreg = false
  }
  if (isreg) {
    callback()
  } else {
    return callback(new Error('正则表达式格式不正确'))
  }
}

export {
  isRegExp
}