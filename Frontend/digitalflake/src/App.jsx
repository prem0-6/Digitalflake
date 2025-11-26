import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </Router>
  )
}

export default App;
