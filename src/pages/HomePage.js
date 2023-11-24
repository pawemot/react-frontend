import React, { useEffect, useState } from 'react'
import WithSubnavigation from '../components/Navigation' 
import httpClient from '../utils/httpClient'
export default function HomePage () {
    const [travels, setTravels] = useState([])
    const [weather, setWeather] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        getData()
    },[])
    const getData = async () => {
        const {data} = await httpClient.get("/dashboard")
        console.log(data)
    }
  return (
    <div>
    <WithSubnavigation/>
    <h1>Strona startowa</h1>
    </div>
  )
}
