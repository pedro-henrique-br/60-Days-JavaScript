const data = {
  userId_: 1,
  userName: "zxCabr",
  userAccount: "prime"
}

const getUserData = async (data) => {
  const response = await (data)
  const {userId_, userName, userAccount} = response
  setTimeout(() => {
    document.body.innerHTML = `
    <h1>${userName}</h1>
    <p>${userId_}</p>
    <p>${userAccount}</p>`
  }, 2000)
}

getUserData(data)

alert(window.innerHeight);