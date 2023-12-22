/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import useGetTasks from '../../hooks/useGetTasks'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 100 },
  {
    id: 'deadline',
    label: 'Deadline',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'priority',
    label: 'Priority',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'edit',
    label: 'Edit',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'delete',
    label: 'Delete',
    minWidth: 170,
    align: 'right',
  },
]

export default function AllTaskTable() {
  const [tasks, loading, refetch] = useGetTasks()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const axiosSecure = useAxiosSecure()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete Task!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/tasks/${id}`)

          if (response.data.deletedCount > 0) {
            Swal.fire('Task Has Been Deleted')
            refetch()
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
  }

  return (
    <>
      <h1 className='py-4 text-4xl'>All Tasks</h1>
      <Paper
        sx={{ width: '100%', overflow: 'hidden' }}
        // sx={{ overflow: 'hidden' }}
        // className='container px-20 py-8 mx-auto my-20'
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'edit' ? (
                              <Link to={`/dashboard/updateTask/${row?._id}`}>
                                <button>Edit</button>
                              </Link>
                            ) : column.id === 'delete' ? (
                              <button onClick={() => handleDelete(row?._id)}>
                                Delete
                              </button>
                            ) : column.format && typeof value === 'number' ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={tasks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}
