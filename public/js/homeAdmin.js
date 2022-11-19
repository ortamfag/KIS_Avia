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

const officesDropdown = document.getElementById('officesDropdown')

function checkOffice() {
    let officesDropdownValue = officesDropdown.value 
    const allOffice = document.querySelectorAll('#offices')
    console.log(officesDropdownValue)

    for (let i = 0; i < allOffice.length; i++) {
        allOffice[i].parentNode.style.display = 'table-row'
    }

    switch(officesDropdownValue) {
        case 'All offices':
            for (let i = 0; i < allOffice.length; i++) {
                allOffice[i].parentNode.style.display = 'table-row'
            }
            break

        case 'Abu dhabi':
            for (let i = 0; i < allOffice.length; i++) {
                if (allOffice[i].innerHTML != officesDropdownValue) {
                    allOffice[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'Cairo':
            for (let i = 0; i < allOffice.length; i++) {
                if (allOffice[i].innerHTML != officesDropdownValue) {
                    allOffice[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'Bahrain':
            for (let i = 0; i < allOffice.length; i++) {
                if (allOffice[i].innerHTML != officesDropdownValue) {
                    allOffice[i].parentNode.style.display = 'none'
                }
            }
            break
            
        case 'Doha':
            for (let i = 0; i < allOffice.length; i++) {
                if (allOffice[i].innerHTML != officesDropdownValue) {
                    allOffice[i].parentNode.style.display = 'none'
                }
            }
            break 
            
        case 'Riyadh':
            for (let i = 0; i < allOffice.length; i++) {
                if (allOffice[i].innerHTML != officesDropdownValue) {
                    allOffice[i].parentNode.style.display = 'none'
                }
            }
            break    

        
    }
} 