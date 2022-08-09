import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/flow",
      name: "flow",
      component: () => import("@/app/views/flow/Flow.vue"),
    },
    {
      path: "/",
      redirect: "/flow",
    },
  ],
});
