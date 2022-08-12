
const url = 'http://localhost:7171/UVT/subroutine/GET.STATION'


// export const getStations = () => {
//    return fetch('http://localhost:7000/stations')
// }

// export const getStationData = () => {
//     return fetch('http://localhost:8000/out_param_2')
// }

//The fetch calls we will use with MVIS:

export const getStations = () => {
    return fetch(url, {
        Method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        Body: {}
    })
 }

export const getStationData = (stationId) => {
    return fetch(url, {
        Method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        Body: {
            "in_param_1": stationId
        }
    })
}
