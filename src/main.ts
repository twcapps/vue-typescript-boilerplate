import "./polyfill";
import "./localisation";

import * as Vue from "vue";
import { Component } from "vue-typed";
import * as VueRouter from "vue-router";
import * as Logger from "js-logger";

import { mapGetters, mapActions} from "vuex";

let Config = require("./config.json");

import store from "./store";

import Navbar from "./components/navbar";
import Foot from "./components/foot";

import {router} from "./routes";
import "src/style.scss";
let template = require("./main.vue");

Vue.use(VueRouter);

let logLevel = (Config.debug ? Logger.DEBUG : Logger.ERROR);
Logger.useDefaults();
Logger.setLevel(logLevel);

@Component({
  render: template.render,
  store,
  staticRenderFns: template.staticRenderFns,
  components: {
    Navbar,
    Foot
  },
  router: router
})
class App extends Vue {
  mounted () {
    Logger.log("mounted");
  }
};

window.onerror = function (errorMsg, url, lineNo, colNo, error) {
  Logger.error("Global event Error: ", errorMsg);
};

export const app = new App().$mount("#app");
