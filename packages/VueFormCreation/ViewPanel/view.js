import { evil, hasOne } from '../libs/utils'
import ToolTip from './ToolTip'
export default {
  props: {
    attrs: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: ''
    }
  },
  components: {
    ToolTip
  },
  data () {
    return {

    }
  },
  computed: {
    // decorator () {
    //   const { required, validate } = this.attrs
    //   let rules = []
    //   if (hasOne(['radio', 'checkbox', 'switch'], this.type)) {
    //     if (validate.type) {
    //       rules = [{
    //         required,
    //         type: validate.type,
    //         message: '此项必填'
    //       }]
    //     }
    //   } else {
    //     // 必填
    //     if (required) {
    //       rules = [{ required: true, message: '此项必填' }]
    //     }
    //     if (validate && validate.value) {
    //       rules = [...rules, {
    //         pattern: evil(validate.pattern),
    //         message: validate.message
    //       }]
    //     } else {
    //       rules = [...rules]
    //     }
    //   }

    //   let propName = this.type === 'switch' ? {
    //     valuePropName: 'checked'
    //   } : {}
    //   return [
    //     this.attrs.name,
    //     {
    //       initialValue: this.attrs.value,
    //       ...propName,
    //       rules
    //     }]
    // }
  }
}
