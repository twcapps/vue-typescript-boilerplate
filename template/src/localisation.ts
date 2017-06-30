import "intl";
import "intl/locale-data/jsonp/en.js";

import Vue from "vue";
import VueLocale from "vue-ts-locale";

let Config = require("./config.json");
let EnglishMessageText = require("./locale/en.json");

Vue.use(VueLocale, {
  language: Config.language,
  currency: Config.currency,
  messages: EnglishMessageText
});
