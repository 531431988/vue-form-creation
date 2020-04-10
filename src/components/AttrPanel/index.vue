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
import VInputPanel from './VInputPanel'
import VTextareaPanel from './VTextareaPanel'
import VPasswordPanel from './VPasswordPanel'
import VInputNumberPanel from './VInputNumberPanel'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VInputPanel,
    VTextareaPanel,
    VPasswordPanel,
    VInputNumberPanel
  },
  data () {
    return {
      is: '',
      options: null
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
.attr-panel {
}
</style>
