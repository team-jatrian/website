const stylesheet = document.querySelector('.stylesheet');
const mainScript = document.querySelector('.main-script');

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (isChrome) {
    stylesheet.setAttribute('href', 'style-alternative.css');
    onlyOnChrome();
}

function onlyOnChrome() {
    const welcomeText = document.querySelector('.welcome-text');
    const logo = document.querySelector('.logo');
    const hamburger = document.querySelector('.hamburger');
    const arrow = document.querySelector('.down-arrow');
    const navLinks = document.querySelector('.nav-links');
    const stylesheet = document.querySelector('.stylesheet');
    const scripts = document.querySelector('.scripts');

    let counter = 0;
    let forewards = true;

    hamburger.addEventListener('click', () => {
        counter++;
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
        if ((counter % 2) == 1) {
            welcomeText.classList.add('vanish');
            welcomeText.classList.remove('appear');
            arrow.classList.add('vanish');
            arrow.classList.remove('appear');
        } else {
            welcomeText.classList.add('appear');
            welcomeText.classList.remove('vanish');
            arrow.classList.add('appear');
            arrow.classList.remove('vanish');
        }
    });

    //scrollMagic

    const tl = new TimelineLite();
    tl.to('.nav-bar', 0.5, {
            opacity: 1,
            background: "white",
            borderBottom: "3px solid #d1a33f",
            paddingBottom: '7%'
        })
        .to('.introduction', 0.25, {
            opacity: 0
        }, '-=0.5')
        .to('.hamburger', 0.1, {
            zIndex: 4
        })
        .to('.down-arrow', 0.25, {
            className: '+=vanish'
        }, '-=0.75')
        .to('.sponsoring-logos', 0.25, {
            opacity: 0
        }, '-=0.5');
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
            triggerElement: '.welcome-text'
        })
        .addTo(controller)
        .setTween(tl)
        .triggerHook(0);
}