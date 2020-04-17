import ComponentConfig from './ComponentConfig'
import { mapState } from 'vuex'
export default {
  components: {
    ComponentConfig
  },
  computed: {
    ...mapState({
      formConfig: state => {
        const { type, baseFormConfig, collapseFormConfig } = state.vfc
        return type === 0 ? baseFormConfig : collapseFormConfig
      },
      attrs: state => state.vfc.activeComponent.item.attrs,
    })
  }
}
