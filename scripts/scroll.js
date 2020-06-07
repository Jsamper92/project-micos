const header = document.querySelector(".header__nav");

document.addEventListener("scroll", (_) => {
  console.log(event);
  if (scrollY >= 155) {
    header.classList.add("scale-header-on");
  } else {
    header.classList.remove("scale-header-on");
  }
});
