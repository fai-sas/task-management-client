/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import SendIcon from '@mui/icons-material/Send'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useAuth from '../../hooks/useAuth'

const priorities = [
  {
    value: 'Low',
  },
  {
    value: 'Moderate',
  },
  {
    value: 'High',
  },
]

const status = [
  {
    value: 'To-do',
  },
  {
    value: 'Ongoing',
  },
  {
    value: 'Completed',
  },
]

const AddTask = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const tasks = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: data.status,
      deadline: data.deadline,
      employeeName: user.displayName,
      email: user.email,
      userId: user.uid,
    }

    console.log(tasks)

    try {
      console.log(tasks)
      axiosSecure.post('/tasks', tasks).then((res) => {
        if (res.data.insertedId) {
          console.log('task added to the database')
          reset()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task Added Successfully',
            showConfirmButton: false,
            // timer: 1500,
          })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    // <section className='container px-20 py-8 mx-auto my-20 '>
    <section className='max-w-3xl p-8 mx-auto '>
      <h1 className='py-4 text-4xl'>Add Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* row 1 */}
        <article className='flex flex-wrap gap-4'>
          <div className='space-y-8 '>
            <TextField
              id='task'
              label='Title'
              name='title'
              required
              {...register('title', { required: true })}
            />
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { width: '25ch' },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='description'
                label='Description'
                name='description'
                placeholder='Placeholder'
                required
                multiline
                {...register('description', { required: true })}
              />
            </Box>
          </div>
          {/* end of row 1 */}

          {/* row 2 */}
          <div className='space-y-8'>
            <TextField
              type='date'
              id='deadline'
              // label='Deadline'
              name='deadline'
              required
              {...register('deadline', { required: true })}
            />

            <Box
              // component='form'
              sx={{
                '& .MuiTextField-root': { width: '25ch' },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-select-currency'
                select
                label='Priority'
                name='priority'
                defaultValue='Low'
                required
                {...register('priority', { required: true })}
              >
                {priorities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>
          {/* end of row 2 */}

          {/* row 3 */}
          <div>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { width: '25ch' },
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-select-currency'
                select
                label='Status'
                name='status'
                defaultValue='To-do'
                required
                {...register('status', { required: true })}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>
          {/* end of row 3 */}
        </article>
        <div className='my-8 '>
          <Button
            className='w-full'
            type='submit'
            variant='contained'
            endIcon={<SendIcon />}
          >
            Add Task
          </Button>
        </div>
      </form>
    </section>
  )
}

export default AddTask
