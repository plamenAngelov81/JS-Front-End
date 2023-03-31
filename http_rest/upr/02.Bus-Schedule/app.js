function solve() {
    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')
    const spanElement = Array.from(document.getElementsByTagName('span'))[0]
    let base_url = 'http://localhost:3030/jsonstore/bus/schedule/'
    let nextStop = 'depot'
    let stopName = ''

    function depart() {
        departBtn.disabled = true
        arriveBtn.disabled = false
        fetch(`${base_url}${nextStop}`)
            .then((res) => res.json())
            .then((nextStopInfo) => {
                spanElement.textContent = `Next stop ${nextStopInfo.name}`
                nextStop = nextStopInfo.next
                stopName = nextStopInfo.name
            })
            .catch((err) => {
                spanElement.textContent = 'Error'
                departBtn.disabled = true
                arriveBtn.disabled = true
            })
    }

    async function arrive() {
        departBtn.disabled = false
        arriveBtn.disabled = true
        spanElement.textContent = `Arriving at ${stopName}`

    }

    return {
        depart,
        arrive
    };
}

let result = solve();