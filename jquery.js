const $ = function (selector) {
    const elements = document.querySelectorAll.call(document, selector)

    const library = {
        elements,
        addClass(className) {
            this.elements.forEach((element) => {
                element.classList.add(className)
            })

            return library
        },
        fadeOut(duration) {
            this.elements.forEach((element) => {
                let currentOpacity = 1
                const decrement = 1 / (duration / 10)
                const fade = setInterval(() => {
                    currentOpacity -= decrement
                    element.style.opacity = currentOpacity

                    if (currentOpacity <= 0) {
                        clearInterval(fade)
                        element.remove()
                    }
                }, 10)
            })

            return library
        }
    }

    return library
}

$('#container').addClass('red').fadeOut(3000)