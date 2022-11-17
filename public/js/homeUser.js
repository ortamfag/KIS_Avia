let positionOfTimeSpend
for (let i = 0; i <= cookieParse.length - 1; i++) {
    if (cookieParse[i].includes('TimeSpend')) {
        positionOfTimeSpend = i //определение куки, хранящей информацию о краше
    }
}

document.getElementById('user-stat-time').innerHTML = cookieParse[positionOfTimeSpend].split('=')[1]