
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
      const { required, valid } = this.options
      let rules = []
      // 必填
      if (required) {
        if (valid.type) {
          rules = [{
            type: valid.type,
            message: '此项必填'
          }]
        } else {
          rules = [{ required: true, message: '此项必填' }]
        }
      }
      if (valid.value) {
        rules = [...rules, {
          pattern: evil(valid.pattern),
          message: valid.message
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
