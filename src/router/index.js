import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "to-do",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/Create.vue")
    },
    {
      path: "/update",
      name: "updated",
      component: () => import("../views/Update.vue")
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/Favorites.vue")
    }
  ]
});

export default router;
