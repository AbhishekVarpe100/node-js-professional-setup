import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import NavBar from './components/NavBar'
import AddProduct from "./components/AddProduct"
import AllProducts from "./components/AllProducts"
function App() {
  

  return (
    <>

    <Router>
      <NavBar/> 
      <Routes>
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/" element={<AllProducts></AllProducts>}></Route>
      </Routes>
    </Router>

    </>
  )
}

export default App
