import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

let template = require("./hello.vue").default;

@Component({
  mixins: [template],
  components: {}
})
export default class Hello extends Vue {
  name: string = "hello";
  msg: string = "Welcome to Your Vue.js App";
}
