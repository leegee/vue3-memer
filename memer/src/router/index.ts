import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Save from "@/views/Save.vue";
import LayoutChooser from "@/views/LayoutChooser.vue";
import store from "@/store";

const requireImage = (store: any, next: Function) => {
  !store.state.image ? next({ name: "Home" }) : next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/save",
    name: "Save",
    component: Save,
    beforeEnter(to, from, next) {
      requireImage(store, next);
    }
  },
  {
    path: "/layouts",
    name: "Layouts",
    component: LayoutChooser,
    beforeEnter(to, from, next) {
      requireImage(store, next);
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/LayoutChooser.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
