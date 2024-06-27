const imageContainer = document.getElementById("image--container")
const images = imageContainer.querySelectorAll("li img")

const previousButton = document.getElementById("previous-button")
const nextButton = document.getElementById("next-button")

const img = document.getElementById("img")

let currentIndex = 1
setInterval(() => {
  index = 1
  if(currentIndex >= index){
    img.style.transition = "0.5s"
    slideImg(currentIndex += 1)
  }
}, 4000)

const slideImg = (index) => {
  img.style.opacity = 0
  setTimeout(() => {
    img.src = `./assets/img/img-${index}.jpg`
    if(index >= 8 || currentIndex >= 8){
      currentIndex = 1
      img.src = `./assets/img/img-${currentIndex}.jpg`
    } else if(index <= 0 || index <= -1){
      currentIndex = 7
      index = 0
      img.src = `./assets/img/img-${currentIndex}.jpg`
    }
    img.style.opacity = 1
  }, 200)
}

nextButton.addEventListener("click", () => {
  slideImg(currentIndex += 1)
})

previousButton.addEventListener("click", () => {
  slideImg(currentIndex -= 1)
})

