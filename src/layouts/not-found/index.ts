import * as Vue from "vue";
import { Component } from "vue-typed";
let template = require("./not-found.vue");

@Component({
  render: template.render,
  staticRenderFns: template.staticRenderFns,
})
export default class NotFound extends Vue {

}
