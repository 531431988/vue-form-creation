<template>
  <ComponentConfig>
    <Options />
  </ComponentConfig>
</template>

<script>
import attr from './attr'
import Options from './Options'
export default {
  mixins: [attr],
  components: {
    Options
  }
}
</script>

<style lang="less" scoped>
</style>
