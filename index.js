function dropdownFunc(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  // _________________________________________________________________________________
  
  // ___________________________popup js _____________________________________
  const loginbtn = document.querySelector("#login"),
  loginPopup = document.querySelector(".popup-container"),
  close = document.querySelector(".close"),
  emailbtn = document.querySelector(".email-btn"),
  formContainer = document.querySelector(".form-container"),
  emailclose = document.querySelector(".back");
  
  loginbtn.addEventListener("click",function(){
    loginPopup.classList.add('show');
  })
  
  close.addEventListener("click",function(){
    loginPopup.classList.remove('show');
  })
  
  emailbtn.addEventListener("click",function(){
    formContainer.classList.add("active");
  })
  
  emailclose.addEventListener("click",function(){
    formContainer.classList.remove("active");
  })