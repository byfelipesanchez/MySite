const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 }); //text animation
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5}) //slider page comes in
tl.to(".intro", {y:"-100%", duration:1})
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//end of intro animation
 
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

tl.to('.paper-plane', {x:100, y:-20})
    .to('.paper-plane', {x:300, y:10})
    .to('.paper-plane', {x:500, y:100})
    .to('.paper-plane', {x:750, y:-100})*/