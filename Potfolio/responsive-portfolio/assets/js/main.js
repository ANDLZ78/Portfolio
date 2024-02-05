/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*=============== Menu Show ===============*/
/*validando constante*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== Menu hidden ===============*/
/*validando constante*/
if (navClose) {
    navClose.addEventListener('click', () => [
        navMenu.classList.remove('show-menu')
    ])
}




/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')

}
window.addEventListener('scroll', bgHeader)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const seletecdTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (seletecdTheme) {

    document.body.classList[seletecdTheme === 'dark' ? 'add' : 'remove'](darkTheme)

    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)


}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
