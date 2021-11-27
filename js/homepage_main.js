/**
 *
 *
 *unique experiences block design and deployment.
 *
 *
 */

//  experience images
const experience_images = [
  "../icons/iphone.png",
  "../icons/leaf.png",
  "../icons/create.png",
];

// experience titles

const experience_titles = ["Responsive", "Customizable", "Documented"];

// experience paragaphs

const experience_paragaphs = [
  "Duis autem vel eum iriure qui dolor est etiam in velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.",
  "Autem vel eum praesent dolor in hendrerit in vulputate velit esse molestie consequat, at vero vel blandit illum dolore eu feugiat nulla.",
  "Eodem modo typi qui nunc nobis videntur parum clari, fiant sollemnes est ad minim usus liber tempor option legentis in futurum.",
];

/**
 * Experience class for making obj from these array.
 */
class Experience {
  constructor(img, title, paragaph) {
    this.img = img;
    this.title = title;
    this.paragaph = paragaph;
  }
}

//it is now null but object will push from for loop to make a all object array;
const experienceObjArray = [];

//for loop for fill the full obj to the experience object array;
for (let i = 0; i < experience_images.length; i++) {
  const obj = new Experience(
    experience_images[i],
    experience_titles[i],
    experience_paragaphs[i]
  );
  experienceObjArray.push(obj);
}

//experience container
const hpgf_experience_wrapper = document.querySelector(
  "section.hpgf_experience-wrapper"
);
/**
 * import widthOfTheSliderContainer responsive_width.js
 */
import { widthOfTheSliderContainer } from "./responsive_width.js";
//set the width of the experience section
hpgf_experience_wrapper.style.width = widthOfTheSliderContainer + "px";

//making some require element to inject to the DOM;
const experienceUl = document.createElement("ul");
experienceUl.setAttribute("class", "hpgf_experience-items");

const expereinceDomObj = experienceObjArray.map((ele) => {
  const experienceLi = document.createElement("li");
  experienceLi.setAttribute("class", "hpgf_experience-item");
  // all li item will get these content
  experienceLi.innerHTML = `
    <section class="hpgf_experience-obj">
        <figure class="experience_img-container">
            <img class="experience_img" width="120px" height="120px" src=${ele.img} alt="${ele.title} web experience" >
        </figure>
        <section class="experience_content">
            <h2 class="experience_title">${ele.title}</h2>
            <p class="experience_paragaph">${ele.paragaph}</p>
        </section>
    </section>`;
  return experienceLi;
});

// this will append the content to the ul element
expereinceDomObj.forEach((ele) => {
  return experienceUl.append(ele);
});

// this will append all ul content into the hpgf_experience_wrapper;
hpgf_experience_wrapper.append(experienceUl);

/**
 *
 *
 * feature at glance section
 *
 *
 */

/**
 * feature block all images
 */
const featureImages = [
  "../img/feature-1.jpg",
  "../img/feature-2.jpg",
  "../img/feature-3.jpg",
  "../img/feature-4.jpg",
  "../img/feature-5.jpg",
  "../img/feature-6.jpg",
];

/**
 * feature block titles;
 */
const featureTitles = [
  "Easy to use lorem interface",
  "Cost effective ipsum amet",
  "Clean layout for lorem",
  "24x7 support on sit amet",
  "Instant updation sit",
  "Visually appealing dolor",
];

/**
 * feature paragaphs
 */

const featureParagaphs = [
  "Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum assum dolore eu feugiat nulla.",
  "Typi non habent vero claritatem insitam usus legentis in iis qui facit eorum volutpat est legere lius quod ullamcorper legentis legunt.",
  "Duis autem vel eum iriure dolor in congue velit hendrerit in vulputate velit esse dolore eu feugiat nulla facilisis at vero congue nihil.",
  "Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum assum dolore eu feugiat nulla.",
  "Typi non habent vero claritatem insitam usus legentis in iis qui facit eorum volutpat est legere lius quod ullamcorper legentis legunt.",
  "Duis autem vel eum iriure dolor in congue velit hendrerit in vulputate velit esse dolore eu feugiat nulla facilisis at vero congue nihil.",
];

/**
 * Feature class for making same obj structure;
 */
class Feature {
  constructor(img, title, paragraph) {
    this.img = img;
    this.title = title;
    this.paragaph = paragraph;
  }
}

/**
 * featueres array
 */
const featuresArray = [];
/**
 * using for loop for making instances at a time;
 */

for (let i = 0; i < featureImages.length; i++) {
  const feature = new Feature(
    featureImages[i],
    featureTitles[i],
    featureParagaphs[i]
  );
  featuresArray.push(feature);
}

/**
 * feature wrapper ;
 */
const hpgf_feature_wrapper = document.querySelector(".hpgf_feature-wrapper");
//feature box
const createItemsbox = document.createElement("section");
createItemsbox.setAttribute("class", "hpgf_feature-items-box");
hpgf_feature_wrapper.append(createItemsbox);
const hpgf_feature_items_box = document.querySelector(
  ".hpgf_feature-items-box"
);
//feature items box nested wrapper
const createItemsWrapper = document.createElement("section");
createItemsWrapper.setAttribute("class", "hpgf_feature-items-wrapper");
hpgf_feature_items_box.append(createItemsWrapper);
const hpgf_feature_items_wrapper = document.querySelector(
  ".hpgf_feature-items-wrapper"
);

//create a new ul element ;
const newFeatureUl = document.createElement("ul");
newFeatureUl.setAttribute("class", "hpgf_feature-items");
const featureDomObj = featuresArray.map((ele) => {
  const featureLi = document.createElement("li");
  featureLi.setAttribute("class", "hpgf_feature-li");
  featureLi.innerHTML = `
  <section class="hpgf_feature-obj">
    <figure class="hpgf_img-container">
      <img class="hpgf_feature-main-img" src=${ele.img}>
      <a href="#" class="hpgf_feature-absolute-icon-link" alt="Go to the ${ele.title}">
      </a>
    </figure>
    <h4 class="hpgf_feature-title">${ele.title}</h4>
    <p class="hpgf_feature-paragaph">${ele.paragaph}</p>
  </section>
  `;
  return featureLi;
});

/**
 * all li item will be appended to the ul element;
 */
featureDomObj.forEach((item) => {
  newFeatureUl.append(item);
});

/**
 * after append to the feature wrapper;
 */

hpgf_feature_items_wrapper.append(newFeatureUl);

/**
 * feature items slider. For this I need to use a @keyframes here for dynamic animation.
 */

//set the width of the feature wrapper
hpgf_feature_wrapper.style.width = widthOfTheSliderContainer + "px";

//creating less than sign block;
const lessThan = document.createElement("section");
lessThan.setAttribute("class", "feature_move-left");
hpgf_feature_items_box.prepend(lessThan);

//creating greater than sign block;
const greaterThan = document.createElement("section");
greaterThan.setAttribute("class", "feature_move-right");
hpgf_feature_items_box.append(greaterThan);

/**
 * selecting element for adding css styles
 *
 */
const hpgf_feature_items = document.querySelector("ul.hpgf_feature-items");
const hpgf_feature_li = document.querySelector("li.hpgf_feature-li");
const hpgf_feature_obj = document.querySelector("section.hpgf_feature-obj");

//list item array
const list_item_array = Array.from(
  document.querySelectorAll("li.hpgf_feature-li")
);

//carousel indicator button
const left_button = document.querySelector("section.feature_move-left");
const right_button = document.querySelector("section.feature_move-right");

// retrive the width of hpgf_feature_items(ul)
let hpgf_feature_items_width = (300 + 20) * list_item_array.length;
console.log(hpgf_feature_items_width);

//set the width of the hpgf_feature_items(ul)
hpgf_feature_items.style.width = hpgf_feature_items_width + "px";

// function for creating dynamic animation per click and append it to the last css file
function setVal(newName, first, middle, end) {
  //last css file
  const lastSheet = document.styleSheets[document.styleSheets.length - 1];
  lastSheet.insertRule(
    `
@-webkit-keyframes ${newName} { 
  0% { 
    margin-left:${first}
  }
  50% { 
    margin-left:${middle}
  }
  100% { 
    margin-left:${end}
  }
  }`,
    lastSheet.cssRules.length
  );
}

//counter variable to update a new value
let feature_count = 0;

// function for pass the value to the keyframe
function move(incOrDec, val) {
  incOrDec;

  // set the new value of the hpgf_feature_items_width
  hpgf_feature_items_width += val;

  // get update value of the actual margin of hpgf_feature_items_width  when user click on the button
  let hpgf_feature_items_margin = parseInt(
    window.getComputedStyle(hpgf_feature_items).marginLeft
  );

  // set the margin for keyframe animation
  let margin = feature_count * 320;
  // value for the three different state of the animation (0%,50%,100%)
  let marginFirst = `${hpgf_feature_items_margin + 70}px`;
  let marginMiddle = hpgf_feature_items_margin + "px";
  let marginEnd = margin + "px";

  // animation will run when ul itself has greater value than its contianer
  if (hpgf_feature_items_width >= widthOfTheSliderContainer + 20) {
    setVal(`featureAni${feature_count}`, marginFirst, marginMiddle, marginEnd);
    hpgf_feature_items.style.cssText = `animation: featureAni${feature_count} .5s linear forwards`;
    right_button.style.display = "block";
  }

  // display of the indicator button for left and right indicator
  if (hpgf_feature_items_width === 1920) {
    left_button.style.display = "none";
    right_button.style.display = "block";
  } else if (hpgf_feature_items_width === widthOfTheSliderContainer + 20) {
    right_button.style.display = "none";
  } else {
    left_button.style.display = "block";
  }
}

/**
 * pass the value through eventlistener
 */
right_button.addEventListener("click", () => {
  move(feature_count--, -320);
});

left_button.addEventListener("click", () => {
  move(feature_count++, 320);
});

/**
 * end of the feature animation slider
 */
