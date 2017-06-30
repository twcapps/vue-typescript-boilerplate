import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";
import * as _ from "lodash";

let template = require("./foot.vue");
let config = require("../../config.json");

@Component({
  mixins: [template],
})
export default class Foot extends Vue {
  version: string = `${config.version}`;
  build: string = `${config.build}`;
}