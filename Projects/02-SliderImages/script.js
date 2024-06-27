const imageContainer = document.getElementById("image--container")
const images = imageContainer.querySelectorAll("li img")

const previousButton = document.getElementById("previous-button")
const nextButton = document.getElementById("next-button")

const img = document.getElementById("img")

let currentIndex = 1

const slideImg = (index) => {
  img.src = `./assets/img/img-${index}.jpg`
  console.log(index)
  if(index >= 7){
    currentIndex = 0
  } else if(index <= 0 || index <= -1){
    currentIndex = 7
    index = 0
    img.src = `./assets/img/img-${currentIndex}.jpg`
  }
}
nextButton.addEventListener("click", () => {
  slideImg(currentIndex += 1)
})

previousButton.addEventListener("click", () => {
  slideImg(currentIndex -= 1)
})

