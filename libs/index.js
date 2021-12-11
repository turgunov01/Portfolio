let imageHid = document.querySelector('.intro__img-user')
let serviceContent = document.querySelector('.ser__content')
let serviceContentTxt = document.querySelector('.ser__title')
let serviceContentTxt2 = document.querySelector('.ser__type')


// before editing in js

imageHid.style.transition = '.5s'
    serviceContent.style.transition = '.5s'
    serviceContentTxt.style.transition = '.7s'
    serviceContentTxt2.style.transition = '1s'


    serviceContentTxt.style.transform = 'scale(0.7)'
    serviceContentTxt2.style.transform = 'scale(0.7)'
    serviceContent.style.opacity = '100%'

// window for parallax style 

window.addEventListener('scroll', function () {

    




        if (scrollY == 400) {
            imageHid.style.opacity = '30%'
        } else if(scrollY <= 300) {
            imageHid.style.opacity = '100%'
        } else {
            imageHid.style.opacity = '10%'
        }

        if (scrollY >= 500) {
            serviceContentTxt.style.transform = 'scale(1)'
            serviceContentTxt2.style.transform = 'scale(1)'
        } else {
            serviceContentTxt.style.transform = 'scale(0.7)'
            serviceContentTxt2.style.transform = 'scale(0.7)'
        }


        if (scrollY >= 600) {
            serviceContent.style.opacity = '100%'
            serviceContent.style.transform = 'scale(1)'
        } else {
            serviceContent.style.opacity = '30%'
            serviceContent.style.transform = 'scale(0.7)'

        }



        show()

})

function show() {
    console.log(scrollY)
}






















// e-target editing cards

class Rotate {

    constructor(config) {

        this.rotate = document.querySelectorAll(config.el)

        // console.log(this.rotate);

        for (let i = 0; i < this.rotate.length; i++) {

            this.rotate[i].addEventListener('mousemove', this.getRotate)
            this.rotate[i].addEventListener('mouseout', this.rotateNone)

        }


        // this.rotate.addEventListener('mouseout', ()=> this.getRotateNone())


    }

    getRotate(e) {
        this.halfHeight = this.offsetHeight / 2

        this.style.transform = `rotateX(${-(e.offsetY - this.halfHeight) / 7}deg) rotateY(${(e.offsetX - this.halfHeight) / 7}deg)`
    }

    rotateNone() {
        this.style.transform = 'rotate(0)'
    }

}

const card = new Rotate({
    el: '.card'
})

