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
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    const todo = response.data;
    todo.id = uuid();

    commit('newTodo', todo);
  },
  async deleteTodo({ commit }, id) {
    // This is fake, just to show how to delete:
    // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations
}