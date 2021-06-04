// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:7,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })

window.addEventListener('scroll', function(){
  const to_the_top = document.getElementById("flotingbutton");
  if(window.pageYOffset > 2000){
   
    to_the_top.classList.add("flotingbutton-to_the_top");
  }
  else{
    to_the_top.classList.remove("flotingbutton-to_the_top");
  }
})
window.addEventListener('scroll', function(){
  const logoImage = document.getElementById('logo--image');
  const mainNav = document.getElementById("Main--nav");
  const uppernav = document.getElementsByClassName("kalfreight-header__type");
  const uppernav1 = document.getElementsByClassName("kalfreight-header__type-content-link");
  const uppernav2 = document.getElementsByClassName("kalfreight-header__type-content");
  // const to_the_top = document.getElementById("flotingbutton");
  
  if(window.pageYOffset > 0){
    logoImage.style.height = "64px";
    // uppernav.classList.add("New__kalfreight-header");

    // uppernav2.classList.add("New__kalfreight-header-content"); 
  }
  else{
    logoImage.style.height = "84px";
    // uppernav.classList.remove("New__kalfreight-header");
    uppernav1.classList.remove("New__kalfreight-header-content-a");
    uppernav2.classList.remove("New__kalfreight-header-content");

    mainNav.style.height = "118px";
    
  }
 
})
// var path = document.querySelector('#line');
// var l = path.getTotalLength();

// var glow_line = document.getElementById('line');
// var trigger_element = document.getElementById('animated-section');

// TweenMax.set(path, {strokeDasharray:l});
// var action = gsap.timeline({defaults: {duration: 1, ease:'none' },

//   scrollTrigger: {
//     trigger: "",
//     scrub:0,
//     start: "top top",
//     end: "bottom +=200%",
    
//     onUpdate: self => { 
//       prog = self.progress.toFixed(2);

//     } 
//   }})
//   action.to("",
//   {
      
//       y: 500,

//   duration: 30}
//   )
// TweenMax.fromTo(

 

//     path, 10, {strokeDashoffset:l}, {strokeDashoffset:0})

 // Get a reference to the <path>
// var path = document.querySelector('#Walkthrough__svg-line');

// // Get length of path... ~577px in this demo
// var pathLength = path.getTotalLength(); 

// // Make very long dashes (the length of the path itself)
// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// // Offset the dashes so the it appears hidden entirely
// path.style.strokeDashoffset = pathLength;

// // When the page scrolls...
// window.addEventListener("scroll", function(e) {
 
//   // What % down is it? 
//   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
//   // Length to offset the dashes
//   var drawLength = pathLength * scrollPercentage;
  
//   // Draw in reverse
//   path.style.strokeDashoffset = pathLength - drawLength*1.23;
  
// });

//   // ... at bottom of scrolling function

//   // When complete, remove the dash array, otherwise shape isn't quite sharp
//   if (scrollPercentage >= 0.99) {
//     path.style.strokeDasharray = "none";
//   } else {
//     path.style.strokeDasharray = pathLength + ' ' + pathLength;
//   }

