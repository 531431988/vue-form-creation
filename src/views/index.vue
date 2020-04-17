<template>
  <div>
    <router-link to="/add">
      <a-button type="primary">添加模板</a-button>
    </router-link>
    <a-table :columns="columns" :dataSource="tableData" :pagination="false">
      <span slot="action" slot-scope="text, item">
        <router-link to="/edit">编辑</router-link>
        <a-divider type="vertical" />
        <router-link to="/view">详情</router-link>
      </span>
    </a-table>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      tableData: [{
        key: '1',
        name: '用户信息',
        data: [{
          name: '单行文本',
          type: 'input',
          icon: 'edit',
          attrs: {
            maxLength: null,
            prefix: null,
            suffix: null,
            addonBefore: null,
            addonAfter: null,
            width: {
              label: '300',
              value: 'px'
            },
            allowClear: null
          }
        }]
      }]
    }
  },
  methods: {
  }

}
</script>
<style lang="less" scoped>
</style>
