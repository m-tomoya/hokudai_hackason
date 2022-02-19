import Vue from "vue";
import VueRouter from "vue-router";
import TopView from "../views/Top.vue";
import SupportsView from "../views/Supports.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top",
    component: TopView,
  },
  {
    path: "/supports",
    name: "supports",
    component: SupportsView,
  },
  {
    path: "/hosts",
    name: "hosts",
    component: SupportsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
