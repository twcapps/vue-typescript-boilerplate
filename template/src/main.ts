import "./polyfill";
import "./localisation";

import Vue from "vue";
import { Component } from "vue-property-decorator";
import VueRouter from "vue-router";
import * as Logger from "js-logger";

import Config from "./config.json";

import * as Store from "./store";
import { store } from "./store";
import router from "./router";

import Navbar from "./components/navbar";
import Foot from "./components/foot";

import "./style.scss";
import template from "./main.vue";

let logLevel = (Config.debug ? Logger.DEBUG : Logger.ERROR);
Logger.useDefaults();
Logger.setLevel(logLevel);

Vue.config.errorHandler = function (err, vm, info) {
  Logger.error("Vue error: ", err);
};

@Component({
  mixins: [template],
  store,
  components: {
    Navbar,
    Foot
  },
  router
})
class App extends Vue {
  mounted() {
    Logger.log("App has mounted");

    const loaderVisible = Store.readLoaderVisibility(this.$store);
    console.log("loader is visible: ", loaderVisible);

    Store.commitLoaderVisibility(this.$store, false);
  }

  get splashActive() {
    return Store.readSplashScreenVisibility(this.$store);
  }

  get loaderActive() {
    return Store.readLoaderVisibility(this.$store);
  }
}

window.onerror = function (errorMsg, url, lineNo, colNo, error) {
  Logger.error("Global event: ", errorMsg);

  Store.commitLoggedInState(store, false);
  Store.commitLoaderVisibility(store, false);
};

export const app = new App().$mount("#app");
