import './App.css'
import { LogIn } from '../pages/index'
import { SignUp } from '../pages/index'
import { Timer } from '../pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { TimerProvider } from '../widgets/index.tsx';

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
      <TimerProvider>
        <RouterProvider router={router} />
      </TimerProvider>
  )
}

export default App
