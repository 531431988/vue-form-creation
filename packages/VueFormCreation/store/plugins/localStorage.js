import { ls } from '../../libs/utils'
// 数据持久化
export default store => {
  if (ls.get('state')) {
    store.state.vfc = Object.assign({}, store.state.vfc, ls.get('state'))
  }
  // 当有mutations操作时执行
  store.subscribe((mutations, state) => {
    const { type, baseForm, baseFormConfig, collapseForm, collapseFormConfig } = state.vfc
    ls.set('state', { type, baseForm, baseFormConfig, collapseForm, collapseFormConfig })
  })
}
