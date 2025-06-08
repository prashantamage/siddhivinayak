require.config({
    baseUrl: "js",
    paths: {
        jquery: "jquery.min",
        bootstrap: "bootstrap.bundle.min",
        aos: "aos",
        gsap: "gsap.min",
        fontawesome: "font-awesome-all.min",
        particles: "tsparticles.bundle.min"
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

require(["jquery", "bootstrap", "aos", "gsap", "particles", "fontawesome"], function ($, bootstrap, AOS, gsapModule, tsParticles) {
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

    window.submitForm = function (e) {
        e.preventDefault();
        event.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const contact = document.getElementById('formMobile').value.trim();
        const message = document.getElementById('formMessage').value.trim();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('contact', contact);
        formData.append('message', message);

        fetch('mailer/send.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                //document.getElementById('responseMessage').innerHTML = `<div class="alert alert-success">${data}</div>`;
                document.getElementById('queryForm').reset();
            })
            .catch(error => {
                //document.getElementById('responseMessage').innerHTML = `<div class="alert alert-danger">❌ Error sending message.</div>`;
                console.error('Error:', error);
            });
    };

});