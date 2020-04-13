
import { evil } from '@/libs/utils'
export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {

    }
  },
  computed: {
    decorator () {
      const { required, validate } = this.options
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
        this.options.name,
        {
          initialValue: this.options.value,
          rules
        }]
    }
  }
}
