<template>
  <section>
    <h1 class="heading">TODO-LIST</h1>
    <router-link to="/">My List</router-link>
    <router-link
      to="/add"
      :class="{
        'router-link-active':
          $route.fullPath === '/add' || $route.fullPath === '/edit',
      }"
      >Add Item</router-link
    >
    <hr />
  </section>
</template>

<style scoped>
.heading {
  color: #777;
  text-align: left;
}

button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  margin: 0 5px;
}

button:hover,
button:active {
  background-color: #c7a3df;
  border-color: #270041;
}

a {
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: #333;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:active {
  color: #fff;
  border-color: rgb(68, 148, 253);
  background-color: rgb(172, 168, 168);
}

.router-link-active {
  color: #fff;
  border-color: rgb(68, 148, 253);
  background-color: #333;
}
</style>
