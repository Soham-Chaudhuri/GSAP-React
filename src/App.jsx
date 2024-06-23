import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const gsapRef = useRef();
  const [box, setBox] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [opac, setOpac] = useState(0);
  const randomdisp = gsap.utils.random(-500, 500, 20);
  const randomrot = gsap.utils.random(-720, 720, 30);
  const randomopac = gsap.utils.random(0, 1, 0.1);
  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: box,
  //     opacity: opac,
  //     rotate: rotate,
  //     duration: 0.5,
  //   });
  // }, [box, rotate, opac]);

  // useGSAP(() => {
  //   gsap.to(".page-2 h1", {
  //     x: "-200%",
  //     scrollTrigger: {
  //       trigger: ".page-2",
  //       scroller: "body",
  //       // markers:true,
  //       start: "top 0%",
  //       end: "top -150%",
  //       scrub: 2,
  //       pin: true,
  //     },
  //   });
  // });

  // const [path, setPath] = useState("M 10 100 Q 600 10 1190 100");
  // const finalPath = "M 10 100 Q 600 10 1190 100";

  // const handleMouseMove = (event) => {
  //   const newPath = `M 10 100 Q ${event.clientX} ${event.clientY} 1190 100`;
  //   setPath(newPath);
  //   useGSAP(()=>{
  //     gsap.to("svg path", {
  //       attr: {
  //         d: newPath,
  //       },
  //       duration: 0.3,
  //       ease: "power3.out",
  //     });
  //   })
  // };

  // const handleMouseLeave = () => {
  //   useGSAP(()=>{
  //     gsap.to("svg path", {
  //       attr: {
  //         d: finalPath,
  //       },
  //       duration: 1.5,
  //       ease: "elastic.out(1, 0.2)",
  //     });
  //   })
  // };

  // useEffect(() => {
  //   const main = document.querySelector("#main");
  //   main.addEventListener("mousemove", handleMouseMove);
  //   main.addEventListener("mouseleave", handleMouseLeave);
  //   return () => {
  //     main.removeEventListener("mousemove", handleMouseMove);
  //     main.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  return (
    <>
      {/* <main> */}
      {/* <button className='btn' onClick={()=>{
        setBox(randomdisp);
        setRotate(randomrot);
        setOpac(randomopac);
        // console.log(randomdisp);
        }}>Animate</button>
        <div ref={gsapRef} className="box">
        </div> */}
      {/* </main> */}
      {/* <div className="page-2">
        <h1>
          Experiences
        </h1>
      </div> */}
      <div id="main" style={{  backgroundColor: "black" }}>
        <svg width="1200" height="200">
          <path d={path} fill="transparent" stroke="white" />
        </svg>
      </div>
    </>
  );
};

export default App;

//   1. GSAP used for animate elements
// 2. ScrollTrigger used for animate elements on basis of scrolling
// properties of scrollTrigger
// - trigger: 'select element you wants to trigger',
// -scroller: " body most of the times",
// -start : "animation start point",
// -end: "animation end point",
// -markers : " Boolean" -helps us to make perfect animtion  we can remove it later,
// -scrub: "Boolean or any no. between 1-5" -to make animation back and forth,
// -pin : pin the page while animating elements
//  ** note: while using pin property make sure trigger must be parent element

// var path = `M 10 100 Q 600 10 1190 100`;
// var finalPath = `M 10 100 Q 600 10 1190 100`;
// var main = document.querySelector("#main");

// main.addEventListener("mousemove", function (dets) {
//   path = `M 10 100 Q ${dets.x} ${dets.y} 1190 100`;

//   gsap.to("svg path", {
//     attr: {
//       d: path,
//     },
//     duration: 0.3,
//     ease: "power3.out",
//   });
// });

// main.addEventListener("mouseleave", () => {
//   gsap.to("svg path", {
//     attr: {
//       d: finalPath,
//     },
//     duration: 1.5,
//     ease: "elastic.out(1,0.2)",
//   });
// });
