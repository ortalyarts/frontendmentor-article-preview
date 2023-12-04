var shareIcon = document.querySelector('#share-icon'); 
var socialIcons = document.querySelector('#share-holder'); 


//The functions checks if the click was on the Share button or not and then tuggles the class with display:block
document.addEventListener("click", (event) => {
  if (shareIcon.contains(event.target)) {
    socialIcons.classList.toggle("display-block");
    shareIcon.classList.toggle("share-active");
  } else {
      socialIcons.classList.remove('display-block');
      shareIcon.classList.remove("share-active");
  }
});