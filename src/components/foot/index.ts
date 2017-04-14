import * as Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";
import * as _ from "lodash";

import "./foot.scss";

let template = require("./foot.vue");
let config = require("../../config.json");

@Component({
  render: template.render,
  staticRenderFns: template.staticRenderFns,
  components: {}
})
export default class Foot extends Vue {
  version: string = `${config.version}.${config.build}`;
}