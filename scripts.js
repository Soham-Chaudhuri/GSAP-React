var path = `M 10 100 Q 600 10 1190 100`;
var finalPath = `M 10 100 Q 600 100 1190 100`;
var main = document.querySelector("div");

main.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1190 100`;

  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.3,
    ease: "power3.out",
  });
});

main.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
