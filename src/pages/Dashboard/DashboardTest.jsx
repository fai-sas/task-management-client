/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import useAuth from '../../hooks/useAuth'
import useGetTasks from '../../hooks/useGetTasks'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const TaskComponent = ({ task }) => {
  return (
    <div className='p-4 my-4 bg-white rounded-lg shadow-md'>
      <h3 className='text-xl font-semibold'>{task.title}</h3>
      <p className='text-gray-500'>{task.description}</p>
      <p className='mt-2 text-gray-700'>
        Status: {task.status} | Priority: {task.priority}
      </p>
      <p className='mt-2 text-gray-700'>Deadline: {task.deadline}</p>
    </div>
  )
}

const Dashboard = () => {
  const { user } = useAuth()
  const [tasks, loading, refetch] = useGetTasks()
  const axiosSecure = useAxiosSecure()

  const countTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status).length
  }

  const onDragEnd = async (result) => {
    if (!result.destination) return

    const updatedTasks = [...tasks]
    const draggedTask = updatedTasks[result.source.index]
    draggedTask.status = result.destination.droppableId

    try {
      await axiosSecure.patch(`/tasks/${draggedTask._id}`, {
        status: result.destination.droppableId,
      })

      refetch()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className='max-w-3xl p-8 mx-auto '>
        <h1 className='text-4xl font-bold'>
          You have total {tasks.length} number of tasks available
        </h1>

        <article className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {/* To-do tasks */}
          <Droppable droppableId='todo'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className='w-fit rounded-[25px] bg-white p-8 aspect'>
                  <div className='h-12'></div>
                  <div className='my-2'>
                    <h2 className='text-4xl font-bold'>
                      <span>{countTasksByStatus('To-do')}</span>
                    </h2>
                  </div>
                  <div>
                    <p className='mt-2 font-sans text-base font-medium text-gray-500'>
                      Jobs To Do
                    </p>
                  </div>
                </div>
                {tasks
                  .filter((task) => task.status === 'To-do')
                  .map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskComponent task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId='ongoing'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className='w-fit rounded-[25px] bg-white p-8 aspect'>
                  <div className='h-12'></div>
                  <div className='my-2'>
                    <h2 className='text-4xl font-bold'>
                      <span>{countTasksByStatus('Ongoing')}</span>
                    </h2>
                  </div>
                  <div>
                    <p className='mt-2 font-sans text-base font-medium text-gray-500'>
                      Ongoing Jobs
                    </p>
                  </div>
                </div>
                {tasks
                  .filter((task) => task.status === 'Ongoing')
                  .map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskComponent task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId='completed'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className='w-fit rounded-[25px] bg-white p-8 aspect'>
                  <div className='h-12'></div>
                  <div className='my-2'>
                    <h2 className='text-4xl font-bold'>
                      <span>{countTasksByStatus('Completed')}</span>
                    </h2>
                  </div>
                  <div>
                    <p className='mt-2 font-sans text-base font-medium text-gray-500'>
                      Completed Jobs
                    </p>
                  </div>
                </div>
                {tasks
                  .filter((task) => task.status === 'Completed')
                  .map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskComponent task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </article>
      </section>
    </DragDropContext>
  )
}

export default Dashboard
