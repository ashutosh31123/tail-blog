import Navbar from "../components/Navbar"
import Home from "../pages/home"
import Footer from "../components/footer"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App