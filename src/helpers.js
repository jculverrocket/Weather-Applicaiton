const url = 'http://localhost:7171/UVT/subroutine/GET.STATION'

export const getStations = () => {
    return fetch(url +'S', {
        method: 'POST',
        headers: { 
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({})
    })
 }

export const getStationData = (stationId) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"in_param_1": stationId})
    })
}
