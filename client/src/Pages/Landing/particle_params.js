export const particle_params = {
    particles: {
      number: {
        value: 250,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#ffffff",
        },
        image: {
          src: "#",
          width: 0,
          height: 0,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 1,
        random: true,
        anim: { enable: false, speed: 1, size_min: 0.3, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: .1,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: true,
        attract: { enable: false, rotateX: 700, rotateY: 700 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 400,
          size: 1,
          duration: 2,
          opacity: 0,
          speed: .5,
        },
        grab: { distance: 400 },
        repulse: { distance: 20, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  }