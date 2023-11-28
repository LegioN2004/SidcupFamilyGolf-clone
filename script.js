var cursor = document.querySelector("#cursor"); // querySelector helps us to select html elements in js
var blur = document.querySelector("#cursor-blur"); // querySelector helps us to select html elements in js
// 3. then these
document.addEventListener("mousemove", function (dets) {
  // document means the whole html document and event listener means it'll listen to events such as mouse movement, etc and so we added mousemove
  // console.log("Hey"); // and it'll print this function everytime the mouse moves
  // console.log(dets.y) // this dets shows what happens when mouse move event is working the axis directions and other stuff(get more stuf at the web dev tools console), i.e when we are moving our mouse; also we can add x/y after dot to see the x and y axis movements

  // this will make that dot on the top move according to the
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  // this is for that blurr on the top move according to the cursor
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    cursor.style.border = "0.1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  // 1. write these comments
  backgroundColor: "black", // to set bg col black
  duration: 0.5, // after how much time will it appear
  height: "115px", // height of the bg col part
  scrollTrigger: {
    // to use the scroll trigger plugin
    trigger: "#nav", // what it'll trigger
    scroller: "body", // where the animation will get applied to
    // markers: true, // markers to show start and end pointers just for demonstration
    start: "top -10%", // where will it start from, that black bg col part; just like css we'll need to apply -ve values to go bottom from top
    end: "top -11%", // where will it end, that black bg col part
    scrub: 1, // this will make it apply on the basis of scroll, so when we scroll up then the black part will get removed as it did on the landing page
    // this scrub values can be true for instant application, or numeric values to make it smooth(wrt to time maybe)
  },
});

// 2. then these
// now the part where the page becomes dark as we scroll down the page from 1 to 2,3....

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body", // where the animation will get applied to
    // markers: true, // markers to show start and end pointers just for developers
    start: "top -20%", // where will it start from, that black bg col part
    end: "top -80%", // where will it end, that black bg col part
    scrub: 2.5, // this will make it apply on the basis of scroll, so when we scroll up then the black part will get removed as it did on the landing page
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90, // from the y axis
  opacity: 0, // make the opacity 0
  duration: 2, // seconds for the duration
  // stagger: 0.4, // to make the effect applied to elememts one by one
  scrollTrigger: {
    // to apply the scrollTrigger
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8, // to scale up
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#quote1", {
  y: -70, // go from where to where
  x: -70,
  scrollTrigger: {
    trigger: "#quote1", // what to trigger
    scoller: "body", // from where
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#quote2", {
  y: 70, // go from where to where
  x: 70,
  scrollTrigger: {
    trigger: "#quote1", // what to trigger
    scoller: "body", // from where
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1", // what to trigger
    scoller: "body", // from where
    // markers: true,
    start: "top 75%", // from where it'll start
    end: "top 100%", // and till where it run
    scrub: 3,
  },
});