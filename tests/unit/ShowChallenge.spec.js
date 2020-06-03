import { shallowMount, createLocalVue } from "@vue/test-utils";
import ShowChallenge from "@/views/ShowChallenge.vue";

describe("ShowChallenge", () => {
  test("it has an <h1> heading", () => {
    const wrapper = shallowMount(ShowChallenge);
    expect(wrapper.contains("h1")).toBe(true);
  });
});
