import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Home from './components/Home'

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 p-8 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App;
