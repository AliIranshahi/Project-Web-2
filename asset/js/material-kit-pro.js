/*window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});
dosnt work (old)
*/
// scroll sticky start
window.addEventListener("scroll", function() {
    var header = document.querySelector(".navbarmartztwin");
    if(window.innerWidth >= 768){
          header.classList.toggle("sticky", window.scrollY > 80);
    }else{
      header.classList.remove("sticky");
    }
});

bars.addEventListener('click',(e)=>{
    e.preventDefault();
    navnew.classList.toggle("position-fixed");
    navnew.classList.toggle("fadeInLeft");
    navnew.classList.toggle("border");
    navnew.classList.toggle("top-0");
    navnew.classList.toggle("end-0");
    navnew.classList.toggle("shadow");
    navnew.classList.remove("d-none");
    navnew.classList.remove("d-md-flex");
    navnew.classList.toggle("d-block");
    navnew.classList.toggle("w-75");
    navnew.classList.toggle("h-100");
    navnew.classList.toggle("bg-white");
  }); 
var t = new Typed('#typed',{
    strings : ['Ali iranshahi',' ' ],
    typeSpeed : 40,
    delaySpeed : 90,
    loop : true
  });
  // scroll sticky end
  //--------------------------------