const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('.buton')


const redirect = () => {
    location.replace("https://translate.google.com/")
}

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
        alert(this.responseText)
        redirect()
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }
    xhr.open("POST", "http://localhost:3000/apis/userLoginCheck")
    xhr.setRequestHeader("Content-Type", "application/json")
    const userLogin = {
        username: username.value,
        password: password.value
    }
    xhr.send(JSON.stringify(userLogin))
})

