import "./App.css";
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import { useSelector } from "react-redux";
import NavbarComponent from "./componets/Navbar";
import { Products } from "./componets/Products";
import { ProductDetail } from "./componets/ProductDetail";
import { Cart } from "./componets/Cart";
import { UserRegister } from "./User/UserRegister";
import { UserLogin } from "./User/UserLogin";
import { AdminLogin } from "./componets/adminLogin";
import { AdminDashboard } from "./componets/adminDashboard";
import { UserComponent } from "./componets/UserComponent";


function App() {
  const { productss, status } = useSelector((state) => state.products);
  const {cartitem,quantity}=useSelector((state)=>state.cartItems)
  const {count}=useSelector((state)=>state.counter)
  const {user}=useSelector((state)=>state.users)
  const {adminLogin}=useSelector((state)=>state.AdminLogin)
  const {userLogin}=useSelector((state)=>state.Login)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarComponent user={user} userLogin={userLogin} />}>
            <Route path="/products" element={<Products productss={productss} status={status} cartitem={cartitem}  userLogin={userLogin} />}></Route>
            <Route path='/cart' element={<Cart user={user} count={count} quantity={quantity} userLogin={userLogin}  />}></Route>
            <Route path="/product/:id" element={<ProductDetail productss={productss} cartitem={cartitem} count={count}  />} />
          
          </Route>
          <Route path="/user/register" element={<UserRegister user={user}  />}/>
            <Route index  element={<UserLogin user={user} />}/>
            <Route path="/admin/login" element={<AdminLogin adminLogin={adminLogin} />}/>
            <Route path="/admin" element={<AdminDashboard  />}/>
            <Route path="/admin/user/:id" element={<UserComponent  />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;