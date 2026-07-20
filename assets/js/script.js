/* ==========================================
   RetailSync QB
   assets/js/script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Navbar background on scroll
    // ==============================

    const navbar = document.querySelector(".custom-navbar");

    function navbarScroll() {

        if (window.scrollY > 50) {

            navbar.style.background = "#111111";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.35)";

        } else {

            navbar.style.background = "rgba(22,22,22,0.96)";
            navbar.style.boxShadow = "none";

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);


    // ==============================
    // Smooth Scroll
    // ==============================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    // ==============================
    // Fade-in Animation
    // ==============================

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".feature-card, .step, .cta, .workflow, .features").forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


    // ==============================
    // Active Navigation
    // ==============================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });


    // ==============================
    // Contact Form Demo
    // ==============================

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting RetailSync QB.\n\nYour message has been received."
            );

            form.reset();

        });

    }

});