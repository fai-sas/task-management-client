/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRoute from '../router/PrivateRoute'
import DashboardLayout from '../layout/DashboardLayout'
import AddTask from '../pages/Dashboard/AddTask'
import AllTasks from '../pages/Dashboard/AllTasks'
import UpdateTask from '../pages/Dashboard/UpdateTask'
import Contact from '../pages/Contact'
import Teams from '../pages/Teams'
import DashboardTest from '../pages/Dashboard/DashboardTest'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/teams',
        element: <Teams />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            {/* <Dashboard /> */}
            <DashboardTest />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-tasks',
        element: (
          <PrivateRoute>
            <AllTasks />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-task',
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/updateTask/:id',
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://task-management-server-flame.vercel.app/tasks/${params.id}`
          ),
      },
    ],
  },

  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default Route
