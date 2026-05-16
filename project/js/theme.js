// ===============================
// DARK MODE TOGGLE
// ===============================

const modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener("click", () => {

    // TOGGLE DARK MODE CLASS

    document.body.classList.toggle("dark-mode");

    // ICON CHANGE

    const icon = modeBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


// ===============================
// FEEDBACK STAR RATING
// ===============================

const stars = document.querySelectorAll(".stars label");

stars.forEach((star) => {

    star.addEventListener("click", () => {

        // REMOVE ACTIVE CLASS FROM ALL

        stars.forEach((item) => {
            item.classList.remove("active");
        });

        // ADD ACTIVE CLASS

        star.classList.add("active");

        // PREVIOUS STARS ACTIVE

        let previous = star.previousElementSibling;

        while (previous) {

            if (previous.tagName === "LABEL") {
                previous.classList.add("active");
            }

            previous = previous.previousElementSibling;
        }
    });
});


// ===============================
// FORM SUBMIT MESSAGE
// ===============================

const forms = document.querySelectorAll("form");

forms.forEach((form) => {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Form Submitted Successfully!");

        form.reset();

        // REMOVE STAR ACTIVE AFTER RESET

        stars.forEach((star) => {
            star.classList.remove("active");
        });
    });
});


// ===============================
// SCROLL ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(
    ".hero-content, .hero-image, .feedback-left, .feedback-form-box, .contact-left, .contact-form-box"
);

const showOnScroll = () => {

    animatedElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", showOnScroll);

showOnScroll();


// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("nav-active");
        });

        link.classList.add("nav-active");
    });
});