const fullname = document.querySelector('#fullname')
const addres = document.querySelector('#addres')
const gender = document.querySelector('#gender')
const age = document.querySelector('#age')
const button = document.querySelector('.buton')
const username = document.querySelector('#username')
// test id
let newUsername = ""
let userGameId = ""

const redirect = () => {
    location.replace("http://localhost:3000/loginUser")
}

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()

    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText)
        if(responseJson.error) {
            console.log(responseJson.message)
        } else {
            alert('Thank you for filling in all personal data')
            redirect()
        }
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }

    xhr.open("POST", "http://localhost:3000/apis/userGameBiodata")
    xhr.setRequestHeader("Content-Type", "application/json")
    const userBiodata = {
        fullname: fullname.value,
        addres: addres.value,
        gender: gender.value,
        age: age.value,
        userGameId: userGameId
    }
    xhr.send(JSON.stringify(userBiodata));
})

    const getUserLogin = () => {
        const xhr = new XMLHttpRequest();
                    
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText)
            if(responseJson.error) {
                console.log(responseJson.message)
            } else {
                newUsername = responseJson[0].username
                renderUserLoginName(responseJson)
                getUserId(newUsername)
            }
        }
        
        xhr.onerror = function() {
            alert('Internal server error')
        }
    
        xhr.open("GET", `http://localhost:3000/apis/userLogin`)
        xhr.send();
    }

    renderUserLoginName = (datas) => {
        username.innerHTML = ""

        datas.forEach(data => {
            username.innerHTML += `
            <h2 class="color-font font-weight-bold text-center">Hello ${data.username}, please fill in your data below</h2>
            `
        })
    }

    getUserLogin()

    const getUserId = (username) => {
        const xhr = new XMLHttpRequest();
                
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if(responseJson.error) {
                console.log(responseJson.message);
            } else {
                userGameId = responseJson.id
            }
        }
        
        xhr.onerror = function() {
            alert('Internal server error')
        }
    
        xhr.open("GET", `http://localhost:3000/apis/userGame/${username}`);
        xhr.send();
    }


