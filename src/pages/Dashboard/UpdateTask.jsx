/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Button, MenuItem, TextField } from '@mui/material'
import { useLoaderData } from 'react-router-dom'
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

const taskStatus = [
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

const UpdateTask = () => {
  const tasks = useLoaderData()
  // const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { _id, title, description, priority, status, deadline } = tasks

  const onSubmit = async (data) => {
    const updatedTask = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: data.status,
      deadline: data.deadline,
    }

    try {
      const response = await axiosSecure.patch(`/tasks/${_id}`, updatedTask)
      console.log(response.data)
      if (response.data.modifiedCount) {
        Swal.fire({
          title: 'Success!',
          text: 'Task Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/* <section className='container px-20 py-8 mx-auto my-20 '> */}
      <section className='max-w-3xl mx-auto '>
        <h1 className='text-4xl'>Update Task</h1>
        {/*  */}
        <section className='p-8'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <article className='flex flex-wrap gap-4'>
              <TextField
                id='task'
                label='Title'
                name='title'
                defaultValue={title}
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
                  defaultValue={description}
                  required
                  multiline
                  {...register('description', { required: true })}
                />
              </Box>

              <TextField
                type='date'
                id='deadline'
                // label='Deadline'
                name='deadline'
                defaultValue={deadline}
                required
                {...register('deadline', { required: true })}
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
                  id='outlined-select-currency'
                  select
                  label='Priority'
                  name='priority'
                  defaultValue={priority}
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
                  defaultValue={status}
                  required
                  {...register('status', { required: true })}
                >
                  {taskStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Button type='submit' variant='contained' endIcon={<SendIcon />}>
                Update Task
              </Button>
            </article>
          </form>
        </section>
      </section>
    </>
  )
}
export default UpdateTask
