let x = 0;
let y = 0;

let isPlaying = false;

const stricker = document.getElementById("stricker");

const handleMovement = (e) => {
  if (e.key === "ArrowUp") {
    y = y - 200;
  } else if (e.key === "ArrowDown") {
    y = y + 200;
  }
  if (e.key === "ArrowRight") {
    x = x + 200;
  } else if (e.key === "ArrowLeft") {
    x = x - 200;
  }
  stricker.style.transform = `translate(${x}px,${y}px)`;
};

// click, mouseover any elements

// change --> input

// submit --> form element

// use body or window for event like keydown
const startPlay = () => {
  if (!isPlaying) {
    document.body.addEventListener("keydown", handleMovement, { once: false });
  }
  isPlaying = true;
};

const stopPlay = () => {
  document.body.removeEventListener("keydown", handleMovement);
  isPlaying = false;
};
