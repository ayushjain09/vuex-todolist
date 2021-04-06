<template>
  <div class="form">
    <form @submit.prevent="updateList">
      <label
        for="title"
        v-html="addoredit === 'add' ? 'Add Title' : 'Edit Title'"
      ></label>
      <input type="text" placeholder="Clean House" v-model="title" />

      <label
        for="description"
        v-html="addoredit === 'add' ? 'Add Description' : 'Edit Description'"
      ></label>
      <textarea
        name="description"
        id=""
        cols="30"
        rows="3"
        v-model="desc"
        v-focus
      ></textarea>

      <input type="Submit" class="addBtn" />
    </form>
  </div>
</template>

<script>
export default {
  props: ["addoredit", "itemId"],

  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },

  data() {
    return {
      title: "",
      desc: "",
      id: null,
    };
  },

  computed: {
    todolist() {
      return this.$store.getters.todolist;
    },
  },

  methods: {
    updateList() {
      if (this.addoredit === "add")
        this.$store.commit("addItem", { title: this.title, desc: this.desc });
      else if (this.addoredit === "edit")
        this.$store.commit("editItem", {
          id: this.itemId,
          title: this.title,
          desc: this.desc,
        });
    },
  },

  mounted() {
    if (this.itemId) {
      const index = this.todolist.findIndex((item) => item.id == this.itemId);
      this.title = this.todolist[index].title;
      this.desc = this.todolist[index].desc;
    }
  },
};
</script>

<style scoped>
.form {
  display: flex;
  padding: 3rem 25rem;
  font-size: 1.2rem;
  text-align: center;
  /* background-color: rgb(103, 150, 194); */
  overflow: hidden;
}

form {
  position: relative;
  padding: 2rem;
  background-color: white;
  width: 100%;
  /* height: 60vh; */
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  text-align: center;
}

label {
  display: block;
  font-size: 2rem;
}

input,
textarea {
  font-size: 1.3rem;
  margin: 2rem 0;
}

.addBtn {
  margin: 0;
  position: relative;
  display: block;
  left: 37%;
  font-size: 1rem;
  padding: 0.7rem 2rem;
  background-color: rgb(103, 150, 194);
  border: none;
  border-radius: 50px;
}
</style>
