import React, { useState } from 'react'
import Detailed from './DetailCountry'

const ContDetail = ({ c, f }) => {
  return (
    <div>
      <Detailed country={c} />
      <button onClick={f} >hide</button>
    </div>
  )
}

const Item = ({ item, key }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <li className='item' key={key} >
        <span>
          <img src={item.flags.png}></img>
        </span>
        {item.name.common}
        {
          !show
            ? <button onClick={() => setShow(true)} >show</button>
            : <span></span>
        }
      </li>

      {
        show
          ? <ContDetail c={item} f={() => setShow(false)} />
          : <span></span>
      }

    </>

  )
}

export default Item
