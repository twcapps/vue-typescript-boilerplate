import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as Logger from "js-logger";
import template from "./foot.vue";
import config from "../../config.json";

@Component({
  mixins: [template],
})
export default class Foot extends Vue {
  version: string = `${config.version}`;
  build: string = `${config.build}`;
}