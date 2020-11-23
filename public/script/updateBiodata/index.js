console.log('eaeae')
const usernameSection = document.querySelector('.sectionUsername')
const fullname = document.querySelector('#fullname')
const addres = document.querySelector('#addres')
const gender = document.querySelector('#gender')
const age = document.querySelector('#age')
const button = document.querySelector('.buton')

let username = ""
let userGameId = ""

const getUserLogin = () => {
    const xhr = new XMLHttpRequest()
                
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText)
        if(responseJson.error) {
            console.log(responseJson.message)
        } else {
            let usernameTemp = responseJson[0].username
            username = usernameTemp
            renderUserLogin(responseJson)
            getUserId(usernameTemp)
        }
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }

    xhr.open("GET", `http://localhost:3000/apis/userLogin`)
    xhr.send()
}

const renderUserLogin = (datas) => {
    usernameSection.innerHTML = ""

    datas.forEach(data => {
        usernameSection.innerHTML += `
        <label for="username" class="color-font">Username</label>
        <input type="text" readonly class="form-control" id="username" aria-describedby="emailHelp"
            value="${data.username}">
        `
    })
}

const getUserId = (username) => {
    const xhr = new XMLHttpRequest()
                
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText)
        if(responseJson.error) {
            console.log(responseJson.message)
        } else {
            userGameId = responseJson.id
        }
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }

    xhr.open("GET", `http://localhost:3000/apis/userGame/${username}`)
    xhr.send()
}

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
        console.log(this.status)
        if (this.status == 201) {
            alert('succes update biodata')
            location.replace("http://localhost:3000")
        } else {
            alert('Something wrong')
        }
    }
    
    xhr.onerror = function() {
        alert('error')
    }
    xhr.open("PATCH", `http://localhost:3000/apis/userGameBiodata/${userGameId}`)
    xhr.setRequestHeader("Content-Type", "application/json")
    const newBiodata = {
        fullname: fullname.value,
        addres: addres.value,
        gender: gender.value,
        age: age.value
    }
    xhr.send(JSON.stringify(newBiodata))
})

getUserLogin()