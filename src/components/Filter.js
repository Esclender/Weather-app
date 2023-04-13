import React, { useState } from 'react'

const Filter = ({ origin, changer }) => {
  const [filter, setFilter] = useState('')

  const search = (e) => {
    setFilter(e.target.value)

    const results = origin.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

    if (e.target.value === '') {
      changer([])
    } else {
      changer([...results])
    }
  }

  return (
    <>
    <div>
      Filter: <input onChange={search} value={filter} />
    </div>

    </>
  )
}

export default Filter
