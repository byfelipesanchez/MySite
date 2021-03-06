//intro slider animation

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 }); //text animation
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.5}) //slider page comes in
tl.to(".intro", {y:"-100%", duration:1})
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
 

//name animation

gsap.fromTo('.name', {autoAlpha:0}, {autoAlpha:1 , rotation:360 , delay:4.5})


//img-me fade in animation

const img = gsap.utils.toArray('.img-me');

img.forEach((img, i) => {
  const anim = gsap.fromTo(img, {autoAlpha: 0, y: 50}, {duration: 2, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: img,
    animation: anim,
    start: 'top 90%',
    end: '+=500',
    once: false,
    scrub: true
  });
});

//hr-name animation

gsap.fromTo(".hr-name", {opacity:0}, {opacity:1, delay:5.3})

//nav(tool-bar) animation

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

ScrollTrigger.create({
    start:'top -80',
    end: 99999,
    toggleClass: {className:'.scrollable-area', 
        targers:'.tool-bar'}
});

ScrollTrigger.create({
    start: 'top -80',
    end: 99999, 
    toggleClass: {className: 'tool-bar-scrolled',
        targets: '.tool-bar' }
})

const txt = gsap.utils.toArray('.name');

txt.forEach((txt, i) => {
  const anim = gsap.fromTo(txt, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: txt,
    animation: anim,
    once: false,
    scrub: true 
  });
});

// gsap.registerPlugin(ScrollTrigger)

// gsap.to('.p', {
//   ScrollTrigger: {
//     trigger:'.p',
//     start: 'top top',
//   },
//   x:200
// });

gsap.fromTo('.ball', {autoAlpha:0}, {autoAlpha:1, delay:7})

gsap.fromTo(".line", {autoAlpha: 0}, {autoAlpha: 1, delay: 7});