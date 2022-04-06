//import logo from "./logo.svg"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen.js"
import RegisterScreen from "./screens/RegisterScreen.js"
import ProfileScreen from "./screens/ProfileScreen.js"
import ShippingScreen from "./screens/ShippingScreen.js"
import PaymentScreen from "./screens/PaymentScreen.js"
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js"

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen></LoginScreen>} />
            <Route
              path='/login/shipping'
              element={<ShippingScreen></ShippingScreen>}
            />
            <Route
              path='/register'
              element={<RegisterScreen></RegisterScreen>}
            />
            <Route path='/payment' element={<PaymentScreen></PaymentScreen>} />
            <Route
              path='/placeorder'
              element={<PlaceOrderScreen></PlaceOrderScreen>}
            />
            <Route path='/profile' element={<ProfileScreen></ProfileScreen>} />
            <Route path='/' element={<HomeScreen></HomeScreen>} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart/' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
