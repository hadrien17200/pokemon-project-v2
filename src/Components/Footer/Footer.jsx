import { Link } from "react-router-dom";
import "./Footer.scss";

/*
Via le plugin : ES7+ React/Redux/React-Native snippets

rfce : permet de creer une fonction component
*/

function Footer() {
  return (
    <footer>
      <Link to="/MentionLegales">Mentions légales</Link>
      <Link to="/DetailsPokemon">Details Pokemon</Link>
    </footer>
  );
}

export default Footer;
