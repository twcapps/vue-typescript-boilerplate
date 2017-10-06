import Vue from "vue";
import { Component } from "vue-typed";
let template = require("./not-found.vue").default;

@Component({
  mixins: [template],
})
export default class NotFound extends Vue {

}
