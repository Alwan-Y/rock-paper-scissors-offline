const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('.buton')

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:3000/apis/userGame")
    xhr.setRequestHeader("Content-Type", "application/json")
    const userLogin = {
        username: username.value,
        password: password.value
    }
    xhr.send(JSON.stringify(userLogin));
})