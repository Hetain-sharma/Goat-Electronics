import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";

import Cart from "./screens/Cart";
import Profile from "./screens/Profile";

import { CartProvider } from "./screens/Context/cartProvider";
import { OrderProvider } from "./screens/Context/orderProvider";
import LoginForm from "./screens/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <OrderProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="cart" element={<Cart />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<LoginForm />} />
            </Routes>
          </OrderProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
