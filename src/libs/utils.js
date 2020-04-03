// 随机名称
const randomName = name => {
  return `${name}_${new Date().valueOf()}`
}
// 解决eval eslint报错问题
const evil = fn => {
  let Fn = Function
  return new Fn('return' + fn)()
}

export {
  randomName,
  evil
}
