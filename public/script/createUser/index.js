const name = document.querySelector('#username')
const password = document.querySelector('#password')
const buton = document.querySelector('.buton')

buton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:3000/apis/userGame")
    xhr.setRequestHeader("Content-Type", "application/json")
    const newUser = {
        username: name.value,
        password: password.value
    }
    xhr.send(JSON.stringify(newUser));
})

