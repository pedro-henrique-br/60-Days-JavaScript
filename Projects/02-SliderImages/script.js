const imageContainer = document.getElementById("image--container")
const images = imageContainer.querySelectorAll("li img")

let currentIndex = 0

const getCurrentSlide = (index) => {
  console.log(index)
  console.log(imageContainer.querySelectorAll("img")[index])

}


