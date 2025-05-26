function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color")
const body = document.querySelector("body")
const button = document.querySelector(".change-color")

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  body.style.backgroundColor = randomColor;
})