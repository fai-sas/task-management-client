/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React from 'react'
import { useDrag } from 'react-dnd'

const Task = ({ task, index, onDragEnd }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { index, status: task.status },
  })

  const opacity = isDragging ? 0.5 : 1

  return (
    <div ref={drag} style={{ opacity }}>
      {task.title}
    </div>
  )
}

export default Task
