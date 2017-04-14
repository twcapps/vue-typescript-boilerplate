import * as Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

let template = require("./hello.vue");

@Component({
  render: template.render,
  staticRenderFns: template.staticRenderFns,
  _scopeId: template._scopeId,
  components: {}
})
export default class Hello extends Vue {
  name: string = "hello";
  msg: string = "Welcome to Your Vue.js App";
}
