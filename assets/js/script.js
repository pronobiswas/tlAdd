
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

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
// work with section2
let section2NavItem = document.querySelectorAll(".section2NavItem h3");
// ===text content===
let text1= "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";
let text2= "Quisque facilisis tellus non mi accumsan, ut viverra sapien rutrum. Donec ac finibus sapien. Aenean mattis diam";
let text3= "Maecenas aliquam mi sed augue maximus, eget tempus urna suscipit. Praesent id !";
let text4= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deserunt!";
// ===images===
let images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4"
  ];
  let images1 = [
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8"
  ];
  let images2 = [
    "https://picsum.photos/200/300?random=9",
    "https://picsum.photos/200/300?random=10",
    "https://picsum.photos/200/300?random=11",
    "https://picsum.photos/200/300?random=12"
  ];
  let images3 = [
    "https://picsum.photos/200/300?random=13",
    "https://picsum.photos/200/300?random=14",
    "https://picsum.photos/200/300?random=15",
    "https://picsum.photos/200/300?random=16"
  ];
  // scroll triger 
ScrollTrigger.create({
  trigger: "#sectionsection2",
  start: "top top",
  end: "+=1800",
  pin: true,
  pinSpacing:0,
  scrub: true,
  // markers: true,
  onUpdate: (self) => {
    const p = self.progress;
    console.log(p);
    

    if (p < 0.1) {
      section2NavItem.forEach(item => {
        item.style.textDecoration = "none";
      });
    } else if (p < 0.20) {
      lineThrough(section2NavItem[0]);
      changeText(text1);
      chhangeImage(images);
    } else if (p < 0.4) {
      lineThrough(section2NavItem[1]);
      changeText(text2);
      chhangeImage(images1);
    } else if (p < 0.6) {
      lineThrough(section2NavItem[2]);
      changeText(text3);
      chhangeImage(images2);
    } else if (p < 0.8) {
      lineThrough(section2NavItem[3]);
      changeText(text4);
      chhangeImage(images3);
    } else if (p < 0.9) {
      lineThrough(section2NavItem[4]);
      changeText(text1);
      chhangeImage(images);
    } else {
      section2NavItem.forEach(item => {
        item.style.textDecoration = "none";
      });
      
    }
  },
});
function lineThrough(elm){
  section2NavItem.forEach(item => {item.style.textDecoration = "none";});
  elm.style.textDecoration = "line-through";
  elm.style.textDecorationColor = "red";
};

// function changeText(text) {
//   const textElement = document.querySelector(".section2TextContent h1");
//   textElement.textContent = text;
// }

function changeText(text) {
  const textElement = document.querySelector(".section2TextContent h1");
  gsap.registerPlugin(TextPlugin); // make sure this runs once in your script

  gsap.to(textElement, {
    duration: 0.5,
    text: text,
    ease: "none"
  });
}
 function chhangeImage(images){
  let floatingimageBox = document.querySelectorAll(".floatingimageBox");
  floatingimageBox.forEach((elm,idx) => {
     gsap.fromTo(elm, 
      { x: 0, 
        y: 0,
        opacity:0,
        backgroundImage: `url(${images[idx]})` 
      },
      { x: 0, 
        y: 40, 
        duration: 0.5,
        opacity:1, 
        backgroundImage: `url(${images[idx]})` 
      }
    );
  } );
 }




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


