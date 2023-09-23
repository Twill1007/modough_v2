import React from "react";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Dough from "./pages/dough/Dough";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/dough">Dough</Link>
              </li>
            </ul>
          </nav>

          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/dough" Component={Dough} />
        </div>
      </Router>

      <Main />
      <Menu />
    </>
  );
}

export default App;
