// nav item hover effect

const nav_items_has_dropdown = document.querySelectorAll(
  ".nav-right_link.has_dropdown-menu"
);
const nav_right_item_all = document.querySelectorAll(".nav-right_item");

const all_dropdown_menu = document.querySelectorAll("ul.gf_dropdown-wrapper");

// nav_right_item_all.forEach((item) => {
//   item.addEventListener("mouseover", (e) => {
//     const selected_item = e.target
//       .closest(".nav-right_item")
//       .querySelector("ul.gf_dropdown-wrapper");
//     selected_item.style.cssText = "visibility: visible; opacity:1;";
//   });
// });

// nav_right_item_all.forEach((item) => {
//   item.addEventListener("mouseout", (e) => {
//     const selected_item = e.target
//       .closest(".nav-right_item")
//       .querySelector("ul.gf_dropdown-wrapper");
//     selected_item.style.cssText = "visibility: hidden; opacity:0;";
//   });
// });

all_dropdown_menu.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const selected_item = e.target
      .closest(".nav-right_item")
      .querySelector(".nav-right_link");
    selected_item.style.cssText =
      "background-color:#484848;box-shadow: 0 1px 0px 0px rgb(255 255 255 / 20%) inset;";
  });
});

all_dropdown_menu.forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    const selected_item = e.target
      .closest(".nav-right_item")
      .querySelector(".nav-right_link");
    selected_item.style.cssText = "";
  });
});

//moblie view nav
