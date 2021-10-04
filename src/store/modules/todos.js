import axios from 'axios';
import { v4 as uuid } from 'uuid';

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    // This is fake, just to show how to add:
    // const response = await axios.post(
    //   'https://jsonplaceholder.typicode.com/todos',
    //   { title, completed: false }
    // );
    //
    // const todo = {...response.data, id: uuid()};

    const todo = {
      id: uuid(),
      title,
      completed: false,
    };

    commit('newTodo', todo);
  },
  async deleteTodo({ commit }, id) {
    // This is fake, just to show how to delete:
    // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  },
  async filterTodos({ commit }, limit) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, todo) {
    // This is fake, just to show how to update:
    // const response = await axios.put(
    //   `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    //   todo
    // );
    //
    // commit('updateTodo', response.data);

    commit('updateTodo', todo);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, todo) => {
    const index = state.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, todo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}