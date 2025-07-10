document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollToPlugin);

  const tracker = document.getElementById("mouse-tracker");

  // Update tracker and ripples on mousemove
  document.addEventListener("mousemove", (e) => {
    gsap.to(tracker, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "none",
    });
  });
  const toTop = document.querySelector(".toTop");

  toTop.addEventListener("mousemove", (e) => {
    const bounds = toTop.getBoundingClientRect();
    const relX = e.clientX - bounds.left;
    const relY = e.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const moveX = (relX - centerX) / 6;
    const moveY = (relY - centerY) / 6;

    gsap.to(toTop, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  toTop.addEventListener("mouseleave", () => {
    gsap.to(toTop, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  let bannerOverlay = document.getElementById('bannerOverlay');
  let icons = bannerOverlay.querySelectorAll('.icon');
  gsap.to(bannerOverlay, {
    xPercent: -100,
    duration: 2.5,
    delay: 1,
    ease: "power4.out",
  });

  gsap.fromTo(icons,
    {
      scale: 0.2
    },
    {
      scale: 1,
      duration: 0.2,
      stagger: {
        each: 0.1,
        from: "random"
      }
    }
  );
  let globeTxt = document.querySelector('.globeTxt');
  gsap.to(globeTxt, {
    rotate: 360,
    duration: 5,
    repeat: -1,
    ease: "none"
  });



  // work with section2
  let section2NavItem = document.querySelectorAll(".section2NavItem h3");
  // ===text content===
  let text1 =
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
  let text2 =
    "Quisque facilisis tellus non mi accumsan, ut viverra sapien rutrum. Donec ac finibus sapien. Aenean mattis diam";
  let text3 =
    "Maecenas aliquam mi sed augue maximus, eget tempus urna suscipit. Praesent id !";
  let text4 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deserunt!";
  // ===images===
  let images = [
    "/assets/media/image/image1.png",
    "/assets/media/image/image2.png",
    "/assets/media/image/image3.png",
    "/assets/media/image/image4.png",
  ];
  let images1 = [
    "/assets/media/image/image5.png",
    "/assets/media/image/image6.png",
    "/assets/media/image/image7.png",
    "/assets/media/image/image8.png",
  ];
  let images2 = [
    "/assets/media/image/image9.png",
    "/assets/media/image/image10.png",
    "/assets/media/image/image11.png",
    "/assets/media/image/image12.png",
  ];
  let images3 = [
    "/assets/media/image/image13.png",
    "/assets/media/image/image14.png",
    "/assets/media/image/image15.png",
    "/assets/media/image/image16.png",
  ];
  // ===positioning====
  let boxPosition = [
    { x: 0, y: 20 },
    { x: 50, y: 100 },
    { x: 30, y: -30 },
    { x: 0, y: 40 },
  ];
  let boxPosition1 = [
    { x: -50, y: 40 },
    { x: 0, y: 15 },
    { x: 3, y: 30 },
    { x: 0, y: 40 },
  ];
  let boxPosition2 = [
    { x: -50, y: 40 },
    { x: 100, y: -100 },
    { x: 3, y: 30 },
    { x: 0, y: 40 },
  ];
  let boxPosition3 = [
    { x: -50, y: 40 },
    { x: 100, y: -100 },
    { x: 3, y: 30 },
    { x: 0, y: 40 },
  ];
  let boxPosition4 = [
    { x: 50, y: 70 },
    { x: 10, y: 30 },
    { x: 0, y: 10 },
    { x: 0, y: 40 },
  ];
  // boxSize
  let boxSize = [
    { width: 200, height: 250 },
    { width: 220, height: 300 },
    { width: 220, height: 250 },
    { width: 300, height: 230 },
  ];
  let boxSize1 = [
    { width: 100, height: 100 },
    { width: 220, height: 300 },
    { width: 220, height: 300 },
    { width: 200, height: 130 },
  ];
  let boxSize2 = [
    { width: 200, height: 300 },
    { width: 300, height: 300 },
    { width: 220, height: 300 },
    { width: 200, height: 130 },
  ];
  let boxSize3 = [
    { width: 200, height: 300 },
    { width: 200, height: 200 },
    { width: 220, height: 300 },
    { width: 200, height: 130 },
  ];
  let boxSize4 = [
    { width: 170, height: 150 },
    { width: 230, height: 300 },
    { width: 320, height: 150 },
    { width: 200, height: 130 },
  ];
  // scroll triger
  ScrollTrigger.create({
    trigger: "#sectionsection2",
    start: "top top",
    end: "+=1800",
    pin: true,
    pinSpacing: 0,
    scrub: true,
    // markers: true,
    onUpdate: (self) => {
      const p = self.progress;
      if (p < 0.1) {
        section2NavItem.forEach((item) => {
          item.style.textDecoration = "none";
        });
      } else if (p < 0.2) {
        lineThrough(section2NavItem[0]);
        changeText(text1);
        chhangeImage(images, boxPosition, boxSize);
      } else if (p < 0.4) {
        lineThrough(section2NavItem[1]);
        changeText(text2);
        chhangeImage(images1, boxPosition1, boxSize1);
      } else if (p < 0.6) {
        lineThrough(section2NavItem[2]);
        changeText(text3);
        chhangeImage(images2, boxPosition2, boxSize2);
      } else if (p < 0.8) {
        lineThrough(section2NavItem[3]);
        changeText(text4);
        chhangeImage(images3, boxPosition3, boxSize3);
      } else if (p < 0.9) {
        lineThrough(section2NavItem[4]);
        changeText(text1);
        chhangeImage(images, boxPosition4, boxSize4);
      } else {
        section2NavItem.forEach((item) => {
          item.style.textDecoration = "none";
        });
      }
    },
  });




  function lineThrough(elm) {
    section2NavItem.forEach((item) => {
      item.style.textDecoration = "none";
    });
    elm.style.textDecoration = "line-through";
    elm.style.textDecorationColor = "red";
  }

  function changeText(text) {
    const textElement = document.querySelector(".section2TextContent h1");
    gsap.to(textElement, {
      duration: 0.2,
      ease: "none",
      onComplete: () => {
        textElement.textContent = text;
        gsap.fromTo(
          textElement,
          { opacity: 0, y: -20 },
          { opacity: 1, duration: 0.5, y: 0 }
        );
      },
    });
  }

  function chhangeImage(images, boxPosition, boxSize) {
    let floatingimageBox = document.querySelectorAll(".floatingimageBox");
    floatingimageBox.forEach((elm, idx) => {
      gsap.fromTo(
        elm,
        { x: 0, y: 0, opacity: 0, backgroundImage: `url(${images[idx]})` },
        {
          x: boxPosition[idx].x,
          y: boxPosition[idx].y,
          width: boxSize[idx].width,
          height: boxSize[idx].height,
          ease: "power2.out",
          duration: 0.5,
          opacity: 1,
          backgroundImage: `url(${images[idx]})`,
        }
      );
    });
  }

  // Pin sectionsection3 at the top of the window and animate .text1 left to right with scroll
  gsap.to("#sectionsection3", {
    x: 0,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top top",
      end: "+=1000",
      pin: false,
      scrub: true,
    },
  });

  gsap.to(".text1", {
    x: 300,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top 80%",
      end: "+=1000",
      scrub: true,
    },
  });
  gsap.to(".text2", {
    x: -230,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top 75%",
      end: "+=1000",
      scrub: true,
    },
  });
  gsap.to(".text3", {
    x: 350,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top 60%",
      end: "+=1000",
      scrub: true,
    },
  });
  gsap.to(".text4", {
    x: -400,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top 50%",
      end: "+=1000",
      scrub: true,
    },
  });
  gsap.to(".text5", {
    x: 200,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top 40%",
      end: "+=1000",
      scrub: true,
    },
  });
  gsap.to(".text6", {
    x: -150,
    scrollTrigger: {
      trigger: "#sectionsection3",
      start: "top 35%",
      end: "+=1000",
      scrub: true,
    },
  });
  // ==section4 big text==
  gsap.to(
    ".bigText",
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".bigTexContainer",
        start: "top 80%",
        end: "+=1000",
        scrub: true,
      },
    },
    ">"
  );
});
let testBtn = document.querySelector('.testBtn')
testBtn.addEventListener("mouseenter", (e) => {
  const x = e.pageX - testBtn.offsetLeft;
  const y = e.pageY - testBtn.offsetTop;
  console.log(x, y);

  testBtn.style.setProperty("--x", x + "px");
  testBtn.style.setProperty("--y", y + "px");
});
// let section5 = document.getElementById("sectionsection5");
// let horizontalScrollWrapper = document.querySelector(".horizontalScrollWrapper");
// console.log(section5);
// console.log(horizontalScrollWrapper.offsetWidth);

// let isScroll = "false";
// if (section5) {
//   let tracker = document.getElementById("mouse-tracker");
//   let ripple = document.querySelectorAll(".ripple");
//   section5.addEventListener('mouseenter', () => {
//     tracker.innerHTML="view more" ;
//     gsap.to(tracker, {
//       width:100,
//       height: 100,
//       duration: 0.5,
//       ease: "power2.out"
//     });
//   });
//   section5.addEventListener('mouseleave', () => {

//     tracker.innerHTML="" ;
//     gsap.to(tracker, {
//       width:30,
//       height: 30,
//       duration: 0.5,
//       ease: "power2.out"
//     });
//   });
// }
// section5.addEventListener('click',()=>{
// gsap.to(horizontalScrollWrapper, {
//   opacity: 1,
//   duration: 0.5,
//  })
//  isScroll= "true";

//  if (isScroll === "true") {
//    gsap.to(horizontalScrollWrapper, {
//      x: 0,
//      scrollTrigger: {
//        trigger: "#sectionsection5",
//        start: "top top",
//        end: "+=1000",
//        pin: true,
//        scrub: true
//      }
//    });

//   const totalScrollWidth = horizontalScrollWrapper.scrollWidth;
//   const viewportWidth = window.innerWidth;
//   const scrollAmount = totalScrollWidth - viewportWidth;

//   gsap.to(horizontalScrollWrapper, {
//     x: () => -scrollAmount,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".horizontal-wrapper",
//       start: "top top",
//       end: () => `+=${scrollAmount}`,
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,
//     }
//   });
// }
// })
const section5 = document.getElementById("sectionsection5");
const closebtn = document.querySelector(".closebtn");
const wrapper = document.getElementById("section5Wrapoper");
let isFixed = "false";
function activateSection5() {
  section5.style.position = "fixed";
  section5.style.top = "0";
  section5.style.left = "0";
  section5.style.zIndex = "9999";
  section5.style.width = "100vw";
  section5.style.height = "100vh";
  section5.style.display = "block";
  document.body.style.overflow = "hidden";
  isFixed = "true";

  gsap.from(".horizontalScrollItem", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out",
  });
}

closebtn.addEventListener("click", () => {
  section5.style.display = "none";
  section5.removeAttribute("style");
  document.body.style.overflow = "auto";
  isFixed = "false";
});
if (isFixed === "true") {
  activateSection5();
}
let scrollPos = 0;
wrapper.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const scrollSpeed = 100;
    scrollPos += e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    scrollPos = Math.max(0, Math.min(scrollPos, maxScroll));

    gsap.to(wrapper, {
      scrollTo: { x: scrollPos },
      duration: 0.5,
      ease: "power2.out",
    });
  },
  { passive: false }
);


if (section7) {
  let tracker = document.getElementById("mouse-tracker");
  section7video.addEventListener("mouseenter", () => {
    tracker.innerHTML = "view project";
    tracker.style.color = "red"
    gsap.to(tracker, {
      width: 100,
      height: 100,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  section7video.addEventListener("mouseleave", () => {
    tracker.innerHTML = "";
    tracker.style.color = "black"
    gsap.to(tracker, {
      width: 30,
      height: 30,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  section7.addEventListener("click", () => {
    activateSection8()
  });
}

const section8 = document.getElementById("section8");
const closebtn8 = document.querySelector("#closebtn8");
const section8Wrapoper = document.getElementById("section8Wrapoper");
let isFixed8 = "false";
function activateSection8() {
  section8.style.position = "fixed";
  section8.style.top = "0";
  section8.style.left = "0";
  section8.style.zIndex = "9999";
  section8.style.width = "100vw";
  section8.style.height = "100vh";
  section8.style.display = "block";
  document.body.style.overflow = "hidden";
  isFixed8 = "true";

  gsap.from(".horizontalScrollItem8", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out",
  });
}

closebtn8.addEventListener("click", () => {
  section8.style.display = "none";
  section8.removeAttribute("style");
  document.body.style.overflow = "auto";
  isFixed8 = "false";
});
if (isFixed8 === "true") {
  activateSection8();
}
let scrollPos8 = 0;
section8Wrapoper.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const scrollSpeed = 100;
    scrollPos += e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
    const maxScroll = section8Wrapoper.scrollWidth - section8Wrapoper.clientWidth;
    scrollPos = Math.max(0, Math.min(scrollPos, maxScroll));

    gsap.to(section8Wrapoper, {
      scrollTo: { x: scrollPos },
      duration: 0.5,
      ease: "power2.out",
    });
  },
  { passive: false }
);

// ===footer===
let footer = document.querySelector('footer');
for (i = 0; i < 5; i++) {
  let glitch = document.createElement('div');
  glitch.classList.add('glitch');
  footer.appendChild(glitch);
}
footer.addEventListener('mousemove', (e) => {
  let fx= document.querySelectorAll('.glitch');
  fx.forEach((elm)=>{
    if (!elm.classList.contains("fx")) {
      elm.classList.add("fx");
    }
  });

  gsap.to('.glitch', {
    x: e.clientX,
    y: e.clientY, 
    duration: 0.2,
    ease: "none",
    stagger:0.001,
  });
});


// ==paly all the video infinity===
let video = document.querySelectorAll('video');
video.forEach((video) => {
  video.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  });
});

