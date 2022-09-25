const switchs = document.querySelector(".switchs");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");

//toggle between light and dark theme, add darkclicked for move the switch button
switchs.addEventListener("click", () => {
  body.classList.toggle("themelight");
  dark.classList.toggle("darkclicked");
});
