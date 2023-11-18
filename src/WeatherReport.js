import React, { useState } from 'react'

const WeatherReport = ({ weatherData }) => {
    const [city, setCity] = useState('');
    const [result, setResult] = useState({})
    const [error, setError] = useState('')
    const [region, setRegion] = useState('')

    // const searchHandler = (e) => {
    //     e.preventDefault()
    //     if (city) {
    //         try {
    //             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(response => response.json()).then(data => {
    //                 // console.log(data)
    //                 let kelvin = data.main.temp
    //                 let celsius = Math.round(kelvin - 273.15)
    //                 let humidity = data.main.humidity
    //                 let windspeed = data.wind.speed
    //                 setResult(
    //                     {
    //                         Temperature: celsius,
    //                         Humidity: humidity,
    //                         windSpeed: windspeed
    //                     }
    //                 )
    //                 setRegion(city)
    //                 // setCity('')
    //                 setError('')
    //             })
    //             // if (!city) {
    //             //     throw new Error("data not found")
    //             // }
    //         }
    //         catch (error) {
    //             console.log(error + "sd")
    //             setResult({})
    //             setError(`${city} not found`)
    //         }
    //     }
    //     else {
    //         setResult({})
    //     }
    // }

    const searchHandler = (e) => {
        e.preventDefault()
        if (city) {
            try {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(response => response.json()).then(data => {
                    // console.log(data)
                    let kelvin = data.main.temp
                    let celsius = Math.round(kelvin - 273.15)
                    let humidity = data.main.humidity
                    let windspeed = data.wind.speed
                    setResult(
                        {
                            Temperature: celsius,
                            Humidity: humidity,
                            windSpeed: windspeed
                        }
                    )
                    setRegion(city)
                    // setCity('')
                    setError('')
                })
                // if (!city) {
                //     throw new Error("data not found")
                // }
            }
            catch (error) {
                console.log(error + "sd")
                setResult({})
                setError(`${city} not found`)
            }
        }
        else {
            setResult({})
        }
    }
    return (
        <div>
            <form onClick={searchHandler} style={{ textAlign: "center" }}>
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)}></input>{'  '}
                <input type='submit' value='Search'></input>
            </form>
            {
                Object.keys(result).length > 0 ? (

                    <div>
                        <div>The Weather Report of {region} : </div>
                        <div>Temperature: {result.Temperature} °C</div>
                        <div>Humidity: {result.Humidity} g/m3</div>
                        <div>Wind Speeed: {result.windSpeed} m/s</div>
                    </div>
                ) : (
                    error.length > 0 ? <div>{error}</div> : <div><h4>No input in the city field</h4></div>
                )
            }
        </div>
    )
}

export default WeatherReport
