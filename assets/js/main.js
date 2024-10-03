'use strict'
// выпадающее меню
let menuElems = document.querySelectorAll('.menu__elem');

menuElems.forEach(menuElem => {
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu__btn');

    menuElem.addEventListener('mouseenter', function () {
        submenu.classList.add('active')
        btn.classList.add('active')
    })

    menuElem.addEventListener('mouseleave', function () {
        submenu.classList.remove('active')
        btn.classList.remove('active')
    })
})
// выпадающее меню

// слайдер 
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("active");
    });

    slides[currentIndex].style.display = "block";
    dots[currentIndex].classList.add("active");
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

function initSlider() {
    showSlide(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index));
});

document.addEventListener("DOMContentLoaded", initSlider);
// слайдер

// номер телефона
let phoneBtn = document.querySelector(".phone");
let faq = document.querySelector(".faq");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                phoneBtn.classList.add("show");
            } else {
                phoneBtn.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.5,
    }
);

observer.observe(faq);
// номер телефона

// модальное окно

var modal = document.getElementById("modal");
var span = document.getElementById("closeModal");
function openModal() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

setTimeout(openModal, 3000);
// модальное окно

// faq
document.querySelectorAll('.faq-card').forEach(card => {
    card.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.faq-card').forEach(card => {
                card.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});
// faq

// вкладки
let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})
// вкладки


