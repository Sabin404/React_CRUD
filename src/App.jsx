import './App.css'
import Home from './pages/home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Edit from './pages/editProduct/Edit'
import AddProduct from './pages/addProduct/AddProduct'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='editproduct/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
