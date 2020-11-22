console.log('Okeee')
const listUser = document.querySelector('#listUserGame')
const listBiodata = document.querySelector('#listUserBiodata')
const listHistory = document.querySelector('#listUserHistory')

const getAllUser = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText)
        if(responseJson.error) {
            console.log(responseJson.message)
        } else {
            renderAllUser(responseJson)
        }
    }
    xhr.onerror = function() {
        alert('Internal server error')
    }
    xhr.open("GET", "http://localhost:3000/apis/userGame")
    xhr.send()
}

const renderAllUser = (user) => {
    listUser.innerHTML = ""

    user.forEach(user => {
        listUser.innerHTML += `
        <tr>
            <th>${user.id}</th>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>Update</td>
            <td>Delete</td>
        </tr>
        `
    })
}

const getAllBiodata = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText)
        if(responseJson.error) {
            console.log(responseJson.message)
        } else {
            renderAllBiodata(responseJson)
        }
    }
    xhr.onerror = function() {
        alert('Internal server error')
    }
    xhr.open("GET", "http://localhost:3000/apis/userGameBiodata")
    xhr.send()
}

const renderAllBiodata = (biodata) => {
    listBiodata.innerHTML = ""

    biodata.forEach(biodata => {
        listBiodata.innerHTML += `
        <tr>
            <th>${biodata.id}</th>
            <td>${biodata.fullname}</td>
            <td>${biodata.addres}</td>
            <td>${biodata.gender}</td>
            <td>${biodata.age}</td>
            <td>${biodata.userGameId}</td>
            <td>Update</td>
            <td>Delete</td>
        </tr>
        `
    })
}

const getAllHistory = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText)
        if(responseJson.error) {
            console.log(responseJson.message)
        } else {
            renderAllHistory(responseJson)
        }
    }
    xhr.onerror = function() {
        alert('Internal server error')
    }
    xhr.open("GET", "http://localhost:3000/apis/userGameHistory")
    xhr.send()
}

const renderAllHistory = (history) => {
    listHistory.innerHTML = ""

    history.forEach(history => {
        listHistory.innerHTML += `
        <tr>
            <th>${history.id}</th>
            <td>${history.username}</td>
            <td>${history.playerChoice}</td>
            <td>${history.computerChoice}</td>
            <td>${history.result}</td>
            <td>${history.userGameId}</td>
            <td>Update</td>
            <td>Delete</td>
        </tr>
        `
    })
}

getAllUser()
getAllBiodata()
getAllHistory()

