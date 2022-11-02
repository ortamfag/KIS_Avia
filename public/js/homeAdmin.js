const roleID = document.querySelectorAll('#RoleID')
const activeUser = document.querySelectorAll('#activeUser')

roleID.forEach(item => {
    if (item.innerHTML === 'administrator') {
        item.parentNode.style.backgroundColor = '#F2EDFF'
    }
})

activeUser.forEach(item => {
    if (item.innerHTML === '0') {
        item.parentNode.style.backgroundColor = '#E9D3D4'
    }
})