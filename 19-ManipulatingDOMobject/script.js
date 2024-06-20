const allTitles = document.querySelectorAll(".title")

for(let index = 0; index < allTitles.length; index++){
  console.log(allTitles[index].textContent)
  allTitles[index].textContent = [index]
  console.log(allTitles[index].textContent)
}