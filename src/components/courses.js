import React from 'react'

const Courses = ({ course }) => {
  const renderCourse = () => {
    const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0)

    return (
      <>
        <h1>{course.name}</h1>
        {course.parts.map(item => <p key={item.id}>{item.name} {item.exercises}</p>)}
        <strong>Total exercises: {total}</strong>
      </>
    )
  }

  return (
    <>
      {renderCourse()}
    </>
  )
}

export default Courses
