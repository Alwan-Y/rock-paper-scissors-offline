console.log('Okee')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('.buton')

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
        console.log(this.status)
        if (this.status == 201) {
            alert('Succes Login')
            location.replace("http://localhost:3000/dashBoard")
        } else {
            alert('Something wrong')
            location.replace("http://localhost:3000/loginAdmin")
        }
    }
    
    xhr.onerror = function() {
        alert('error')
    }
    xhr.open("POST", "http://localhost:3000/apis/adminGame")
    xhr.setRequestHeader("Content-Type", "application/json")
    const userLogin = {
        username: username.value,
        password: password.value
    }
    xhr.send(JSON.stringify(userLogin))
})