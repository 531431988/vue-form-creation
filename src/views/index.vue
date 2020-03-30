<template>
  <div>
    <FormView />
    <CodeView :code="ExFormView" />
  </div>
</template>

<script>
import { CodeView, FormView } from '@/components'
import ExFormView from '!!raw-loader!../components/FormView'
export default {
  components: {
    CodeView,
    FormView
  },
  data () {
    return {
      ExFormView
    }
  },
  methods: {
  }

}
</script>
<style lang="less" scoped>
</style>
