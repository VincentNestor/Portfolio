const knowledge = [...document.querySelectorAll('.knowledge div')];
const exploring = [...document.querySelectorAll('.exploring div')];
const loadingSpan = document.querySelector('.processing span.loading ')
const article = document.querySelector('article');
const services = document.querySelectorAll('.services div');



class Icons {
    setBackgroundEffect(element) {
        element.forEach(item => {
            const e = item.childNodes;
            const n = e[0].textContent;
            e[1].style.backgroundImage = `url("./images/icons/${n}.png")`;
        })
        element.forEach(item => {
            const e = item.childNodes
            item.addEventListener('mouseover', () => {
                e[0].classList.remove('activeElem')
                e[1].classList.add('activeElem')
            })
            item.addEventListener('mouseout', () => {
                e[0].classList.add('activeElem')
                e[1].classList.remove('activeElem')
            })
        })

    }

}
let icons = new Icons();

//the effect of background-image mouseover
icons.setBackgroundEffect(knowledge)
icons.setBackgroundEffect(exploring)




//the effect of technology placement
window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    let articlePos = article.offsetTop;

    if (scroll >= articlePos - 100) {
        knowledge.forEach(item => {
            item.classList.remove('active');
            
        })
    } else {
        knowledge.forEach(item => {
            item.classList.add('active');
        })
    }

    if (scroll >= articlePos +220) {
        exploring.forEach(item => {
            item.classList.remove('active');
            
        })
    } else {
        exploring.forEach(item => {
            item.classList.add('active');
        })
    }
    
    if (scroll >= articlePos + 400) {
        services.forEach(item => {
            item.classList.add('active');
        })
    } else {
        services.forEach(item => {
            item.classList.remove('active');
        })
    }
});