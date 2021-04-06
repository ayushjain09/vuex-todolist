<template>
  <section>
    <the-header></the-header>
    <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from "./components/Layout/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },

  mounted() {
    if (localStorage.getItem("todos")) {
      const data = JSON.parse(localStorage.getItem("todos"));
      console.log("list from storage - ", data);
      this.$store.commit("populateListFromStorage", data);
      console.log(this.$store.getters.todolist);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
