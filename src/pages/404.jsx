import { useState } from "react";
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const [showScreamer, setShowScreamer] = useState(false);

  console.error(error);

  const handleScreamer = () => {
    setShowScreamer(true);
    window.setTimeout(() => {
      setShowScreamer(false);
    }, 1200);
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img className="kawaii-image" src="/pikachu_chef.jpg" alt="Pikachu chef" />
      <p className="kawaii-message">
        Pikachu ne peut pas te rediriger… il est en pleine mission crêpes !
      </p>
      <button className="sparkles-button" type="button" onClick={handleScreamer}>
        ✨ Reviens quand la pâte sera prête ✨
      </button>
      <Link className="kawaii-link" to="/">
        Retour à l’accueil
      </Link>

      {showScreamer && (
        <div className="screamer-overlay" onClick={() => setShowScreamer(false)}>
          <img src="/screamer.jpg" alt="Screamer" />
        </div>
      )}
    </div>
  );
}
