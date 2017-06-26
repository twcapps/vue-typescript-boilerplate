import "core-js/es6/date";
import "core-js/es6/promise";

// _scopeId is officially a private API, make it public for this project
import Vue from "vue";
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    _scopeId?: string;
  }
}
