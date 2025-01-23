function isMobileDevice() {
    const maxWidth = 768; // Set the max width for mobile devices
    return window.matchMedia(`(max-width: ${maxWidth}px)`).matches;

}

let mainShareIcon = document.querySelector(".share-icon__box");
let desktopShareBox = document.querySelector(".desktop-share-popup-box");
let mobileShareBox = document.querySelector(".share_box-for-mobile");
let metaShareContent = document.querySelector(".rhs-meta__share");
let innerMobileShareIcon = document.querySelector(".share-icon__box-white");


mobileShareBox.style.display = "none";
desktopShareBox.style.display = "none";

mainShareIcon.addEventListener("click", function () {
  if (isMobileDevice()) {
    mobileShareBox.style.display =
      mobileShareBox.style.display === "flex" ? "none" : "flex";
    desktopShareBox.style.display = "none";
    metaShareContent.style.display = "none";
  } else {
    mobileShareBox.style.display = "none";
    desktopShareBox.style.display =
      desktopShareBox.style.display === "flex" ? "none" : "flex";
  }
});


innerMobileShareIcon.addEventListener("click", function () {
  if (isMobileDevice()) {
    mobileShareBox.style.display =
      mobileShareBox.style.display === "flex" ? "none" : "flex";
    metaShareContent.style.display = "flex";
  } else {

      mobileShareBox.style.display = "none";
      
  }
});
