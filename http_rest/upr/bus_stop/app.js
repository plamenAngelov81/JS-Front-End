function getInfo() {
    let BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
    const inputElement = document.getElementById('stopId')
    let stopId = inputElement.value
    const busStopName = document.getElementById('stopName')
    const ul = document.getElementById('buses')

    ul.innerHTML = ''

    fetch(`${BASE_URL}${stopId}`)
        .then((res) => res.json())
        .then((busInfo => {
            let busStop = busInfo.name
            let bussesInUSe = busInfo.buses

            busStopName.textContent = busStop
            for (const buss in bussesInUSe) {
                let li = document.createElement('li')
                li.textContent = `Bus ${buss} arrives in ${bussesInUSe[buss]} minutes`
                ul.appendChild(li)
            }

        }))
        .catch((err) => {
            busStopName.textContent = 'Error'
        })
}