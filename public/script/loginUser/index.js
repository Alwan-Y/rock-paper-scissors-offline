const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('.buton')


const redirect = () => {
    location.replace("http://localhost:3000/game")
}

const redirect2 = () => {
    location.replace("http://localhost:3000/loginUser")
}

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
        console.log(this.status)
        if (this.status == 201) {
            alert('Succes Login')
            redirect()
            console.log('succes')
        } else {
            alert('Something wrong')
            redirect2()
            console.log('error')
        }
    }
    
    xhr.onerror = function() {
        alert('error')
    }
    xhr.open("POST", "http://localhost:3000/apis/userLoginCheck")
    xhr.setRequestHeader("Content-Type", "application/json")
    const userLogin = {
        username: username.value,
        password: password.value
    }
    xhr.send(JSON.stringify(userLogin))
})

