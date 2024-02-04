<template>
  <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" id="myInput" placeholder="Title..." v-model="todo">
    <span class="addBtn" @click="todoSave">Add</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      no: '',
      todo: ''
    }
  },
  methods: {
    todoSave() {
      this.$emit('save-todo', this.todo);
      this.todo = '';
    }
  }
}
</script>