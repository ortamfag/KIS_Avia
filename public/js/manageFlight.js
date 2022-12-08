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

function checkFlightNumber() {
    let flightNumberDropdownValue = flightNumberDropdown.value 
    const allFlightNumber = document.querySelectorAll('#flightNumbers')

    for (let i = 0; i < allFlightNumber.length; i++) {
        allFlightNumber[i].parentNode.style.display = 'table-row'
    }

    for (let i = 0; i < allFlightNumber.length; i++) {
        if (allFlightNumber[i].innerHTML != flightNumberDropdownValue) {
            allFlightNumber[i].parentNode.style.display = 'none'
        }
    }
} 

// Фильтр по дате вылета

const outboundInput = document.getElementById('outboundInput')

function checkOutbound() {
    let outboundInputValue = outboundInput.value 
    const allOutbound = document.querySelectorAll('#outbound')

    for (let i = 0; i < allOutbound.length; i++) {
        allOutbound[i].parentNode.style.display = 'table-row'
    }

    for (let i = 0; i < allOutbound.length; i++) {
        if (allOutbound[i].innerHTML != outboundInputValue) {
            allOutbound[i].parentNode.style.display = 'none'
        }
    }
} 

// Сортировка по времени

// Фильтр по аэропортам вылета

const airportsFromDropdown = document.getElementById('AirportsFromDropdown')

function checkAirportsFrom() {
    let airportsFromDropdownValue = airportsFromDropdown.value 
    const allAirportsFrom = document.querySelectorAll('#airportsFrom')

    for (let i = 0; i < allAirportsFrom.length; i++) {
        allAirportsFrom[i].parentNode.style.display = 'table-row'
    }

    switch(airportsFromDropdownValue) {
        case 'All':
            for (let i = 0; i < allAirportsFrom.length; i++) {
                allAirportsFrom[i].parentNode.style.display = 'table-row'
            }
            break

        case 'AUH':
            for (let i = 0; i < allAirportsFrom.length; i++) {
                if (allAirportsFrom[i].innerHTML != airportsFromDropdownValue) {
                    allAirportsFrom[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'CAI':
            for (let i = 0; i < allAirportsFrom.length; i++) {
                if (allAirportsFrom[i].innerHTML != airportsFromDropdownValue) {
                    allAirportsFrom[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'BAH':
            for (let i = 0; i < allAirportsFrom.length; i++) {
                if (allAirportsFrom[i].innerHTML != airportsFromDropdownValue) {
                    allAirportsFrom[i].parentNode.style.display = 'none'
                }
            }
            break
            
        case 'ADE':
            for (let i = 0; i < allAirportsFrom.length; i++) {
                if (allAirportsFrom[i].innerHTML != airportsFromDropdownValue) {
                    allAirportsFrom[i].parentNode.style.display = 'none'
                }
            }
            break 
            
        case 'DOH':
            for (let i = 0; i < allAirportsFrom.length; i++) {
                if (allAirportsFrom[i].innerHTML != airportsFromDropdownValue) {
                    allAirportsFrom[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'RUH':
            for (let i = 0; i < allAirportsFrom.length; i++) {
                if (allAirportsFrom[i].innerHTML != airportsFromDropdownValue) {
                    allAirportsFrom[i].parentNode.style.display = 'none'
                }
            }
            break
    }
} 

// Фильтр по аэропортам вылета

const airportsToDropdown = document.getElementById('AirportsToDropdown')

function checkAirportsTo() {
    let airportsToDropdownValue = airportsToDropdown.value 
    const allAirportsTo = document.querySelectorAll('#airportsTo')

    for (let i = 0; i < allAirportsTo.length; i++) {
        allAirportsTo[i].parentNode.style.display = 'table-row'
    }

    switch(airportsToDropdownValue) {
        case 'All':
            for (let i = 0; i < allAirportsTo.length; i++) {
                allAirportsTo[i].parentNode.style.display = 'table-row'
            }
            break

        case 'AUH':
            for (let i = 0; i < allAirportsTo.length; i++) {
                if (allAirportsTo[i].innerHTML != airportsToDropdownValue) {
                    allAirportsTo[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'CAI':
            for (let i = 0; i < allAirportsTo.length; i++) {
                if (allAirportsTo[i].innerHTML != airportsToDropdownValue) {
                    allAirportsTo[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'BAH':
            for (let i = 0; i < allAirportsTo.length; i++) {
                if (allAirportsTo[i].innerHTML != airportsToDropdownValue) {
                    allAirportsTo[i].parentNode.style.display = 'none'
                }
            }
            break
            
        case 'ADE':
            for (let i = 0; i < allAirportsTo.length; i++) {
                if (allAirportsTo[i].innerHTML != airportsToDropdownValue) {
                    allAirportsTo[i].parentNode.style.display = 'none'
                }
            }
            break 
            
        case 'DOH':
            for (let i = 0; i < allAirportsTo.length; i++) {
                if (allAirportsTo[i].innerHTML != airportsToDropdownValue) {
                    allAirportsTo[i].parentNode.style.display = 'none'
                }
            }
            break

        case 'RUH':
            for (let i = 0; i < allAirportsTo.length; i++) {
                if (allAirportsTo[i].innerHTML != airportsToDropdownValue) {
                    allAirportsTo[i].parentNode.style.display = 'none'
                }
            }
            break
    }
} 

function filterFlight() {
    let flightItem = document.querySelectorAll('.flightItem')
    let airportsFromDropdownValue = airportsFromDropdown.value 
    let airportsToDropdownValue = airportsToDropdown.value 
    let outboundInputValue = outboundInput.value 
    let flightNumberDropdownValue = flightNumberDropdown.value 

    flightItem.forEach((item) => {
        if ((item.children[0].innerHTML == outboundInputValue) && (item.children[2].innerHTML === airportsFromDropdownValue) && (item.children[3].innerHTML === airportsToDropdownValue) && (item.children[4].innerHTML === flightNumberDropdownValue)) {
            item.parentNode.parentNode.style.display = 'table-row'
        } else {
            item.parentNode.parentNode.style.display = 'none'
            console.log(item)
        }

        console.log(item.parentNode.parentNode)
        console.log(item.children[0].innerHTML == outboundInputValue)
        console.log(item.children[2].innerHTML === airportsFromDropdownValue)
        console.log(item.children[3].innerHTML === airportsToDropdownValue)
        console.log(item.children[4].innerHTML === flightNumberDropdownValue)
    })
}