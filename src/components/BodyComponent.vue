<template>
    <ul id="myUL">
  <li v-for="todo in list" v-bind:key="todo.no" class="inactive">
    {{todo.todo}}<span class="close" @click="deletetodo(todo.no)">x</span></li>
</ul>
</template>

<script>
export default {
    props: ['list'],
  data () {
    return {
      
    }
  },
  methods: {
    deletetodo(no) {
      this.$emit('todo-delete', no)
    }
  }
}

</script>
