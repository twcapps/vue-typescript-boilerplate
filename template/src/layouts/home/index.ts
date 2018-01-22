import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as Logger from "js-logger";

import Jumbotron from "../jumbotron";
import template from "./home.vue";

@Component({
  mixins: [template],
  components: {
    Jumbotron: Jumbotron
  }
})
export default class Home extends Vue {
}
