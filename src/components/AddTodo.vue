<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit() {
      this.addTodo(this.title);
      this.title = '';
    }
  },
}
</script>

<style lang="scss" scoped>
  form {
    display: flex;

    input[type="text"], input[type="submit"] {
      border: 1px solid #41b883;
    }

    input[type="text"] {
      flex: 5;
      padding: 10px;
      outline: 0;
    }

    input[type="submit"] {
      flex: 1;
      background-color: #41b883;
      color: #fff;
      cursor: pointer;
    }
  }
</style>