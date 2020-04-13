import { evil } from '@/libs/utils'
import ToolTip from './ToolTip'
export default {
  props: {
    attrs: {
      type: Object,
      default: () => ({})
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
      // 必填
      if (required) {
        if (validate.type) {
          rules = [{
            type: validate.type,
            message: '此项必填'
          }]
        } else {
          rules = [{ required: true, message: '此项必填' }]
        }
      }
      if (validate.value) {
        rules = [...rules, {
          pattern: evil(validate.pattern),
          message: validate.message
        }]
      } else {
        rules = [...rules]
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
