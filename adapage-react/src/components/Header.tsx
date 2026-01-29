import { Link } from "react-router";
import '../App.css'
import logoSofia from '../images/Logo-Sofia.png';

export const Header = () => (
<header>
<nav className="bg-[#533532] dark:bg-[#3d2e2b] shadow-lg transition-colors duration-300" role="navigation" aria-label="Navigation principale">
    <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <Link to="/" className="group" aria-label="Retour à l'accueil">
                <img 
                  src={logoSofia} 
                  alt="Logo Sofia Coppola" 
                  className="h-14 w-auto"
                />
            </Link>
             
            <div className="flex items-center gap-4">
                
                <Link to="/quotes" 
                        className="no-underline bg-[#2a2a2a] dark:bg-[#1a1414] text-[#EDD8D4] border-2 border-[#8FA9A3] dark:border-[#9B8B9D] px-8 py-3 rounded-lg font-semibold 
                                hover:bg-[#8FA9A3] dark:hover:bg-[#9B8B9D] hover:text-[#533532] hover:border-[#8FA9A3] dark:hover:border-[#9B8B9D] hover:shadow-lg hover:shadow-[#8FA9A3]/30 dark:hover:shadow-[#9B8B9D]/30
                                    transform hover:-translate-y-0.5 transition-all duration-300 
                                    focus:outline-none focus:ring-2 focus:ring-[#8FA9A3] dark:focus:ring-[#9B8B9D] focus:ring-offset-2 focus:ring-offset-[#533532] dark:focus:ring-offset-[#3d2e2b]"
                >
                Quotes
                </Link>
            
                <Link to="/timeline" 
                    className="no-underline bg-[#2a2a2a] dark:bg-[#1a1414] text-[#EDD8D4] border-2 border-[#8FA9A3] dark:border-[#9B8B9D] px-8 py-3 rounded-lg font-semibold 
                                hover:bg-[#8FA9A3] dark:hover:bg-[#9B8B9D] hover:text-[#533532] hover:border-[#8FA9A3] dark:hover:border-[#9B8B9D] hover:shadow-lg hover:shadow-[#8FA9A3]/30 dark:hover:shadow-[#9B8B9D]/30
                                    transform hover:-translate-y-0.5 transition-all duration-300 
                                    focus:outline-none focus:ring-2 focus:ring-[#8FA9A3] dark:focus:ring-[#9B8B9D] focus:ring-offset-2 focus:ring-offset-[#533532] dark:focus:ring-offset-[#3d2e2b]"
                >
                Timeline
                </Link>

                <Link to="*" 
                    className="no-underline bg-[#2a2a2a] dark:bg-[#1a1414] text-[#EDD8D4] border-2 border-[#8FA9A3] dark:border-[#9B8B9D] px-8 py-3 rounded-lg font-semibold 
                                hover:bg-[#8FA9A3] dark:hover:bg-[#9B8B9D] hover:text-[#533532] hover:border-[#8FA9A3] dark:hover:border-[#9B8B9D] hover:shadow-lg hover:shadow-[#8FA9A3]/30 dark:hover:shadow-[#9B8B9D]/30
                                    transform hover:-translate-y-0.5 transition-all duration-300 
                                    focus:outline-none focus:ring-2 focus:ring-[#8FA9A3] dark:focus:ring-[#9B8B9D] focus:ring-offset-2 focus:ring-offset-[#533532] dark:focus:ring-offset-[#3d2e2b]"
                >
                Photos
                </Link>

            </div>
        </div>
    </div>
</nav>
</header>
)