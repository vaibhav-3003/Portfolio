
function valueSetters() {
  gsap.set("#home #main #work-links span .child", { y: "100%" });
  gsap.set("#home #main #about h1,#home #main #about p",{
    opacity:0
  });
  // gsap.set()
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

function animateHomePage(){
    var tl  = gsap.timeline();

    tl.to("#home", {
      height: "100%",
      duration: 2,
      delay: 0.7,
    })
      .from("#home #desktop-nav #links,#home #desktop-nav #copyright", {
        x: "-100%",
        duration: 1,
        stagger: 0.2,
      })
      .from("#home #mobile-nav #links,#home #mobile-nav #copyright", {
        y: "-500%",
        duration: 1,
        delay: -.2,
        stagger: 0.2,
      })
      .to("#home #main #about h1,#home #main #about p", {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        delay:-.8,
        ease: Expo.easeInOut,
      })
      .to("#home .parent .child", {
        y: 0,
        stagger: 0.1,
        duration: 2,
        delay: -0.6,
        ease: Expo.easeInOut,
      });

}

revealToSpan()
valueSetters()
animateHomePage()