const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

const grandChild = document.querySelector(".grand-child");

// parent.addEventListener("click", (e) => {
//   console.log("Parent is Getting Clicked");
// });

// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Child is Getting Clicked");
// });

// grandChild.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Grand Child is Getting Clicked");
// });

parent.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Parent is Getting Clicked");
  },
  { capture: true }
);

child.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("Child is Getting Clicked");
  },
  { capture: true }
);

grandChild.addEventListener(
  "click",
  (e) => {
    console.log("Grand Child is Getting Clicked");
  },
  { capture: true }
);
