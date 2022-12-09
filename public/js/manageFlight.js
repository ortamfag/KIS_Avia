const isConfirmed = document.querySelectorAll('#isConfirmed');

isConfirmed.forEach(item => {
    if (item.innerHTML === 'No') {
        item.parentNode.style.backgroundColor = '#E9D3D4'
    } else if (item.innerHTML === 'Yes') {
        item.parentNode.style.backgroundColor = '#F2EDFF'
    }
})

// Фильтр по номеру полета
const flightNumberDropdown = document.getElementById('flightNumberDropdown')

// Фильтр по дате вылета
const outboundInput = document.getElementById('outboundInput')

// Фильтр по аэропортам вылета
const airportsFromDropdown = document.getElementById('AirportsFromDropdown')

// Фильтр по аэропортам вылета
const airportsToDropdown = document.getElementById('AirportsToDropdown')

function filterFlight() {
    let flightItem = document.querySelectorAll('.flightItem')
    let airportsFromDropdownValue = airportsFromDropdown.value 
    let airportsToDropdownValue = airportsToDropdown.value 
    let outboundInputValue = outboundInput.value 
    let flightNumberDropdownValue = flightNumberDropdown.value 

    flightItem.forEach((item) => {
        if (
            (item.children[0].innerHTML == outboundInputValue || outboundInputValue == '') &&
            (item.children[2].innerHTML == airportsFromDropdownValue || airportsFromDropdownValue == 'All') &&
            (item.children[3].innerHTML == airportsToDropdownValue || airportsToDropdownValue == 'All') &&
            (item.children[4].innerHTML == flightNumberDropdownValue || flightNumberDropdownValue == '')
        ) {
          item.style.display = "table-row";
        } else {
          item.style.display = "none";
        }
    })
}