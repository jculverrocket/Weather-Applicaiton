
const url = 'http://dendevjmc01.dev.rocketsoftware.com:7171/UVT/subroutine/GET.STATION'


// export const getStations = () => {
//    return fetch('http://localhost:7000/stations')
// }

// export const getStationData = () => {
//     return fetch('http://localhost:8000/out_param_2')
// }

//The fetch calls we will use with MVIS:

export const getStations = () => {
    return fetch(url + 'S', {
        method: 'POST',
        mode: 'no-cors',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
 }

export const getStationData = (stationId) => {
    return fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "in_param_1": stationId
        })
    })
}
