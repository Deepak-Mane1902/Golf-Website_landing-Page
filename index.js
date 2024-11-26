var crsr = document.querySelector("#cursor");
var crsrBr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
     crsr.style.left =dets.x+"px"
     crsr.style.top =dets.y+"px"   
     crsrBr.style.left =dets.x -200+"px"
     crsrBr.style.top =dets.y -200+"px"   
})


gsap.to("#nav",{
     height:"85px",
     duration:0.5,
     backgroundColor:"#000",
     scrollTrigger:{
          trigger:"#nav",
          scroller:"body",
          start:"top -10%",
          end:"top -11%",
          scrub:1
     }
})

gsap.to("#main",{
     backgroundColor:"#000",
     scrollTrigger:{
          trigger:"#main",
          scroller:"body",
          start:"top -25%",
          end:"top -70%",
          scrub:2
          
     }
})


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
          crsr.style.scale =3;
          crsr.style.backgroundColor="transparent";
          crsr.style.border="1px solid white";

     })
     elem.addEventListener("mouseleave",function(){
          crsr.style.scale =1;
          crsr.style.backgroundColor="#95C11E";
          crsr.style.border="1px solid #95C11E";
     })
})

gsap.from("#about-us img,#about-us-in",{
     y:50,
     opacity:0,
     duration:1,
     scrollTrigger:{
          trigger:"#about-us",
          scroller:"body",
          start:"top 60%",
          bottom:"top 55%",
          scrub:2
     }
})
gsap.from(".cards",{
    scale:0.8,
     opacity:0,
     duration:1,
     stagger:0.1,
     scrollTrigger:{
          trigger:".cards",
          scroller:"body",
          start:"top 90%",
          bottom:"top 75%",
          scrub:1
     }
})

gsap.from("#colon1",{
     y:-70,
     x:-70,
     scrollTrigger:{
          trigger:"#colon1",
          scroller:"body",
          start:"top 55%",
          end:"top 45%",
          scrub:4
     }
})
gsap.from("#colon2",{
     y:-70,
     x:-70,
     scrollTrigger:{
          trigger:"#colon2",
          scroller:"body",
          start:"top 55%",
          end:"top 45%",
          scrub:4
     }
})

// var elem1 = document.querySelectorAll("#page4 .elem");
// elem1.forEach(function(elem){
//      elem.addEventListener("mouseenter",function(){
//           crsr.style.scale =3;
//           crsr.style.backgroundColor="transparent";
//           crsr.style.border="1px solid white";

//      })
//      elem.addEventListener("mouseleave",function(){
//           crsr.style.scale =1;
//           crsr.style.backgroundColor="#95C11E";
//           crsr.style.border="1px solid #95C11E";
//      })
// })

gsap.from("#page4 h1",{
     y:20,
     scrollTrigger:{
          trigger:"#page4 h1",
          scroller:"body",
          start:"top 75%",
          end:"top 70%",
          scrub:4
     }
})