
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tracker = document.getElementById("mouse-tracker");

  for (let i = 0; i < 10; i++) {
    let ripple = document.createElement("div");
    ripple.className = "ripple";
    document.body.appendChild(ripple); // Not inside tracker
  }

  // Update tracker and ripples on mousemove
  document.addEventListener("mousemove", (e) => {
    tracker.style.left = e.clientX + "px";
    tracker.style.top = e.clientY + "px";

    gsap.to(".ripple", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: "power2.out",
      stagger: {
        each: 0.05,
        from: "start",
      }
    });
  });

// Pin sectionsection3 at the top of the window and animate .text1 left to right with scroll
  gsap.to("#sectionsection3", {
    x: 0,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: true
    }
  });

  gsap.to(".text1", {
    x: 300, 
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      scrub: true
    }
  });
  gsap.to(".text2", {
    x: -230,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      scrub: true
    }
  });
  gsap.to(".text3", {
    x: 350, 
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      scrub: true
    }
  });
  gsap.to(".text4", {
    x: -400,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      scrub: true
    }
  });
  gsap.to(".text5", {
    x: 200,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      scrub: true
    }
  });
  gsap.to(".text6", {
    x: -150, 
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      scrub: true
    }
  });
  gsap.to(
    ".bigText",
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".bigTexContainer",
        start: "top 70%", 
        end: "+=1000",
        scrub: true,
        markers: true 
      }
    },">"
  );
});

let section5 = document.getElementById("sectionsection5");
if (section5) {
  let tracker = document.getElementById("mouse-tracker");
  let ripple = document.querySelectorAll(".ripple");
  section5.addEventListener('mouseenter', () => {
    tracker.innerHTML="view more" ;
    gsap.to(tracker, {
      width:100,
      height: 100,
      duration: 0.5,
      ease: "power2.out"
    });
  });
  section5.addEventListener('mouseleave', () => {

    tracker.innerHTML="" ;
    gsap.to(tracker, {
      width:30,
      height: 30,
      duration: 0.5,
      ease: "power2.out"
    });
  });
}


