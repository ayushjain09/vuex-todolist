import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import AddOrEditItem from "./components/Todo/AddOrEditItem.vue";
import List from "./components/Todo/List.vue";

const store = createStore({
  state() {
    return {
      todolist: [
        {
          id: 1,
          title: "Learn Vue",
          desc: "Learn the frontend framework by April",
          strikeOff: false,
        },
        {
          id: 2,
          title: "Complete assignment",
          desc: "Complete the routing assignment by 25 March",
          strikeOff: false,
        },
        {
          id: 3,
          title: "Add vuex to todolist",
          desc: "Implement state management in todolist using vuex",
          strikeOff: false,
        },
        {
          id: 4,
          title: "Complete training",
          desc: "Learn the complete training course by April",
          strikeOff: false,
        },
      ],

      selectedItems: [],
    };
  },

  mutations: {
    addItem(state, payload) {
      const newItem = {
        id: new Date().toISOString(),
        title: payload.title,
        desc: payload.desc,
        strikeOff: false,
      };

      state.todolist.unshift(newItem);
      localStorage.setItem("todos", JSON.stringify(state.todolist));
      router.push("/");

      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },

    editItem(state, payload) {
      const index = state.todolist.findIndex((item) => item.id == payload.id);
      state.todolist[index].title = payload.title;
      state.todolist[index].desc = payload.desc;
      localStorage.setItem("todos", JSON.stringify(state.todolist));
      router.push("/");

      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },

    deleteItem(state, payload) {
      if (
        state.selectedItems.length > 1 &&
        state.selectedItems.includes(payload.itemIdList[0])
      ) {
        payload.itemIdList = [...state.selectedItems];
        state.selectedItems = [];
      }

      payload.itemIdList.map((itemId) => {
        const idx = state.todolist.findIndex((res) => res.id === itemId);
        state.todolist.splice(idx, 1);
      });

      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },

    toggleComplete(state, payload) {
      const idx = state.todolist.findIndex((res) => res.id === payload.itemId);
      state.todolist[idx].strikeOff = !state.todolist[idx].strikeOff;

      localStorage.setItem("todos", JSON.stringify(state.todolist));
    },

    toggleSelectedItem(state, payload) {
      const idx = state.selectedItems.findIndex((id) => id === payload.itemId);
      if (idx < 0) state.selectedItems.push(payload.itemId);
      else state.selectedItems.splice(idx, 1);
    },

    populateListFromStorage(state, dataList) {
      state.todolist = dataList;
    },

    // updateLocalStorage() {
    //   localStorage.setItem("todos", JSON.stringify(state.todolist));
    // },
  },

  actions: {},

  getters: {
    todolist() {
      return store.state.todolist;
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:addoredit", component: AddOrEditItem, props: true },
    {
      path: "/:addoredit/:itemId",
      component: AddOrEditItem,
      props: true,
    },
    {
      path: "/",
      component: List,
    },
  ],
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
