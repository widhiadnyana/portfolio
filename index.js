window.onload = navClicked;

function navClicked(params) {
  const mobileNav = document.getElementById("mobile-id");
  if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
  }
  // console.log(mobileNav.style.display);
}
