/**
 *unique experiences block design and deployment.
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
            <img src=${ele.img} alt=${ele.title}+"web experience" >
        </figure>
        <section class="experience_content>
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
