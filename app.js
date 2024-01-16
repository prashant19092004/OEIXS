gsap.from(".ani3", {
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger : ".ani3",
        // markers:true,
        start : "top 70%",
        end : "top 60%",
        scrub : 0
    }
})

gsap.from(".ani3 h2", {
    opacity:0.4,
    stagger: 1,
    scrollTrigger: {
        scroller : "body",
        trigger : ".ani3",
        // markers : true,
        start : "top 22%",
        end : "top -5%",
        scrub : 0
    }
})

gsap.registerPlugin(ScrollTrigger);

//responsive
let mm = gsap.matchMedia();

mm.add("(min-width: 990px)", () => {
    gsap.from(".logo", {
        scale:6.25,
        y:190,
        scrollTrigger : {
            scroller: "body",
            trigger : ".video-sec",
            // markers : true,
            start : "top 97%",
            end : "top 10%",
            scrub : 0 
        }
    })

    gsap.to(".sixth-first", {
        x:200,
        scrollTrigger:{
            scroller : "body",
            trigger : ".sixth-first",
            // markers : true,
            start : "top 100%",
            end : "top -100%",
            scrub : 0
        }
    })
    gsap.to(".sixth-second", {
        x:-600,
        scrollTrigger:{
            scroller : "body",
            trigger : ".sixth-second",
            // markers : true,
            start : "top 100%",
            end : "top -100%",
            scrub : 0
        }
    })
});

mm.add("(min-width: 770px)", () => {
    gsap.from(".video-sec", {
        scale : 0.6,
        y:-35,
        scrollTrigger:{
            scroller: "body",
            trigger: ".video-sec",
            // markers: true,
            start : "top 97%",
            end : "top 3.5%",
            scrub : 0
        }
    })
    gsap.from(".ani4", {
        opacity:0,
        duration:1,
        scrollTrigger:{
            scroller:"body",
            trigger : ".ani4",
            // markers:true,
            start : "top 70%",
            end : "top 60%",
            scrub : 0
        }
    })
    
    gsap.from(".ani4 h2", {
        opacity:0.4,
        stagger: 1,
        scrollTrigger: {
            scroller : "body",
            trigger : ".ani4",
            // markers : true,
            start : "top 22%",
            end : "top -5%",
            scrub : 0
        }
    })

    
});

gsap.to(".nav", {
    height : 100,
    backgroundColor : "#151414",
    scrollTrigger:{
        scroller:"body",
        trigger: ".video-sec",
        // markers : true,
        start : "top 97%",
        end : "top 40%",
        scrub : 0
    }
})

const menuButton = document.querySelector(".menu");
let clicked = false;

menuButton.addEventListener("click", () => {
    const menu = document.querySelector(".left-nav ul");
    const menuFirst = document.querySelector(".menu .first");
    const menuSecond = document.querySelector(".menu .sec");

    if(clicked === false){
        menu.style.transform = "translateY(0%)";
        menuFirst.style.transform = "rotate(45deg)";
        menuSecond.style.transform = "rotate(-45deg)";
        clicked = true;
    }
    else{
        menu.style.transform = "translateY(-100%)";
        menuFirst.style.transform = "rotate(0deg)"
        menuSecond.style.transform = "rotate(0deg)";
        clicked = false;
    }

})