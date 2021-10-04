<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
        <svg @click="deleteTodo(todo.id)" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  computed: {
    ...mapGetters(['allTodos']),
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo']),
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style lang="scss" scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    .todo {
      border: 1px solid #ccc;
      background: #41b883;
      padding: 1rem;
      border-radius: 5px;
      text-align: center;
      position: relative;
      cursor: pointer;

      svg {
        width: 1rem;
        height: 1rem;
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>