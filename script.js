// ===== MENU TOGGLE =====
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Close menu on scroll
window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// ===== HOME IMAGE SLIDER =====
const mainHomeImage = document.querySelector('.home .row .image img');
document.querySelectorAll('.home .image-slider img').forEach(image => {
    image.addEventListener('click', () => {
        let src = image.getAttribute('src');
        mainHomeImage.setAttribute('src', src);
    });
});

// ===== REVIEW SLIDER (Swiper) =====
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000, // smoother timing than 7500ms
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3, // added desktop support
        }
    },
});
