import React, { useState } from 'react'
import { emptyInputs } from '../project.module'

const Form = ({ info, act }) => {
  const [newTitle, setTitle] = useState([])

  const inputChange = (e, i) => {
    const arr = newTitle
    arr[i] = e.target.value

    setTitle([...arr])
  }

  const addNote = (e) => {
    e.preventDefault()

    const newCourse = [...act]
    const newItem = {
      name: newTitle[0],
      id: 3,
      parts: [
        {
          name: newTitle[1],
          exercises: 10,
          id: 1
        },
        {
          name: newTitle[2],
          exercises: 7,
          id: 2
        }
      ]
    }

    newCourse.push(newItem)
    info([...newCourse])
    setTitle(emptyInputs())
  }

  return (
    <>

      <form>
        <label>Title</label>
        <input className='input' onChange={(e) => inputChange(e, 0)} value={newTitle[0]} />

        <label>Sub1</label>
        <input className='input' onChange={(e) => inputChange(e, 1)} value={newTitle[1]} />

        <label>Sub2</label>
        <input className='input' onChange={(e) => inputChange(e, 2)} value={newTitle[2]} />

        <button onClick={addNote} type='submit'>Submit</button>
      </form>

    </>
  )
}

export default Form
