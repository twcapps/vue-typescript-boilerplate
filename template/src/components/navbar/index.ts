import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as Logger from "js-logger";
import template from "./navbar.vue";
import * as Store from "../../store";

@Component({
  mixins: [template],
})
export default class NavBar extends Vue {
  collapsed: boolean = true;

  me: "me";
  isLoggedIn: "loggedIn";

  /*************************************************/
  /* LIFE CYCLE EVENTS */
  /*************************************************/
  created() {
    // Nothing for now...
  }

  /*************************************************/
  /* METHODS */
  /*************************************************/
  collapse() {
    this.collapsed = !this.collapsed;
  }

  onClickLogin() {
    Store.commitLoaderVisibility(this.$store, false);
    Store.commitLoggedInState(this.$store, true);
  }
}