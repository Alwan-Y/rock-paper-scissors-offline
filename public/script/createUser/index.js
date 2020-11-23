const name = document.querySelector('#username')
const password = document.querySelector('#password')
const buton = document.querySelector('.buton')


const redirect = () => {
    location.replace("http://localhost:3000/createUserBiodata")
}

const redirect2 = () => {
    location.replace("http://localhost:3000/createUser")
}

buton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
        console.log(this.status)
        if (this.status == 201) {
            alert('complete the bio first')
            redirect()
            console.log('succes')
        } else {
            alert('Something wrong, Repeat register frist')
            redirect2()
            console.log('error')
        }
    }
    
    xhr.onerror = function() {
        alert('error')
    }
    xhr.open("POST", "http://localhost:3000/apis/userGame")
    xhr.setRequestHeader("Content-Type", "application/json")
    const newUser = {
        username: name.value,
        password: password.value
    }
    xhr.send(JSON.stringify(newUser));
})

