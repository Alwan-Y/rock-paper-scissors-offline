console.log('Okee')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('.buton')

button.addEventListener('click', () => {
    console.log(username.value)
    console.log(password.value)
})