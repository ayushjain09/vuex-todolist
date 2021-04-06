<template>
  <section class="wrapper">
    <li>
      <slot></slot>
      <input
        class="clickables"
        type="checkbox"
        :value="id"
        @change="toggleSelectedItem({ itemId: id })"
      />

      <div class="title" :class="{ 'strike-off': strikeOff }">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
      </div>

      <div class="clickables">
        <input
          class="complete"
          type="checkbox"
          :checked="strikeOff"
          @change="toggleComplete({ itemId: id })"
        />
        <button class="delete" @click="deleteItem({ itemIdList: [id] })">
          Delete
        </button>
        <button class="edit" @click="editItem(id)" :disabled="editDisable">
          Edit
        </button>
      </div>
    </li>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["title", "desc", "id", "strikeOff"],

  methods: {
    ...mapMutations(["deleteItem", "toggleComplete", "toggleSelectedItem"]),

    editItem(itemId) {
      this.$router.push(`/edit/${itemId}`);
    },
  },

  computed: {
    editDisable() {
      return (
        this.$store.state.selectedItems.length > 1 &&
        this.$store.state.selectedItems.includes(this.id)
      );
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 1rem 25%;
}

li {
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  /* background-color: rgb(189, 218, 255); */
}

div {
  display: inline-block;
}

button {
  margin: 0 5px;
}

.clickables {
  position: relative;
  bottom: 20px;
  margin: 0 1rem;
}

.title {
  width: 60%;
}

.strike-off {
  text-decoration: line-through;
  /* color: #ccc; */
}

.complete .select {
  width: 3%;
  margin: 1rem;
  color: blue;
}
</style>
