import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Exapmle from './components/Check'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  headers: {
    Key: process.env.REACT_APP_API_KEY_WEATHER,
    'Content-Type': 'application/json;charset=utf-8'
  }
})

const api2 = axios.create({
  baseURL: 'https://restcountries.com/v3.1/name',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

export const api3 = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
const app = () => {
  root.render(
    <React.StrictMode>
      <App api={api} api2={api2} />
      <hr />

      <Exapmle />
    </React.StrictMode>
  )
}

app()

export default api
