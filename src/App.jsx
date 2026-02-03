import { Link, Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
import "./normalize.css";
import "./style.css";

function App() {
  return (
    <>
      <h1>
        <Link to="/">
          <img src="/pokemon_logo.png" alt="Pokémon" />
        </Link>
      </h1>

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
