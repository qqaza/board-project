<template>
  <div id="myDIV" class="header">
  <h2 style="margin:5px">My To Do List</h2>
  <input type="text" id="myInput" placeholder="Title..." v-model="todo">
  <span class="addBtn" @click="savetodo">Add</span>
</div>
</template>

<script>
export default {
 data() {
  return {
    todo: ''
  }
 },
 methods: {
  savetodo() {
    this.$emit('save-todo', this.todo)
  }
 }
  
}
</script>
