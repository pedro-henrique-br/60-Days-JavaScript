const nextButton = document.getElementById("next")
const previousButton = document.getElementById("previous")
const imageContainer = document.getElementById("image--container")
const images = imageContainer.querySelectorAll("li img")

let currentIndex = 0

const getCurrentSlide = (index) => {
  if(index >= images.length){
    currentIndex = 0
  } else if(index < 0){
    currentIndex = images.length - 1
  } else {
    currentIndex = index
  }

  const offSet = -currentIndex * 100
  imageContainer.style.transform = `transform(${offSet}%)`
}

previousButton.addEventListener("click", () => {
  getCurrentSlide(currentIndex - 1)
})

nextButton.addEventListener("click", () => {
  getCurrentSlide(currentIndex + 1)
})


