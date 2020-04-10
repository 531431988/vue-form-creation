<template>
  <div class="widget-list">
    <p class="title">{{title}}</p>
    <a-row>
      <a-col :span="12" v-for="(item, index) in data" :key="index">
        <a-button size="small" @click="onClick(item)">
          <a-icon :type="item.icon"></a-icon>
          {{item.name}}
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    onClick (item) {
      if (item.options) {
        this.$store.commit('ADD_COMPONENT', item)
      } else {
        this.$message.info('通宵开发中……')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.widget-list {
  padding: 10px;
  margin-bottom: 20px;
  .title {
    margin: 5px 0;
  }
}
</style>
