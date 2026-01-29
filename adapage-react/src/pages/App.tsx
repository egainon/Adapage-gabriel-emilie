import '../App.css'
import { charac } from "../data";
import { Header } from "../components/Header";
import type { Character } from '../interfaces';
import { Footer } from '../components/footer';

export default function App() {
  return (
    <>
      <div className='min-h-screen bg-[#EDD8D4]'>
        <Header/>
        <main className="grow">    
          <div className="container mx-auto px-6 py-8">
            {charac.map((elem: Character) => (
              <div key={elem.id} className="max-w-7xl mx-auto">
                <div className="mb-6">
                  <h1 className="font-monsieur text-8xl md:text-9xl lg:text-[10rem] text-[#533532] mb-2 leading-tight">
                    {elem.name}
                  </h1>
                  <p className="font-young-serif text-4xl md:text-5xl text-[#966F66]">
                    ({elem.age})
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-start"> 
                  
                  {/* IMAGE - Version avec contain et fond */}
                  <div className="relative group bg-[#966F66]/20 rounded-2xl p-4 border-4 border-[#825C56]">          
                    <div className="absolute inset-0 bg-linear-to-br from-[#966F66] to-[#825C56] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <img 
                      src={elem.img} 
                      alt={`Portrait of ${elem.name}`}
                      className="relative rounded-xl shadow-2xl w-full h-[350px] md:h-[400px] lg:h-[450px] object-contain"
                    />
                  </div>
                  
                  {/* INFORMATIONS */}
                  <div className="space-y-6">
                    
                    {/* Carte avec les détails */}
                    <div className="grid grid-cols-1 gap-3 bg-[#533532] rounded-xl p-5 border-4 border-[#825C56]">
                      <div className="flex items-center gap-3">
                        <span className="text-[#EDD8D4] font-young-serif font-bold text-sm uppercase tracking-wider">Country:</span>
                        <span className="text-[#EDD8D4] text-base md:text-lg">{elem.country}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#EDD8D4] font-young-serif font-bold text-sm uppercase tracking-wider">Astrologic sign:</span>
                        <span className="text-[#EDD8D4] text-base md:text-lg">{elem.AstroSign}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#EDD8D4] font-young-serif font-bold text-sm uppercase tracking-wider">Profession:</span>
                        <span className="text-[#EDD8D4] text-base md:text-lg">{elem.profession}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="bg-[#966F66] rounded-xl p-6 border-4 border-[#533532]">
                      <h2 className="text-[#533532] font-young-serif font-bold text-lg md:text-xl uppercase tracking-wide mb-3">
                        About {elem.name}
                      </h2>
                      <p className="text-[#533532] leading-relaxed text-sm md:text-base">
                        {elem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main> 
        <Footer/>
      </div>
    </>
  );
}