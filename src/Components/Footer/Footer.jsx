import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <Link to="/MentionLegales">Mentions légales</Link>
      {" | "}
      <Link to="/DetailsPokemon">Détails Pokemon</Link>
    </footer>
  );
}

export default Footer;
