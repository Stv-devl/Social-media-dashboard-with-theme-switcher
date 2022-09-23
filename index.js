const switchs = document.querySelector(".switchs");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");

body.classList.add("themedark");

switchs.addEventListener("click", () => {
  document.body.classList.toggle("themelight");
  dark.classList.toggle("darkclicked");
});
