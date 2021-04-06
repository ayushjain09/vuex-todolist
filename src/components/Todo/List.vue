<template>
  <ul>
    <!-- v-bind="item" passes each property as prop automatically -->
    <list-item
      v-for="item in todolist"
      :key="item.id"
      v-bind="item"
      :strikeOff="item.strikeOff"
    >
    </list-item>
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  components: {
    ListItem,
  },

  computed: {
    todolist() {
      return this.$store.getters.todolist;
    },
  },

  mounted() {
    console.log("log from List component - ", this.todolist);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  text-align: left;
  padding-left: 0;
}
</style>
