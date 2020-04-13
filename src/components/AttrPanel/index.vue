<template>
  <a-drawer
    :destroyOnClose="true"
    width="25%"
    placement="right"
    :closable="false"
    :visible="visible"
    @close="$emit('close')"
  >
    <component :is="activeComponent.name" class="attr-panel" />
  </a-drawer>
</template>

<script>
import { mapState } from 'vuex'
import VInputAttr from './VInputAttr'
import VTextareaAttr from './VTextareaAttr'
import VPasswordAttr from './VPasswordAttr'
import VInputNumberAttr from './VInputNumberAttr'
import VRadioAttr from './VRadioAttr'
import VSwitchAttr from './VSwitchAttr'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VInputAttr,
    VTextareaAttr,
    VPasswordAttr,
    VInputNumberAttr,
    VRadioAttr,
    VSwitchAttr
  },
  data () {
    return {
      is: ''
    }
  },
  computed: {
    ...mapState({
      activeComponent: state => state.vfc.activeComponent
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
