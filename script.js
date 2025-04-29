const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("menu_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : " ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

window.addEventListener('resize', function () {
    let languageSelect = document.querySelector('.language-select');
    if (window.innerWidth <= 768) {
        languageSelect.style.display = 'none';
    } else {
        languageSelect.style.display = 'inline-block';
    }
});

if (window.innerWidth <= 768) {
    document.querySelector('.language-select').style.display = 'none';
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content .section-subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".service-card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".destination-card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".trip-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".trip-content .section-subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".trip-content .section-header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".trip-list li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".client-content .section-subheader", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".client-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

const partnerRevealOption = {
    distance: "60px",
    origin: "left",
    duration: 1000,
    opacity: 0,
    easing: 'ease-out',
    interval: 150,
};

ScrollReveal().reveal(".partner-section img", {
    ...partnerRevealOption,
});


ScrollReveal().reveal(".subscriber-container", {
    ...scrollRevealOption,
    delay: 1000,
});


const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChangeTransitionEnd: function () {
            this.updateAutoHeight();
        },
    },
});

function toggleHeart(element) {
    const icon = element.querySelector('i');
    icon.classList.toggle('liked');

    if (icon.classList.contains('liked')) {
        icon.classList.remove('ri-heart-line');
        icon.classList.add('ri-heart-fill');
    } else {
        icon.classList.remove('ri-heart-fill');
        icon.classList.add('ri-heart-line');
    }
}


