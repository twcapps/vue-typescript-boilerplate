import Vue from "vue";
import { Component, Prop } from "vue-typed";
import * as Logger from "js-logger";

let template = require("./navbar.vue");

@Component({
  mixins: [template],
})
export default class NavBar extends Vue {

  collapsed: boolean = true;

  me: "me";
  isLoggedIn: "loggedIn";

  collapse () {
    this.collapsed = !this.collapsed;
  }

  onClickLogin () {
    this.$store.commit("OPEN_DIALOG", "LoginModal", {});
  }

  // ...mapActions({
  //   getAccount: 'getAccount'
  // })

  created () {
    // this.isLoggedIn && this.getAccount({id: 'me'})
    // .catch(() => {});
  }
}