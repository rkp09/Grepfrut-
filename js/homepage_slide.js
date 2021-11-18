// paragaph array for the slider
const paragaphs = [
  "Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum qui blandit praesent feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui zzril delenit quam littera qui blandit praesent augue duis dolore te feugait nulla facilisi.",
  "Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril in iis qui facit eorum delenit augue duis dolore te feugait nulla facilisi.",
  "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui qui blandit praesent zzril gothica delenit augue duis dolore te feugait nulla facilisi.",
  "Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te qui blandit praesent feugait nulla facilisi.",
];

// title array for the slider
const titlesFirstPhrase = [
  "Promise to create",
  "Responsive interface",
  "Easy to edit & ",
  "Awesome creativity",
  "Our cloud thinking ",
];

const titlesSecondPhrase = [
  "unique experiences for web and mobile",
  "became necessity for various devices",
  "customize templates for web and mobile",
  "& passion to develop apps for mobile devices",
  "process creates unlimited possibilities",
];

const imageArray = [
  "../img/tab-slide1.png",
  "../img/tab-slide2.png",
  "../img/tab-slide3.png",
  "../img/tab-slide4.png",
  "../img/tab-slide5.png",
];

class Slider {
  constructor(title_first, title_sec, paragaph, img) {
    this.title_first = title_first;
    this.title_sec = title_sec;
    this.paragaph = paragaph;
    this.img = img;
  }
}

const sliderObjArray = [];

for (let i = 0; i < imageArray.length; i++) {
  let slide = new Slider(
    titlesFirstPhrase[i],
    titlesSecondPhrase[i],
    paragaphs[i],
    imageArray[i]
  );

  sliderObjArray.push(slide);
}

// slider container element
const slider_container = document.querySelector(".hpgf_slider-container");
const listItems = document.createElement("ul");
listItems.setAttribute("class", "hpgf_slider-items");
const injectToDomArray = sliderObjArray.map((ele) => {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "hpgf_slider-item");
  listItem.innerHTML = `
    <section class="hpgf_slider-wrapper">
        <section class="hpgf_slider-content">
            <h2 class="hpgf_slider-title">${ele.title_first} <br/>${ele.title_sec}</h2>
            <p class="hpgf_slider-paragaph">${ele.paragaph}</p>
        </section>
        <section class="hpgf_slider-img-wrapper">
            <img src=${ele.img} alt="Slider Image">
        </section>
    </section>
  `;
  return listItem;
});

injectToDomArray.forEach((item) => {
  return listItems.append(item);
});

slider_container.append(listItems);

/**
 * carousel bottom button which will directly inject to the DOM;
 */

/**
 * array for the slider tab title
 */
const slider_text_array = [
  "Awesome web templates",
  "Responsive layout",
  "Easy to customize",
  "State of art design",
  "Infinite modules",
];

/**
 * array for the slider tab icons
 */
const slider_tab_icons = [
  "../icons/slider-tab-icon1.png",
  "../icons/slider-tab-icon2.png",
  "../icons/slider-tab-icon3.png",
  "../icons/slider-tab-icon4.png",
  "../icons/slider-tab-icon5.png",
];

/**
 * class for slider tab
 */
class Tab {
  constructor(icon, text) {
    this.icon = icon;
    this.text = text;
  }
}

const tabObjArray = [];
for (let i = 0; i < slider_tab_icons.length; i++) {
  const tab = new Tab(slider_tab_icons[i], slider_text_array[i]);
  tabObjArray.push(tab);
}

/**
 * variable of hpgf_slider-container section
 */
const hpgf_slider_tab_container = document.querySelector(
  ".hpgf_slider-container"
);

// making a new ul element for wrapping slider tab items
const createNewUl = document.createElement("ul");
createNewUl.setAttribute("class", "hpgf_slider-tab-items");
/**
 * creating dom object using tabObjArray
 */
const injectToTabArray = tabObjArray.map((ele) => {
  const createNewli = document.createElement("li");
  createNewli.setAttribute("class", "hpgf_slider-tab-item");
  createNewli.innerHTML = `<section class="hpgf_slider-tab-object">
      <img src=${ele.icon} class="tab_icon" alt="tab icon">
      <p class="tab_paragaph">${ele.text}</p>
    </section>
    `;
  return createNewli;
});

injectToTabArray.forEach((ele) => {
  return createNewUl.append(ele);
});

hpgf_slider_tab_container.append(createNewUl);

/***
 * In the bottom all content is used for making responsive carousel ;
 * Here in the bottom  contains specified variables and function
 * which is need for this carousel;
 */

const gf_nav_wrapper = document.querySelector(".gf_nav-wrapper");
const hpgf_slider_container = document.querySelector(
  "section.hpgf_slider-container"
);

const hpgf_slider_container_all = Array.from(
  document.querySelectorAll("section.hpgf_slider-container")
);
/**
 * making a variable for slider all object wrapper inside li item;
 */
const slider_obj_wrapper = document.querySelector(
  "section.hpgf_slider-wrapper"
);
/**
 *  variable contains array of object which is  slider object wrapper inside li item;
 */
const slider_obj_wrapper_all = Array.from(
  document.querySelectorAll("section.hpgf_slider-wrapper")
);

/**
 * get the width of the nav acctual width and use it on the slide for making responsive width;
 */
let widthOfTheSliderContainer = gf_nav_wrapper.clientWidth;

/**
 *
 * @param {*this eventListener help to get the accutual width when load} slider_container
 * @param {*this eventListener help to get the accutual width when resize window} slider_wrapper
 */
function widthChange(slider_container, slider_wrapper) {
  hpgf_slider_container_all.forEach((item) => {
    item.style.width = slider_container;
  });
  slider_obj_wrapper_all.forEach((item) => {
    item.style.width = slider_wrapper;
  });
}

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

/**
 * variables for the (unorder list, lists array)
 */
const hpgf_slider_items = document.querySelector("ul.hpgf_slider-items");
const hpgf_slider_items_array = Array.from(hpgf_slider_items.children);
const hpgfSCLength = hpgf_slider_items_array.length;

/**
 * making unordered list responsive
 */
function ulWidthValue(ulWidth) {
  hpgf_slider_items.style.width = ulWidth * 5 + "px";
}

/**
 * add active class to the active Slide;
 */
hpgf_slider_items_array[0].classList.add("active_slide");

/***
 * dynamic slide
 */

/**
 * variable for slider array index;
 */
let counter = 0;
function move_to_slide() {
  const sliderLength = hpgf_slider_items_array.length - 1;
  hpgf_slider_items.style.transform =
    "translate3d(-" + widthOfTheSliderContainer * counter + "px, 0, 0)";
  hpgf_slider_items.style.transition = "transform .6s linear";

  if (counter > sliderLength) {
    counter = 0;
    hpgf_slider_items.style.transform =
      "translate3d(" + widthOfTheSliderContainer * counter + "px, 0, 0)";
    hpgf_slider_items.style.transition = "transform .6s linear";
  }

  /**
   * variables for adding class to the current active slide;
   */
  let previousElement = hpgf_slider_items_array[counter].previousElementSibling;
  let currentElement = hpgf_slider_items_array[counter];
  const lastElement = hpgf_slider_items_array[sliderLength];
  switch (counter) {
    case 0:
      if (lastElement.classList.contains("active_slide")) {
        lastElement.classList.remove("active_slide");
        currentElement.classList.add("active_slide");
      }
      break;
    default:
      previousElement.classList.remove("active_slide");
      currentElement.classList.add("active_slide");
  }
  /**
   * changeColor function from  top  to change the color;
   */
  changeTabColor(counter);
  counter++;
}

setInterval(move_to_slide, 3000);
/***
 * dynamic slide script done
 */

/***
 * set the width of the tab slider indicator
 */

const sliderIndicators = document.querySelectorAll(
  "section.hpgf_slider-tab-object"
);
const indicatorWidth = widthOfTheSliderContainer / 5;
sliderIndicators.forEach((item) => {
  item.style.width = indicatorWidth + "px";
});

const sliderIndicatorItemsArray = Array.from(
  document.querySelectorAll("li.hpgf_slider-tab-item")
);

/**
 *
 * @param {take(index as current ) value from move_to_slide function} index
 */
function changeTabColor(index) {
  const tabArrayLength = sliderIndicatorItemsArray.length - 1;
  let previousElement =
    sliderIndicatorItemsArray[counter].previousElementSibling;
  let currentElement = sliderIndicatorItemsArray[counter];
  const lastElement = sliderIndicatorItemsArray[tabArrayLength];
  switch (index) {
    case 0:
      if (lastElement.classList.contains("active_indicator")) {
        lastElement.classList.remove("active_indicator");
        currentElement.classList.add("active_indicator");
      } else {
        currentElement.classList.add("active_indicator");
      }

      break;
    default:
      previousElement.classList.remove("active_indicator");
      currentElement.classList.add("active_indicator");
  }
}

/**
 * this event is for the slider .When user click on a specific tab slider will be open which is relate to this tab;
 */
sliderIndicatorItemsArray.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.closest(".hpgf_slider-tab-item") ===
      sliderIndicatorItemsArray[index]
    ) {
      counter = index;
      sliderIndicatorItemsArray.forEach((item) => {
        item.classList.remove("active_indicator");
      });
    } else {
      return;
    }
  });
});
/**
 * image slider complete ;
 */
