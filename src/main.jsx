/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import Route from './router/Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <RouterProvider router={Route}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </DndProvider>
  </React.StrictMode>
)
