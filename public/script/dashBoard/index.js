console.log('Okeee')
const listUser = document.querySelector('#listUserGame')
const listBiodata = document.querySelector('#listUserBiodata')
const listHistory = document.querySelector('#listUserHistory')

removeUser = (userId) => {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        getAllUser()
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }
    
    xhr.open("DELETE", `http://localhost:3000/apis/userGame/${userId}`);
    xhr.send();
}

removeBiodata = (biodataId) => {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        getAllBiodata()
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }
    
    xhr.open("DELETE", `http://localhost:3000/apis/userGameBiodata/${biodataId}`);
    xhr.send();
}

removeHistory = (historyId) => {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        getAllHistory()
    }
    
    xhr.onerror = function() {
        alert('Internal server error')
    }
    
    xhr.open("DELETE", `http://localhost:3000/apis/userGameHistory/${historyId}`);
    xhr.send();
}

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
            <td><p class="text-center mt-3"><button id="${user.id}" type="button" class="btn btn-danger button-delete-3"
            id="">Hapus</button></p></td>
        </tr>
        `
    })
    const btnDelete = document.querySelectorAll('.button-delete-3')
    btnDelete.forEach((del) => {
        del.addEventListener('click', (event) => {
            const userId = event.target.id
            removeUser(userId)
        })
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
            <td><p class="text-center mt-3"><button id="${biodata.id}" type="button" class="btn btn-danger button-delete-2"
            id="">Hapus</button></p></td>
        </tr>
        `
    })
    const btnDelete = document.querySelectorAll('.button-delete-2')
    btnDelete.forEach((del) => {
        del.addEventListener('click', (event) => {
            const biodataId = event.target.id
            removeBiodata(biodataId)
        })
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
            <td><p class="text-center mt-3"><button id="${history.id}" type="button" class="btn btn-danger button-delete"
            id="">Hapus</button></p></td>
        </tr>
        `
    })

    const btnDelete = document.querySelectorAll('.button-delete')
    btnDelete.forEach((del) => {
        del.addEventListener('click', (event) => {
            const historyId = event.target.id
            removeHistory(historyId)
        })
    })
}

getAllUser()
getAllBiodata()
getAllHistory()

