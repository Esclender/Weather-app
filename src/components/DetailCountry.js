import React, { useEffect, useState } from 'react'

const Detailed = ({ country, api }) => {
  const cName = country.name.common
  const [weather, setWeather] = useState({})

  useEffect(() => {
    api('/current.json', {
      params: {
        q: cName
      }
    })
      .then(res => {
        const data = res.data.current
        setWeather({
          icon: data.condition.icon,
          prb: data.condition.text,
          temp: data.temp_c
        })
      })
  }, [cName])

  return (
    <div className='containerDetailed' >
      <h2>{cName}</h2>

      <p><strong>Capital</strong> {country.capital[0]}</p>

      <p><strong>Poputlation</strong> {country.population}</p>

      <h2>Languages</h2>

      <ul>
        {
          Object.values(country.languages).map(item => <li key={item}>{item}</li>)
        }
      </ul>

      <img src={country.flags.png} />

      <div className='weather-section' >
        <h2>Weather info </h2>
        <span><img src={weather.icon}/></span>
        <p>The actual temp is {weather.temp} celcius</p>

      </div>

    </div>
  )
}

export default Detailed
