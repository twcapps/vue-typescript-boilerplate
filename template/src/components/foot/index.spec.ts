import BaseButton from "./index";
import { mount } from "vue-test-utils";
import "../../localisation";

describe("foot.vue", () => {
  let wrapper: any;

  beforeEach(() => {
      wrapper = mount(BaseButton, {
          data: {},
          propsData: {
            version: "1.0.0",
            build: "1"
          }
      });
  });

  it("should render version correctly", () => {
    wrapper.vm.$nextTick(() => {
      let el = wrapper.vm.$el.querySelector(".text-muted");
      expect((<Element>el).textContent)
        .toEqual("Vue-Typescript-boilerplate 1.0.0.1 powered by Vue");
    });
  });
});
