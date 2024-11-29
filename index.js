/*========== SHOW MENU ============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exists //
    if(toggle && nav){
        // We add the show menu class to div tag with nav__menu class //
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*========== REMOVE MENU MOBILE ============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
// Iterate over each element with the class 'nav__link' and add a click event listener
navLink.forEach(n => n.addEventListener('click', linkAction))


/*========== SCROLL SECTIONS ACTIVE LINK ============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             // Add the 'active-link' class if the section is currently visible //
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            // Remove the 'active-link' class if the section is not visible //
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
// Add a scroll event listener to the window //
window.addEventListener('scroll', scrollActive)

/*========== CHANGE BACKGROUND HEADER ============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // when the scroll is greater than 200 viewport height, add the scroll-header class
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*========== SHOW SCROLL TOP ============*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    // when the scroll is higher than 500 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)

/*========== DARK LIGHT THEME ============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

// we validate if the user previously chose a topic
if(selectedTheme){
    // If validation is fulfilled, we ask what the issue was.
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme naturally with the button.
themeButton.addEventListener('click', ()=>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*========== SCROLL REVEAL ANIMATION ============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img, 
        .about__data, .about__img,
        .menu__content, .services__content,
        .app__data, .app__img, 
        .contact__data, .contact__button,
        .footer__content`, {
    interval: 200
})