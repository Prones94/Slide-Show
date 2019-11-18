(function () {
    function makeSlideShow(slides) {
        // const slides = document.getElementById(slidesID)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')

        const delay = parseInt(slides.dataset.delay)
        const transition = parseInt(slides.dataset.transition)
        slidesInner.style.transition = `${transition}ms`

        const slidesWidth = slides.clientWidth
        let index = 0

        setInterval(function () {
            index += 1
            if (index === images.length) {
                index = 0
            }
            // CSS - transform: translate3d(0, 0, 0);
            //                transform:   translate3d(-1200px, 0, 0)
            slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
            console.log(index * -slidesWidth)

        }, delay)

    } // end makeSlideShow function

    const slideshows = document.querySelectorAll('.ms-slide-show')
    for(let i=0; i < slideshows.length; i+= 1) {
        makeSlideShow(slideshows[i])
    }


})() // IIFE Immediately Invoked Function Expression
