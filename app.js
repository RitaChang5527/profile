const text = document.querySelectorAll(".thepath");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#sixteenth");
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend", () => {
  animation.style = " transition:all 1S ease; opacity:0; pointer-events:none;";
});
