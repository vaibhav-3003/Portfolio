function valueSetters() {
  gsap.set("#skills #main #content span .child", { y: "100%" });
}

function startAnimation() {
  var tl = gsap.timeline();

  tl.to("#left,#right", {
    width: 0,
    duration: 2,
    delay: 0.5,
    ease: Expo.easeInOut,
  })
    .from("#skills #desktop-nav #links,#skills #desktop-nav #copyright", {
      x: "-100%",
      duration: 1,
      delay: -.7,
      stagger: 0.2,
    })
    .from("#skills #mobile-nav #links,#skills #mobile-nav #copyright", {
      y: "-500%",
      duration: 1,
      delay: -0.7,
      stagger: 0.2,
    })
    .to("#skills .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      delay: -1,
      ease: Expo.easeInOut,
    })
    .from("#skills #text_animation", {
      opacity: 0,
      duration: 1,
      delay: -.8,
      ease: Expo.easeInOut,
    });
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

function textAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    var myCanvas = document.getElementById("myCanvas");
    var canvasContainer = document.getElementById("myCanvasContainer");

    if (typeof TagCanvas !== "undefined") {
      try {
        TagCanvas.Start("myCanvas", "tags", {
          textColour: "#ffffff",
          outlineColour: "#FE0853",
          outlineThickness: 0.5,
          maxSpeed: 0.06,
          freezeActive: true,
          shuffleTags: true,
          shape: "sphere",
          zoom: 0.8,
          noSelect: true,
          textFont: "Cormorant",
          textHeight: 30,
          pinchZoom: true,
          freezeDecel: true,
          fadeIn: 3000,
          initial: [0.3, -0.1],
          depth: 1.1,
        });
      } catch (error) {
        console.error("An error occurred while initializing TagCanvas:", error);
        canvasContainer.style.display = "none";
      }
    } else {
      console.error("TagCanvas library is not loaded.");
      canvasContainer.style.display = "none";
    }
  });
}

revealToSpan();
valueSetters();
startAnimation();
textAnimation();
