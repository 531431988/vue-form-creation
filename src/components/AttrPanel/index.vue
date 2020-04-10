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
import InputPanel from './InputPanel'
import TextareaPanel from './TextareaPanel'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    InputPanel,
    TextareaPanel
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
