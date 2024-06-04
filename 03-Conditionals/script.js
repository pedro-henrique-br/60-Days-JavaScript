const triangle = () => {
  let sharp = ""
  for(let i = 0; sharp.length <= 7; i++){
    sharp += "#" 
    console.log(sharp)
  }
}

const fizzOrBuzz = () => {
  for(let i = 0; i <= 100; i++){
    if(i % 3 === 0){
      console.log("fizz")
    } else if (i % 5 === 0){
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

const xadrez = () => {
  const size = 8
  let hash = "# # # #"
  for(let i = 0; i <= size; i++){
    if(i % 2 === 0){
      hash = "# # # #"
    } else {
      hash = " # # # #"
    }
    console.log(hash)
  }
}

xadrez()