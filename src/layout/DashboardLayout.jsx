/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Dashboard
