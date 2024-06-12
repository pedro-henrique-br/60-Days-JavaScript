console.log(this.document === document)

const thisFunction = () => {
  console.log(this.document === document)
}

thisFunction()

let eggs = ["Extra", "Medium", "short"]

function isThisFunction () {
  
  const eggs = ["Extra", "Medium", "short"]

  console.log(eggs === this)
  console.log(this.document === document)
  return this
}

console.log(isThisFunction())

thisFunction() == window