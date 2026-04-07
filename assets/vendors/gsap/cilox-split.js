(function ($) {
  "use strict";

  $(window).on("load", function () {
    bwsplit_text();
    project_stack_animation();
    setTimeout(() => {
      image_animation();
    }, 500);
  });

  // Split Text
  function bwsplit_text() {
    setTimeout(function () {
      var splitTextElements = $(
        ".sec-title__title, .sec-title__tagline, .page-header__title, .bw-split-in-fade, .bw-split-in-scale"
      );
      if (splitTextElements.length === 0) return;
      gsap.registerPlugin(SplitText);
      splitTextElements.each(function (index, element) {
        var splitElement = new SplitText(element, {
          type: "chars, words", // "chars, words, lines"
        });

        gsap.set(element, {
          perspective: 400,
        });

        if ($(element).hasClass("bw-split-in-fade")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            ease: "Back.easeOut",
          });
        }
        if ($(element).hasClass("bw-split-in-right")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            x: "20",
            ease: "Back.easeOut",
          });
        }
        if ($(element).hasClass("bw-split-in-left")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            x: "-20",
            ease: "Back.easeOut",
          });
        }
        if ($(element).hasClass("bw-split-in-up")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            y: "80",
            duration: 0.6,
            scale: 1,
            stagger: 0.01,
            transformOrigin: "0% 50% -50",
            ease: "Back.back",
          });
        }
        if ($(element).hasClass("bw-split-in-up-fast")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            y: "-10",
            duration: 0.4,
            scale: 1,
            stagger: 0.01,
            transformOrigin: "0% 50% -50",
            ease: "Back.back",
          });
        }
        if ($(element).hasClass("bw-split-in-down")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            y: "-20",
            ease: "circ.out",
          });
        }
        if ($(element).hasClass("bw-split-in-rotate")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            rotateX: "50deg",
            ease: "circ.out",
          });
        }
        if ($(element).hasClass("bw-split-in-scale")) {
          gsap.set(splitElement.chars, {
            opacity: 0,
            rotateX: "50deg",
            ease: "circ.out",
          });
        }
        element.anim = gsap.to(splitElement.chars, {
          scrollTrigger: {
            trigger: element,
            toggleActions: "restart pause resume reverse",
            start: "top 90%",
          },
          x: "0",
          y: "0",
          rotateX: "0",
          scale: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.02,
        });
      });
    }, 200);
  }

  function image_animation() {
    gsap.registerPlugin(ScrollTrigger);

    // Select all elements with `.bw-img-anim-left`
    gsap.utils.toArray(".bw-img-anim-left").forEach((img) => {
      gsap.to(img, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Select all elements with `.bw-img-anim-right`
    gsap.utils.toArray(".bw-img-anim-right").forEach((img) => {
      gsap.to(img, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }

  function project_stack_animation() {
    gsap.registerPlugin(ScrollTrigger);

    const serviceStack = gsap.utils.toArray(".project-stack");
    let device_width = window.innerWidth;

    if (serviceStack.length > 0 && device_width > 991) {
      serviceStack.forEach((item) => {
        gsap.to(item, {
          opacity: 0,
          scale: 0.9,
          y: 50,
          scrollTrigger: {
            trigger: item,
            scrub: true,
            start: "top top",
            pin: true,
            pinSpacing: false,
            markers: false,
          },
        });
      });
    }
  }


})(jQuery);