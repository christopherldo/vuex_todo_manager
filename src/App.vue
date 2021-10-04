<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';
import Todos from './components/Todos';

export default {
  name: 'App',
  components: {
    AddTodo,
    FilterTodos,
    Todos
  }
}
</script>

<style lang="scss">
  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;

    .container {
      max-width: 1100px;
      margin: 0 auto;
      overflow: auto;
      padding: 0 2rem;
    }
  }
</style>
