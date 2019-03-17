<template>
  <a-table
    :columns="columns"
    :rowKey="record => record.login.uuid"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "20%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

export default {
  mounted() {
    this.fetch(10,1);
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    };
  },
  methods: {
    handleTableChange(pagination) {
      if (pagination) {
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch(pagination.pageSize, pagination.current);
      }
    },
    fetch(results, index) {
      this.loading = true;
      this.$get("https://randomuser.me/api",{
          results: results,
          page: index
        }).then(res => {
        const pagination = { ...this.pagination };
        pagination.total = 200;
        this.loading = false;
        this.data = res.results;
        this.pagination = pagination;
      });
    }
  }
};
</script>
