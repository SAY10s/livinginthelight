const oznaczenie = document.querySelectorAll(".oznaczenie");
const skip = document.querySelectorAll(".skip");
const change = document.querySelector(".change");
const change2 = document.querySelector(".change2");

let isOznaczenieActive = true;
let isSkipActive = true;

change.addEventListener("click", () => {
  changeStateOznaczenie();
});

change2.addEventListener("click", () => {
  changeStateSkip();
});

let changeStateOznaczenie = () => {
  for (let i = 0; i < oznaczenie.length; i++) {
    isOznaczenieActive
      ? oznaczenie[i].classList.add("hide")
      : oznaczenie[i].classList.remove("hide");
  }
  isOznaczenieActive = !isOznaczenieActive;
};
let changeStateSkip = () => {
  for (let i = 0; i < oznaczenie.length; i++) {
    isOznaczenieActive
      ? skip[i].classList.add("hide")
      : skip[i].classList.remove("hide");
  }
  isSkipActive = !isSkipActive;
};
