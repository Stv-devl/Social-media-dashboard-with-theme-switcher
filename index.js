const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");

body.classList.add("themedark");

light.addEventListener("click", (e) => {
  body.classList.add("themelight");
  body.classList.remove("themedark");
  light.style.opacity = "1";
  dark.style.opacity = "0";
});
dark.addEventListener("click", (e) => {
  body.classList.add("themedark");
  body.classList.remove("themelight");
  light.style.opacity = "0";
  dark.style.opacity = "1";
});
