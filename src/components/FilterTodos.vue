<template>
  <div>
    Filter Todos:
    <select v-model="filter">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  data() {
    return {
      filter: '200',
    };
  },
  methods: {
    ...mapActions(['filterTodos']),
  },
  watch: {
    filter() {
      this.filterTodos(this.filter);
    },
  },
}
</script>

<style lang="scss" scoped>
  select {
    background: #eee;
    margin-top: 20px;
    padding: 6px;
    border: 1px solid #41b883;
  }
</style>