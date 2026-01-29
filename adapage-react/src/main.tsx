import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"; 
import Quotes from "./pages/Quote.tsx";
import Timeline from "./pages/Timeline.tsx";
import './index.css'
import App from './pages/App.tsx'
import NotFound from './pages/NotFound.tsx';

const root = document.getElementById("root");

createRoot(root!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/quotes" element={<Quotes />} />
    <Route path="/timeline" element={<Timeline />} />
    <Route path="*" element={<NotFound/>}/>
  </Routes>  
  </BrowserRouter>,
)
