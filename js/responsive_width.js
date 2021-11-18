import { ulWidthValue, widthChange } from "./homepage_slide.js";

const gf_nav_wrapper = document.querySelector(".gf_nav-wrapper");

/**
 * taking the value from the navigation bar;
 */
export let widthOfTheSliderContainer = gf_nav_wrapper.clientWidth;

window.addEventListener("load", () => {
  widthOfTheSliderContainer = gf_nav_wrapper.clientWidth;
  const ulWidth = widthOfTheSliderContainer;
  const slider_container = widthOfTheSliderContainer + "px";
  const slider_wrapper = widthOfTheSliderContainer + "px";
  widthChange(slider_container, slider_wrapper);
  ulWidthValue(ulWidth);
});

window.addEventListener("resize", () => {
  widthOfTheSliderContainer = gf_nav_wrapper.clientWidth;
  const ulWidth = widthOfTheSliderContainer;
  const slider_container = widthOfTheSliderContainer + "px";
  const slider_wrapper = widthOfTheSliderContainer + "px";
  widthChange(slider_container, slider_wrapper);
  ulWidthValue(ulWidth);
});
