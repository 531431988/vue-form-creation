import { evil, hasOne } from '@/libs/utils'
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
    decorator () {
      const { required, validate } = this.attrs
      let rules = []
      if (hasOne(['radio', 'checkbox'], this.type)) {
        console.log('是radio')
        if (validate.type) {
          rules = [{
            required,
            type: validate.type,
            message: '此项必填'
          }]
        }
      } else {
        // 必填
        if (required) {
          rules = [{ required: true, message: '此项必填' }]
        }
        if (validate.value) {
          rules = [...rules, {
            pattern: evil(validate.pattern),
            message: validate.message
          }]
        } else {
          rules = [...rules]
        }
      }

      return [
        this.attrs.name,
        {
          initialValue: this.attrs.value,
          rules
        }]
    }
  }
}
