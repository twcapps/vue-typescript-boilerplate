import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as Logger from "js-logger";

import Hello from "../../components/hello";
import template from "./jumbotron.vue";

@Component({
  mixins: [template],
  components: {
    Hello
  }
})
export default class Jumbotron extends Vue {

}
