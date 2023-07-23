function valueSetters() {
  gsap.set("#contact #main #content span .child", { y: "100%" });
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
    .from("#contact #desktop-nav #links,#contact #desktop-nav #copyright", {
      x: "-100%",
      duration: 1,
      stagger: 0.2,
    })
    .from("#contact #mobile-nav #links,#contact #mobile-nav #copyright", {
      y: "-500%",
      duration: 1,
      delay: -1,
      stagger: 0.2,
    })
    .to("#contact #main #content .parent .child", {
        y: 0,
        stagger: 0.1,
        duration: 2,
        delay: -.8,
        ease: Expo.easeInOut,
      });
}

revealToSpan()
valueSetters()
animation();
