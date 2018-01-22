import Vue from "vue";
import { Component } from "vue-property-decorator";
import template from "./not-found.vue";

@Component({
  mixins: [template],
})
export default class NotFound extends Vue {

}
