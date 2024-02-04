<template>
    <ul id="myUL">
      <li v-for="todo in list" v-bind:key="todo.no" @click="checkTodo(todo)" v-bind:class="{'checked': todo.cancelFlag}">
        {{todo.todo}}<span class="close" @click="deleteTodo(todo.no)">X</span>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    deleteTodo(no) {
      this.$emit('delete-todo', no);
    },
    checkTodo(todo) {
      this.$emit('check-todo', todo);
    }
  }
}
</script>