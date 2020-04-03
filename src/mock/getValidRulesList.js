export default {
  code: 200,
  data: {
    isChinese: {
      label: '中文',
      value: 'isChinese',
      pattern: '/^[\u4e00-\u9fa5]+$/',
      message: '只能输入中文'
    },
    isPhone: {
      label: '手机号',
      value: 'isPhone',
      pattern: '/^[1][0-9]{10}$/gi',
      message: '手机号码格式不正确'
    }
  },
  msg: '请求成功'
}
