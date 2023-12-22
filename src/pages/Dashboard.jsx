/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import useAuth from '../hooks/useAuth'
import useGetTasks from '../hooks/useGetTasks'

const Dashboard = () => {
  const { user } = useAuth()
  const [tasks, loading, refetch] = useGetTasks()

  const countTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status).length
  }

  return (
    <section className='max-w-3xl p-8 mx-auto '>
      <h1 className='text-4xl font-bold'>
        You have total {tasks.length} number of tasks available
      </h1>

      {/*  */}
      <article className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='w-fit rounded-[25px] bg-white p-8 aspect'>
          <div className='h-12'>
            <svg
              className='h-full fill-white stroke-blue-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
              />
            </svg>
          </div>
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
        {/*  */}
        <div className='w-fit rounded-[25px] bg-white p-8 aspect'>
          <div className='h-12'>
            <svg
              className='h-full fill-white stroke-blue-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
              />
            </svg>
          </div>
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
        {/*  */}
        <div className='w-fit rounded-[25px] bg-white p-8 aspect'>
          <div className='h-12'>
            <svg
              className='h-full fill-white stroke-blue-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
              />
            </svg>
          </div>
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
        {/*  */}
      </article>
    </section>
  )
}
export default Dashboard

// import React, { useState, useEffect } from 'react'
// import useAuth from '../hooks/useAuth'
// import useGetTasks from '../hooks/useGetTasks'
// import TaskList from '../components/TaskList'

// const Dashboard = () => {
//   const { user } = useAuth()
//   const [tasks, loading, refetch] = useGetTasks()

//   const [taskList, setTaskList] = useState({
//     'To-do': [],
//     Ongoing: [],
//     Completed: [],
//   })

//   useEffect(() => {
//     // Initial task categorization
//     if (!loading && tasks.length > 0 && taskList['To-do'].length === 0) {
//       const categorizedTasks = tasks.reduce(
//         (acc, task) => {
//           acc[task.status].push(task)
//           return acc
//         },
//         { 'To-do': [], Ongoing: [], Completed: [] }
//       )

//       setTaskList(categorizedTasks)
//     }
//   }, [loading, tasks, taskList]) // Only include loading and tasks as dependencies

//   // Handle drop event
//   const handleDrop = (index, newStatus) => {
//     const draggedTask = taskList['Ongoing'][index]
//     const updatedTaskList = { ...taskList }

//     // Remove task from the old status
//     updatedTaskList[draggedTask.status].splice(index, 1)

//     // Add task to the new status
//     draggedTask.status = newStatus
//     updatedTaskList[newStatus].push(draggedTask)

//     setTaskList(updatedTaskList)
//   }

//   return (
//     <section className='max-w-3xl p-8 mx-auto'>
//       <h1 className='text-4xl font-bold'>
//         You have a total of {tasks.length} tasks available
//       </h1>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <TaskList
//           tasks={taskList['To-do']}
//           status='To-do'
//           onDrop={handleDrop}
//         />
//         <TaskList
//           tasks={taskList['Ongoing']}
//           status='Ongoing'
//           onDrop={handleDrop}
//         />
//         <TaskList
//           tasks={taskList['Completed']}
//           status='Completed'
//           onDrop={handleDrop}
//         />
//       </div>
//     </section>
//   )
// }

// export default Dashboard
