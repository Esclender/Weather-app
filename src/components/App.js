import React, { useEffect, useState } from 'react'
import '../app.css'
import Item from './ItemsList'
import Detailed from './DetailCountry'

// import axios from 'axios'

const App = ({ api, api2 }) => {
  const [input, setInput] = useState('')
  const [country, setCountry] = useState([])

  useEffect(() => {
    api2(`/${input.toLowerCase()}`)
      .then(res => {
        setCountry(res.data)
      })
  }, [input])

  const filter = (e) => {
    setInput(e.target.value)
    console.log(process.env.REACT_APP_API_KEY_WEATHER)
  }

  return (
    <>

    <div>
      <input onChange={filter} value={input} />

      <ul>
        {
          country.length > 10
            ? <span>Too many searchs</span>
            : country.length === 1
              ? <Detailed country={country[0]} api={api} />
              : country.map(item => <Item item={item} key={item.area} />)
        }
      </ul>

    </div>

    </>
  )
}

export default App
