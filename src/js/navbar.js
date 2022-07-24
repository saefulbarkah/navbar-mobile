window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (pageYOffset >= 50) {
    header.classList.add("backdrop-blur-lg", "bg-slate-800/20");
  } else {
    header.classList.remove("bg-slate-800/20");
  }
});
const navMobile = () => {
  const mobile = document.querySelector(".mobile-navbar");
  const closeBtn = document.querySelector(".btn-close-nav");
  mobile.classList.remove("transform", "translate-y-full");
  mobile.classList.add("transition");
  closeBtn.addEventListener("click", (event) => {
    mobile.classList.add("transform", "translate-y-full");
  });
};
