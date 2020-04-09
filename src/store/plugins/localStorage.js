import { ls } from '@/libs/utils'
// 数据持久化
export default store => {
  if (ls.get('state')) store.replaceState(ls.get('state'))
  // 当有mutations操作时执行
  store.subscribe((mutations, state) => {
    ls.set('state', state)
  })
}
