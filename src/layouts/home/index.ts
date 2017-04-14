import * as Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import Jumbotron from "../jumbotron";

import "./home.scss";

let template = require("./home.vue");

@Component({
  render: template.render,
  staticRenderFns: template.staticRenderFns,
  components: {
    Jumbotron: Jumbotron
  }
})
export default class Home extends Vue {
}
