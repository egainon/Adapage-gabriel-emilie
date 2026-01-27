import { Link } from "react-router";
import {quotes} from "../data"


interface quotes {
    date: string;
    title: string;
    quote: string;
}


export default function Quotes() {
  return (
    <>
    <nav>    
    <button><Link to="/">Home</Link></button>
    <button><Link to="/quotes">Citations</Link></button>
    <button><Link to="/timeline">Timeline</Link></button>
    </nav>


    <div>
      <h1>Quotes</h1>
      {quotes.map((q) => (
        <div key={q.date}>
          <p className="quote-date">{q.date}</p>
          <h2 className="quote-title">{q.title}</h2>
          <p className="quote-quote">"{q.quote}"</p>
        </div>
      ))}    
    </div>
    </>
  );
}


