import React, {useState, useEffect} from 'react'
import {Code, Menu, X} from 'lucide-react'
import {NAV_LINKS, PERSONAL_INFO} from '../../utils/constants'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id))

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled 
                ? 'bg-white/30 backdrop-blur-lg' 
                : 'bg-transparent'}`}
            style={{ transform: 'translate3d(0, 0, 0)' }}
        >
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="flex items-center justify-between">
                {/* Logo */}
                <div className='relative flex items-center gap-4'>
                    <Code className='w-6 h-6 text-primary' />

                    <button
                        onClick={() => window.scrollTo({ top:0, behavior: 'smooth'})}
                        className="cursor-pointer text-2xl font-bold bg-linear-to-r from-primary/70 via-primary/80 to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                        arial-label="home"
                    >
                        {PERSONAL_INFO.name}
                    </button>

                    <div className="absolute bottom-[-15px] right-[-10px] lg:right-[-50px] text-xs text-primary/50 ">Site propulsé par React.js & TailwindCSS</div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-7">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`cursor-pointer text-base uppercase font-medium transition-all duration-300 ${activeSection === link.id
                                ? 'text-black'
                                : 'text-black/70 hover:text-black'
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="cursor-pointer px-7 py-3.5 bg-black text-[#F4F4F4] font-medium text-base rounded-[17px] border border-black hover:bg-black/90 transition-all duration-300"
                    >
                        Démarchez-moi
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='cursor-pointer md:hidden p-4 text-black hover:text-black/80 transition-colors'
                    aria-label="menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-neutral-200/75 backdrop-blur-lg border-top border-black/10 px-5 py-6 space-y-3">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`cursor-pointer block w-full text-left px-4 py-3 rounded-lg font-medium uppercase transition-all duration-300 ${activeSection === link.id
                                ? 'text-black bg-primary/10'
                                : 'text-black/50 hover:text-black hover:bg-black/10'
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="w-full px-7 py-3.5 bg-black text-[#F4F4F4] font-medium text-base rounded-[17px] border border-black hover:bg-black/90 transition-all duration-300 mt-2"
                    >
                        Démarchez-moi
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar