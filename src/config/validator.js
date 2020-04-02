// 内置的验证规则列表
const validRulesList = {
  isChinese: {
    label: '中文',
    value: 'isChinese',
    pattern: '/^\p{Unified_Ideograph}+$/u',
    message: '只能输入中文'
  },
  isPhone: {
    label: '手机号',
    value: 'isPhone',
    pattern: '/^[1][0-9]{10}$/gi',
    message: '手机号码格式不正确'
  }
}

export default validRulesList
