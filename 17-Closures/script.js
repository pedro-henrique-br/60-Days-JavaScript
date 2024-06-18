const closure = (y, x) => {
  let total = 0
  const closureSum = (y,x) => {
    total = y + x
    return total
  }
  const closureSub = (y,x) => {
    total = y - x
    return total
  }
  return {
    sum: closureSum(y,x),
    sub: closureSub(y,x),
  }
}

const callBack = closure(4,3)

console.log(callBack.sub)
console.log(callBack.sum)

const innerFunction = () => {
  const user = {}
    const personInfo = () => {
      user.info = {
        firstName: "Pedro",
        lastName: "Barbosa",
        incomes: [{job: "USD 1.589,43", freelance: "USD 293,92"}],
        expenses: [{market: "USD 932,23", internet: "USD 99,90", rent: "USD 500,00"}],
      }
    }
    const personExpenses = () => {
      user.expensesYear = {
        incomes: [{job: "USD 15.589,43", freelance: "USD 2493,92"}],
        expenses: [{market: "USD 9732,23", internet: "USD 990,90", rent: "USD 500,00"}]
      }
    }
    
    return {
      user,
      personInfo: personInfo(),
      personExpensesYear: personExpenses()
    }
  }

const person = innerFunction()

console.log(person.user)