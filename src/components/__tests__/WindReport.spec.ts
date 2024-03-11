import { shallowMount } from "@vue/test-utils";
import WindDirection from "../WindDirection.vue";

describe("WindDirection", () => {
 it("renders without crashing", (): void => {
 const wrapper = shallowMount(WindDirection, {
 props: {
 degrees: 90,
 },
 });
 expect(wrapper).toBeTruthy();
 });
 it("renders the indicator with the correct wind direction", (): void => {
 const wrapper = shallowMount(WindDirection, {
 props: {
 degrees: 270,
 },
 });
//  const direction = wrapper.find("[data-testid=direction]");
//  expect(direction.attributes("style")).toContain("rotate(90deg)");
//  expect(direction.html()).toContain("⬇");
const srOnly = wrapper.find("[data-testid=sr-only]");
expect (srOnly.html()).toContain("sr-Only");
expect (srOnly.html()).toContain("Wind Direction:270 degrees");
 });
});