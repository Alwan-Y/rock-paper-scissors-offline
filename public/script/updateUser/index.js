const username = document.querySelector('.sectionUsername')
const password = document.querySelector('#password')
const buton = document.querySelector('#buton')

let updateUsername = ""

const getUserLogin = () => {
    const xhr = new XMLHttpRequest();
                
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText)
        if(responseJson.error) {
            console.log(responseJson.message)
        } else {
            updateUsername = responseJson[0].username
            renderUserLogin(responseJson)
        }
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }

    xhr.open("GET", `http://localhost:3000/apis/userLogin`)
    xhr.send();
}

const renderUserLogin = (datas) => {
    username.innerHTML = ""

    datas.forEach(data => {
        username.innerHTML += `
        <label for="username" class="color-font">Username</label>
        <input type="text" readonly class="form-control" id="username" aria-describedby="emailHelp"
            value="${data.username}">
        `
    })
}

buton.addEventListener('click', () => {
        console.log('click')    
        const xhr = new XMLHttpRequest()
        xhr.onload = function() {
            console.log(this.status)
            if (this.status == 201) {
                alert('succes update password')
                location.replace("http://localhost:3000")
            } else {
                alert('Something wrong')
            }
        }
        
        xhr.onerror = function() {
            alert('error')
        }
        xhr.open("PATCH", `http://localhost:3000/apis/userGame/${updateUsername}`)
        xhr.setRequestHeader("Content-Type", "application/json")
        const newUser = {
            password: password.value
        }
        xhr.send(JSON.stringify(newUser));
})

getUserLogin()