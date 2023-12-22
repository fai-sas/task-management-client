/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

// TaskList.js
import React from 'react'
import { useDrop } from 'react-dnd'
import Task from './Task'

const TaskList = ({ tasks, status, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDrop(item.index, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  const backgroundColor = isOver ? '#ecf0f1' : 'white'

  return (
    <div ref={drop} style={{ backgroundColor }}>
      <h2>{status}</h2>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </div>
  )
}

export default TaskList
