const url = "https://api.thecatapi.com/v1/breeds"

fetch(url)
  .then(response => {
    console.log(response)
  }) .catch(error => console.log(error))


const content = "Hello World"
const Header = new Headers()


Header.append("Content-Type", content)
console.log(Header)
console.log(Header.has("Content-Type"))
Header.set("Content-Type", content.length)
console.log(Header)

const blob = new Blob()

blob.text("string")
console.log(blob.text())
