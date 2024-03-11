import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import RegPage from './pages/RegPage/RegPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AuthPage></AuthPage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/reg' element={<RegPage></RegPage>}></Route>
      </Routes>
    </>
  )
}

export default App
