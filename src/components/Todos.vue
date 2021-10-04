<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span>
        = Incomplete
      </span>
      <span>
        <span class="complete-box"></span>
         = Complete
      </span>
    </div>
    <div class="todos">
      <div @dblclick="onDblClick(todo)" class="todo" :class="{'is-complete':todo.completed}" v-for="todo in allTodos" :key="todo.id">
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
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed,
      };

      this.updateTodo(updatedTodo);
    },
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style lang="scss" scoped>
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;

    .complete-box {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #35495e;
    }

    .incomplete-box {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #41b883;
    }
  }

  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }

    .todo {
      border: 1px solid #ccc;
      background: #41b883;
      padding: 1rem;
      border-radius: 5px;
      text-align: center;
      position: relative;
      cursor: pointer;
      user-select: none;

      &.is-complete {
        background: #35495e;
        color: #fff;
      }

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