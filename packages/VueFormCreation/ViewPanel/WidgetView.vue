<template>
  <div class="widget-view">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.widget-view {
  padding: 24px 24px 0;
  margin-bottom: 24px;
  position: relative;
  border: 2px solid @primary-color;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
