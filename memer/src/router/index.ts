import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Save from "../views/Save.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/save",
    name: "Save",
    component: Save
  },
  {
    path: "/layouts",
    name: "Layouts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/LayoutChooser.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import(/* webpackChunkName: "about" */ "../views/Settings.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
