import Vue from "vue";
import VueRouter from "vue-router";
import Chat from "../components/Chat.vue";
import ChatTwo from "../components/ChatTwo.vue";
import ChatThree from "../components/ChatThree.vue";
import ChatFor from "../components/ChatFor.vue";
import ChatFive from "../components/ChatFive.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/sala-1",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/sala-2",
    name: "ChatTwo",
    component: ChatTwo,
  },
  {
    path: "/sala-3",
    name: "ChatThree",
    component: ChatThree,
  },
  {
    path: "/sala-4",
    name: "ChatFor",
    component: ChatFor,
  },
  {
    path: "/sala-5",
    name: "ChatFive",
    component: ChatFive,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
