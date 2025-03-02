import './App.css'
import { LogIn } from '../pages/index'
import { SignUp } from '../pages/index'
import { Timer } from '../pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/log-in',
    element: <LogIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/timer',
    element: <Timer />,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
