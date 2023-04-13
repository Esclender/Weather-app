import React from 'react'

const Input = ({ fun, value, name }) => {
  return (
    <>
      {name}: <input onChange={fun} value={value} maxLength={15} />
    </>
  )
}

export default Input
