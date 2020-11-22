const fullname = document.querySelector('#fullname')
const addres = document.querySelector('#addres')
const gender = document.querySelector('#gender')
const age = document.querySelector('#age')
const button = document.querySelector('.buton')
// test id
const authorId = '3074c4b8-63db-4297-8189-57bfa1beac96'

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:3000/apis/userGameBiodata")
    xhr.setRequestHeader("Content-Type", "application/json")
    const userBiodata = {
        fullname: fullname.value,
        addres: addres.value,
        gender: gender.value,
        age: age.value,
        userGameId: authorId
    }
    xhr.send(JSON.stringify(userBiodata));
})