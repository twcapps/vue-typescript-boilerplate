import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as Logger from "js-logger";
import template from "./navbar.vue";
import * as Store from "../../store";

@Component({
  mixins: [template],
})
export default class NavBar extends Vue {
  /*************************************************/
  /* LIFE CYCLE EVENTS */
  /*************************************************/
  created() {
    // When the component gets created.
  }

  mounted() {
    // See: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  }

  /*************************************************/
  /* COMPUTED'S */
  /*************************************************/
  get isLoggedIn(): boolean {
    return Store.readLoggedInState(this.$store);
  }

  /*************************************************/
  /* METHODS */
  /*************************************************/
  onClickLogin() {
    Store.commitLoggedInState(this.$store, !this.isLoggedIn);
    Logger.info("User is logged in: ", this.isLoggedIn);
  }
}