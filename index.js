const switchs = document.querySelector(".switchs");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");

body.classList.add("themedark");

light.addEventListener("click", (e) => {
  body.classList.add("themelight");
  body.classList.remove("themedark");
});

dark.addEventListener("click", (e) => {
  body.classList.add("themedark");
  body.classList.remove("themelight");
});
