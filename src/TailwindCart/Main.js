import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

function Main() {
  return (
    <div>
        <Provider store={store}>
        <RouterProvider router={router}/>

        </Provider>
    </div>
  )
}

export default Main