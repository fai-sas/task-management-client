/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react'
import { useDrag } from 'react-dnd'

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      style={{
        border: '1px solid',
        padding: '1rem',
        margin: '0.5rem',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {task.title}
    </div>
  )
}

export default Task
