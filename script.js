const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 }); //text animation
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5}) //slider page comes in
tl.to(".intro", {y:"-100%", duration:1})
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//end of intro animation
 
let phrases = ["I'm", "Felipe", "Sánchez"]
let demo = document.querySelector(".demo")
let animation = gsap.timeline({repeat:-1, repeatDelay:0.6})

function createLayers (){
    phrases.forEach(value=> {
        let layer = document.createElement("div")
        layer.innerHTML = value
        demo.appendChild(layer)
    })
}

function animateText (){
    let layers = document.querySelectorAll(".demo div")
    layers.forEach(function(element, index){
        animation.fromTo(element, {opacity:0, scale:0}, {scale:1, opacity:1, repeat:1,
yoyo:true, yoyoEase:true, repeatDelay:0.3})
    })
    gsap.set(".demo", {visibility:"visible"})
}

createLayers()
animateText()

/*
gsap.registerPlugin(ScrollTrigger);
  
var tl = gsap.timeline({
    scrollTrigger: {
        trigger:'.paper-plane',
        toggleActions: "restart",
        pin: true,
        immediateRender: false, 
        start: "top top",
        scrub: true,
        autoRotate: true, 
        curviness: 1.25,
        invalidateOnRefresh: true
    }
});

tl.fromTo('.paper-plane', {x:100, y:-20}, {x:300, y:20})*/