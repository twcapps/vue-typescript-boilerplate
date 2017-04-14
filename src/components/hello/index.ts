import * as Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import "./hello.scss";

let template = require("./hello.vue");

@Component({
  render: template.render,
  staticRenderFns: template.staticRenderFns,
  components: {}
})
export default class Hello extends Vue {
  name: string = "hello";
  msg: string = "Welcome to Your Vue.js App";
}
