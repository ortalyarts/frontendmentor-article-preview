var shareIcon = document.querySelector('#share-icon');
var socialIcons = document.querySelector('#share-holder')

// shareIcon.addEventListener("click", function(){
//     socialIcons.style.display='block';
//   });
  document.addEventListener("click", (event) => {
    if (shareIcon.contains(event.target)) {
        socialIcons.style.display='block';
        shareIcon.classList.add("share-active");
    } else {
        socialIcons.style.display='none';
        shareIcon.classList.remove("share-active");
    }
  });