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

mainShareIcon.addEventListener("click", function (event) {
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

// Prevent immediate closing when clicking the share icon itself
  event.stopPropagation();
});


// Hiding share boxes when clicking outside
document.addEventListener("click", function (event) {
  if (
    mobileShareBox.style.display === "flex" &&
    !mobileShareBox.contains(event.target) &&
    event.target !== mainShareIcon
  ) {
    mobileShareBox.style.display = "none";
    metaShareContent.style.display = "flex";
  }

  if (
    desktopShareBox.style.display === "flex" &&
    !desktopShareBox.contains(event.target) &&
    event.target !== mainShareIcon
  ) {
    desktopShareBox.style.display = "none";
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


// Dynamic Social Shares

function shareOnFacebook() {
  const postUrl = encodeURIComponent(window.location.href);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
  window.open(facebookUrl, "_blank");
}

function shareOnTwitter() {
  const postUrl = encodeURIComponent(window.location.href);
  const postTitle = encodeURIComponent(document.title);
  const twitterUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`;
  window.open(twitterUrl, "_blank");
}

function shareOnPinterest() {
  const postUrl = encodeURIComponent(window.location.href);
  const postImage = encodeURIComponent(document.querySelector("img").src); // Gets the first image
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${postUrl}&media=${postImage}`;
  window.open(pinterestUrl, "_blank");
}

// Toggling ARIA Attributes

const shareBoxBtn = document.querySelector(".share_btn");

shareBoxBtn.addEventListener("click", function () {
  const socialIconsBox = document.querySelector(".social-icons_box");
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  this.setAttribute("aria-expanded", !isExpanded);
  socialIconsBox.setAttribute("aria-hidden", isExpanded ? "true" : "false");
  
});


// Allowing Enter key and Space to Toggle the Share icons

mainShareIcon.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent scrolling on Space key
    this.click(); // Triggering clicking event
  }
})
