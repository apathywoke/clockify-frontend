import './App.css'
import { LogIn } from '../pages/index'
import { SignUp } from '../pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/log-in',
    element: <LogIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
