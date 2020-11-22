console.log('Okeee')
const listUser = document.querySelector('#listUserGame')
const listBiodata = document.querySelector('#listUserBiodata')
const listHistory = document.querySelector('#listUserHistory')

const getAllUser = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const responseJson = JSON.parse(this.responseText);
        if(responseJson.error) {
            console.log(responseJson.message);
        } else {
            console.log(responseJson)
            renderAllUser(responseJson)
        }
    }
    xhr.onerror = function() {
        alert('Internal server error')
    }
    xhr.open("GET", "http://localhost:3000/apis/userGame");
    xhr.send();
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

getAllUser()

// listUser.innerHTML = 
// `
// <tr>
//     <th>1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>Update</td>
//     <td>Delete</td>
// </tr>
// `

listBiodata.innerHTML = 
`
<tr>
    <th>1</th>
    <td>Mark</td>
    <td>Dimana mana</td>
    <td>m</td>
    <td>20</td>
    <td>Update</td>
    <td>Delete</td>
</tr>
`

listHistory.innerHTML = 
`
<tr>
    <th>1</th>
    <td>Mark</td>
    <td>Rock</td>
    <td>Paper</td>
    <td>LOSSER</td>
    <td>Update</td>
    <td>Delete</td>
</tr>
`