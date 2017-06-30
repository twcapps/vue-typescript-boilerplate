import Vue from "vue";
import BaseButton from "./index";
import { expect } from "chai";

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

function getRenderedClassText (Component, propsData, className) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData: propsData }).$mount();
  return vm.$el.querySelector(className).textContent;
}

describe("foot.vue", () => {
  it("should render version correctly", () => {
    expect(getRenderedClassText(BaseButton, {
      version: "1.0.0",
      build: "1"
    }, ".text-muted"))
    .to.equal("Vue-Typescript-boilerplate 1.0.0.1 powered by Vue");
  });
});
