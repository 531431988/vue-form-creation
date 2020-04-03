<template>
  <div>
    <BaseForm :data="data" :edit="edit" v-if="type === 0" />
    <CollapseForm :data="data" :edit="edit" v-if="type === 1" />
  </div>
</template>

<script>
import BaseForm from '@/components/ViewPanel/BaseForm'
import CollapseForm from '@/components/ViewPanel/CollapseForm'
import { mapState } from 'vuex'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseForm,
    CollapseForm
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      type: state => state.vfc.type
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
