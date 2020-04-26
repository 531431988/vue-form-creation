<template>
  <ComponentConfig></ComponentConfig>
</template>

<script>
import attr from './attr'
import { mapState, mapMutations } from 'vuex'
export default {
  mixins: [attr],
  components: {
  },
  computed: {
    ...mapState({
      activeComponent: state => state.vfc.activeComponent
    })
  },
  methods: {
    ...mapMutations(['UPDATE_COMPONENT']),
  }
}
</script>

<style lang="less" scoped>
</style>
