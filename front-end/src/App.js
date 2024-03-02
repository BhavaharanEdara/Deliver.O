import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './Components/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Products from './Pages/Products'
import WhishList from "./Pages/WhishList"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp" 
import ForgotPassword from "./Pages/ForgotPassword"
import SingleProduct from "./Pages/SingleProduct"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import AddProduct from "./Pages/AddProduct"
import Profile from "./Pages/Profile"
import AdminLayout from "./Components/AdminLayout"
import Dashboard from "./Pages/Dashboard"
import Enquires from "./Pages/Enquires"
import AdminOrders from "./Pages/AdminOrders"
import Addcolor from "./Pages/Addcolor"
import Customers from "./Pages/Customers"
import SingleCustomer from "./Pages/SingleCustomer"
import ProductList from "./Pages/product-list"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:searchKey' element={<Products/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
            <Route path='/wishlist' element={<WhishList/>}/>
            <Route path='/about' element={<About/>}/> 
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout/:amount' element={<Checkout/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='/admin' element = {<Dashboard/>} />
            <Route path='/admin/enquiries' element={<Enquires/>}/>
            <Route path='/admin/orders' element={<AdminOrders/>}/>
            <Route path='/admin/product' element={<AddProduct/>}/>
            <Route path='/admin/add-color' element={<Addcolor/>}/>
            <Route path='/admin/customers' element={<Customers/>}/>
            <Route path='/admin/customers/:id' element={<SingleCustomer/>}/>
            <Route path="/admin/product-list" element={<ProductList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{/**            
 */}