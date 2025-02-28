import { Routes, Route } from 'react-router-dom';
import './App.css'
import { LogIn } from '../pages/index'
import { SignUp } from '../pages/index'

function App() {

  return (
    <>
      
      <div>
      <Routes>
        <Route path="/" element={<LogIn />} />  {/* Login page route */}
        <Route path="/login" element={<LogIn />} /> {/* Login page route */}
        <Route path="/signup" element={<SignUp />} /> {/* Signup page route */}
      </Routes>
    </div>
    </>
  )
}

export default App
