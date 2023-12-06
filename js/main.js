// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end
// showMore start
const gallery = document.getElementById("gallery");
if (gallery) {
  const showMoreBtns = document.querySelectorAll(".showMoreBtn");
  showMoreBtns.forEach((showMoreBtn) => {
    showMoreBtn.onclick = () => {
      const parentElement = showMoreBtn.parentNode;
      const showMore = parentElement.querySelector(".showMore");
      showMore.classList.toggle("active");
    };
  });
}
// showMore end
// search start
const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  const searchOuter = document.getElementById("searchOuter");
  searchBtn.onclick = () => {
    searchOuter.classList.toggle("active");
    searchBtn.classList.toggle("active");
  };
}
// search end
