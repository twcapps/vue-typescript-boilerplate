import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

import Hello from "../../components/hello";

import "./jumbotron.scss";

let template = require("./jumbotron.vue");

@Component({
  mixins: [template],
  components: {
    Hello
  }
})
export default class Jumbotron extends Vue {

}
