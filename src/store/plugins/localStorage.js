import SecureLS from 'secure-ls'
import config from '@/config'
const ls = new SecureLS(config.storageOptions)
const name = `${config.storageOptions.namespace}state`
// 数据持久化
export default store => {
  if (ls.get(name)) store.replaceState(ls.get(name))
  // 当有mutations操作时执行
  store.subscribe((mutations, state) => {
    ls.set(name, state)
  })
}
