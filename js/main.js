require.config({
    baseUrl: "js",
    paths: {
        jquery: "jquery.min",
        bootstrap: "bootstrap.bundle.min",
        aos: "aos",
        gsap: "gsap.min",
        fontawesome: "font-awesome-all.min",
        particles:"tsparticles.bundle.min"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        aos: {
            exports: "AOS"
        },
        gsap: {
            exports: "gsap"
        }
    }
});

require(["jquery", "bootstrap", "aos", "gsap","particles", "fontawesome"], function ($, bootstrap, AOS, gsapModule,tsParticles) {
    console.log("All dependencies loaded");

    var gsap = gsapModule.gsap || gsapModule;

    AOS.init({
        duration: 1000,
        once: true
    });

    gsap.from("#home h1", {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5
    });

    gsap.from("#home p", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.8
    });

    gsap.from("social-icons", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from("skills-list", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2
    });

    // tsParticles.tsParticles.load("tsparticles", {
    //     background: {
    //       //color: "#0d0d0d"
    //     },
    //     fpsLimit: 60,
    //     interactivity: {
    //       events: {
    //         onHover: {
    //           enable: false,
    //           mode: "repulse"
    //         },
    //         resize: false
    //       },
    //       modes: {
    //         repulse: {
    //           distance: 50,
    //           duration: 0.4
    //         }
    //       }
    //     },
    //     particles: {
    //       color: { value: "#000000" },
    //       links: {
    //         color: "#000000",
    //         distance: 120,
    //         enable: true,
    //         opacity: 0.4,
    //         width: 1
    //       },
    //       move: {
    //         enable: true,
    //         speed: 1,
    //         direction: "none",
    //         outModes: "bounce"
    //       },
    //       number: {
    //         value: 80,
    //         density: { enable: true, area: 800 }
    //       },
    //       opacity: { value: 0.5 },
    //       shape: { type: "circle" },
    //       size: { value: { min: 1, max: 5 } }
    //     },
    //     detectRetina: true
    //   });
});
