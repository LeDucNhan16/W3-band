const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function opens () {
    $('.overlay').style.display = 'block'
    $('.icon__menu').style.display = 'none'
    $('.icon__close').style.display = 'block'
    $('.nav__menu').style.opacity = '1'
    $('.nav__menu').style.left = '0px'
}

function closes () {
    $('.overlay').style.display = 'none'
    $('.icon__menu').style.display = 'block'
    $('.icon__close').style.display = 'none'
    $('.nav__menu').style.opacity = '0'
    $('.nav__menu').style.left = '-250px'
    $('.nav__menu__subnav').style.display = 'none'
}

function subnav () {
    $('.nav__menu__subnav').style.display = 'block'
}

function overlay () {
    $('.overlay').style.display = 'none'
    $('.icon__menu').style.display = 'block'
    $('.icon__close').style.display = 'none'
    $('.nav__menu').style.opacity = '0'
    $('.nav__menu').style.left = '-250px'
    $('.nav__menu__subnav').style.display = 'none'
}

var elemens = $$('.elements')

for(var i=0; i< elemens.length ;i++) {
    elemens[i].onclick = function () {
        $('.overlay').style.display = 'none'
        $('.icon__menu').style.display = 'block'
        $('.icon__close').style.display = 'none'
        $('.nav__menu').style.opacity = '0'
        $('.nav__menu').style.left = '-250px'
        $('.nav__menu__subnav').style.display = 'none'
    }
}

