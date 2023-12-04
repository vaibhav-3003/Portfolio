function valueSetters() {
  gsap.set("#projects #content span .child", { y: "100%" });
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two spans
    let parent = document.createElement("span");
    let child = document.createElement("span");

    //parent and child both set theirs respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    // span parent gets child and child gets parent elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function animation() {
  var tl = gsap.timeline();

  tl.to("#start_animation", {
    height: 0,
    duration: 2,
    delay: 0.5,
    ease: Expo.easeInOut,
  })
    .from("#projects #desktop-nav #links,#projects #desktop-nav #copyright", {
      x: "-100%",
      duration: 1,
      stagger: 0.2,
    })
    .from("#projects #mobile-nav #links,#projects #mobile-nav #copyright", {
      y: "-500%",
      duration: 1,
      delay: -1,
      stagger: 0.2,
    })
    .to("#projects #content #title .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      delay: -0.8,
      ease: Expo.easeInOut,
    })
    .to("#projects #content #title #title_second div#line", {
      width: "50%",
      duration: 1,
      delay: -0.8,
      ease: Expo.easeInOut,
    })
    .to("#projects #content #scroll-animation",{
      opacity: 1,
      duration: 1,
      ease: Expo.easeInOut
    })
    .to("#projects #content #project_links #first_two #img_container img", {
      scrollTrigger: {
        trigger: "#projects #content #project_links #first_two #img_container",
        scroller: "#projects",
        start: "30% 50%",
        pin: false, // Set pin to false here
        scrub: 2,
        end: "bottom 100%", // Set the end position for the animation
      },
      height: "100%",
      duration: 3,
      ease: Expo.easeInOut,
    })
    .to("#projects #content #project_links #last_two #img_container img", {
      scrollTrigger: {
        trigger: "#projects #content #project_links #last_two #img_container",
        scroller: "#projects",
        start: "0% 50%",
        pin: false, // Set pin to false here
        scrub: 2,
        end: "bottom 100%", // Set the end position for the animation
      },
      height: "100%",
      duration: 3,
      ease: Expo.easeInOut,
    })
    .to("#projects #content #contact_info .parent .child", {
      scrollTrigger: {
        trigger: "#projects #content #contact_info",
        scroller: "#projects",
        start: "0% 50%",
        scrub: 2,
        end: "bottom 100%",
      },
      y: 0,
      stagger: .1,
      duration: 2,
      delay: .5,
      ease: Expo.easeInOut,
    })
    .to("#projects #content #contact_info #line p", {
      scrollTrigger: {
        trigger: "#projects #content #contact_info",
        scroller: "#projects",
        start: "0% 50%",
        scrub: 3,
        end: "bottom 100%",
      },
      width: "100%",
      duration: 2,
      ease: Expo.easeInOut,
    });
}

revealToSpan()
valueSetters()

animation();
