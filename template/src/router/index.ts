import Vue from "vue";
import VueRouter from "vue-router";
import * as Logger from "js-logger";

import Home from "../layouts/home";
import NotFound from "../layouts/not-found";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: " ",
      component: Home
    },
    {
      path: "*",
      component: NotFound
    }
  ],
  mode: "hash",
  linkActiveClass: "active"
});