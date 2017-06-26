import Vue from "vue";
import { Component } from "vue-typed";
let template = require("./not-found.vue");

@Component({
  mixins: [template],
})
export default class NotFound extends Vue {

}
