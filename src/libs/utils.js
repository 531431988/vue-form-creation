// 随机名称
const randomName = name => {
  return `${name}_${new Date().valueOf()}`
}

export {
  randomName
}
