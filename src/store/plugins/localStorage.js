import { ls } from '@/libs/utils'
// 数据持久化
export default store => {
  if (ls.get('state')) {
    const { type, baseForm, collapseForm } = ls.get('state')
    store.state.vfc.type = type
    store.state.vfc.baseForm = baseForm
    store.state.vfc.collapseForm = collapseForm
  }
  // 当有mutations操作时执行
  store.subscribe((mutations, state) => {
    const { type, baseForm, collapseForm } = state.vfc
    ls.set('state', { type, baseForm, collapseForm })
  })
}
