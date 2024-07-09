export const data = () => {
  const animal = {
    isAlive: true,
    name: "Rex",
    animalGretting(){
      return `Hi i'am ${this.name}!`
    }

  }
  return `Data received - ${animal.animalGretting()}`
}
