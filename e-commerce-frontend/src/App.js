import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import HomePage from './pages/HomePage.js';
import PageNotFound from './pages/PageNotFound.js';
import Contact from './pages/Contact.js';
import Register from './Components/Auth/Register.js';
import Dashboard from './pages/user/Dashboard.js';
import AdminRoute from './Components/Routes/AdminRoute.js'
import Admindashboard from './pages/Admin/Admindashboard.js'
import CreateCategory from './pages/Admin/createCategory.js';
import CreateProduct from './pages/Admin/createProduct.js';
import Users from './pages/Admin/Users.js';
import PrivateRoute from './Components/Routes/private.js';
import Orders from './pages/user/Orders.js';
import Profile from './pages/user/Profile.js';
import Products from './pages/Admin/Products.js';
import UpdateProduct from './pages/Admin/UpdateProduct.js';
import CartPage from './pages/CartPage';
import Categories from './pages/Categories.js'
import About from './pages/About.js'
import Search from './pages/Search';
import CategoryProduct from './pages/CategoryProduct'
import ProductDetails from './pages/ProductDetails';
import Policy from './pages/Policy.js'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Admindashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          {/* <Route path="admin/orders" element={<AdminOrders />} /> */}
        </Route>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/forgot-password" element={<ForgotPasssword />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
