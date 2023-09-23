import React from "react";
import About from "./pages/about/AboutPage";
import Contact from "./pages/contact/ContactPage";
import Dough from "./pages/dough/DoughPage";
import Cart from "./pages/cart/CartPage";
import Home from "./pages/home/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/dough">Dough</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/dough" Component={Dough} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
