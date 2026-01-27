import { Link } from "react-router";
import '../App.css'

export default function App() {
  return (
    <div>
      <h1>Accueil - [Nom de ta personnalité]</h1>
      
      <nav>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/quotes">Citations</Link></button>
        <button><Link to="/timeline">Timeline</Link></button>
      </nav>
      
    {/* contenu */}
    </div>
  );
}

