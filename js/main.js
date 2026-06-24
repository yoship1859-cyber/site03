// document.addEventListener("DOMContentLoaded",() =>{
//     console.log('hello');
// });

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const onScroll = () => {
        header.classList.toggle("scrolled", window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = document.querySelectorAll(".technology-list li");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    targets.forEach(target => observer.observe(target));


    // particle.js起動する
    particlesJS('bg',

        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#898989"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 112,
                    "color": "#898989",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
});

const targets = document.querySelectorAll(".slide-title");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 要素が画面に入ったらactiveクラスをつける
        entry.target.classList.add("active");

        // 一度だけ実行したい場合は監視を解除
        observer.unobserve(entry.target);
      }
    });
  });

  targets.forEach((target) => observer.observe(target));

  const caseTabs = document.querySelectorAll(".case-tab");
  const allSlideCards = document.querySelectorAll(".case-slide-card");

  function showCategory(cat) {
    allSlideCards.forEach((card) => {
      card.style.opacity = "0";
    });

    setTimeout(() => {
      allSlideCards.forEach((card) => {
        if (card.dataset.cat === cat) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      setTimeout(() => {
        allSlideCards.forEach((card) => {
          if (card.dataset.cat === cat) {
            card.style.opacity = "1";
          }
        });
      }, 50);
    }, 200);
  }

  caseTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      caseTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      showCategory(tab.dataset.cat);
    });
  });

  showCategory("infra");

  const ctaBtn = document.querySelector(".cta-btn");
  if (ctaBtn) {
    const contactSection = document.querySelector(".contact-wrap");
    window.addEventListener("scroll", () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const btnRect = ctaBtn.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const contactRect = contactSection ? contactSection.getBoundingClientRect() : null;
      const inContact = contactRect && btnRect.bottom > contactRect.top && btnRect.top < contactRect.bottom;
      const inFooter = btnRect.bottom > footerRect.top;
      if (inContact && !inFooter) {
        ctaBtn.classList.add("hidden");
        ctaBtn.classList.remove("on-footer");
      } else if (inFooter) {
        ctaBtn.classList.remove("hidden");
        ctaBtn.classList.add("on-footer");
      } else {
        ctaBtn.classList.remove("hidden");
        ctaBtn.classList.remove("on-footer");
      }
    });
  }
