import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import "./normalize.css";
import "./style.css";

function App() {
  const location = useLocation();
  

  return (
    <>
      
        <h1>
          <Link to="/">
            <img src="/pokemon_logo.png" alt="Pokemon" />
          </Link>
        </h1>

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
