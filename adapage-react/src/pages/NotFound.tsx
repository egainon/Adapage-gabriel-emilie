import { Footer } from '../components/footer';
import { Header } from '../components/Header';
import page404 from '../images/page-404.png';

export default function NotFound() {
    return (
        <>
            <div className='min-h-screen bg-[#EDD8D4] flex flex-col'>
                <Header/>
                
                <main className="flex-grow flex items-center justify-center py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            
                            {/* Image */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-[#966F66] to-[#825C56] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                <img 
                                    src="https://preview.redd.it/behind-the-scenes-from-marie-antoinette-2006-is-one-for-the-v0-aw2h7xfj8ete1.jpg?width=1080&crop=smart&auto=webp&s=72318957d3bb099b3b9aaa2a8bba31bf90effd05"
                                    alt="Marie Antoinette behind the scenes"
                                    className="relative rounded-2xl shadow-2xl w-full h-100 md:h-125 object-cover border-4 border-[#825C56]"
                                />
                            </div>
                            
                            {/* Contenu texte */}
                            <div className="space-y-8">
                                {/* Titre 404 */}
                                <div className="bg-[#533532] rounded-xl p-8 border-4 border-[#825C56] text-center">
                                    <h1 className="font-monsieur text-8xl md:text-9xl text-[#EDD8D4] mb-2">
                                        404
                                    </h1>
                                    <p className="font-young-serif text-2xl text-[#966F66]">
                                        Page Not Found
                                    </p>
                                </div>
                                
                                {/* Message */}
                                <div className="bg-[#966F66] rounded-xl p-8 border-4 border-[#533532]">
                                    <p className="text-[#533532] leading-relaxed text-lg md:text-xl font-young-serif text-center">
                                        Sorry, this page doesn't exist anymore.
                                        <br/><br/>
                                        Click on the Coppola logo to return to the homepage.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </main>
                
                <Footer/>
            </div>
        </>
    );
}