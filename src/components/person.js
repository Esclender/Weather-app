import React from 'react'

const Person = ({ searched, numbers }) => {
  return (
    <ul>
    {
      searched.length === 0
        ? numbers.map(item => <li key={item.id}> {item.name} {item.phone} </li>)
        : searched.map(item => <li key={item.id}> {item.name} {item.phone} </li>)

    }
  </ul>
  )
}

export default Person
