import Login from "./pages/Login"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"

function App() {
  return (
    <div className=" dark:text-darkTheme-lightGrayishBlue font-mono">
      <Routes>
      <Route path="/"  />
        <Route index element={<Home />} />
        <Route path="login"  element={<Login />} />
      </Routes>
    </div>
   
    
  )
}

export default App
