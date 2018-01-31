import "./polyfill";
import "./localisation";

import Vue from "vue";
import { Component } from "vue-property-decorator";
import VueRouter from "vue-router";
import * as Logger from "js-logger";

import { mapGetters, mapActions } from "vuex";

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
  mounted () {
    Logger.log("mounted");

    const loaderVisible = Store.readLoaderVisibility(this.$store);
    Logger.info("loader is visible: ", loaderVisible);
  }
}

window.onerror = function (errorMsg, url, lineNo, colNo, error) {
  Logger.error("Global event: ", errorMsg);

  Store.commitLoaderVisibility(store, false);
};

export const app = new App().$mount("#app");
