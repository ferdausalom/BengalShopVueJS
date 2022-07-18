// document.addEventListener("click", function (e) {
//   const searchArea = document.querySelector(".search-div");
//   if (searchArea) {
//     if (!searchArea.contains(e.target)) {
//       searchArea.style.display = "none";
//     }
//   }
// });

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // const ref = useRef(null);
  // if (!ref.current) return;
  const linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);
  const containerHeight = linksContainer.getBoundingClientRect().height;
  console.log(containerHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
