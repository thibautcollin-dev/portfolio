import React from 'react'
import { ChevronDown, Star, Download } from 'lucide-react'
import { SiOracle, SiSymfony, SiBootstrap, SiPrestashop, SiStimulus } from 'react-icons/si'
import { PERSONAL_INFO, STATS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-200">
            <RadialGradientBackground variant="hero" />
        
            {/* Content Container*/}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left column content */}
                    <div className="text-left">
                        {/* Mobile - Developer image */}
                        <FadeIn delay={200}>
                            <div className="relative lg:hidden">
                                <div className="relative overflow-hidden rounded-2xl aspect-4/2 w-full mx-auto group mb-5 md:my-20">
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                        <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-[2px]"></div>
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                                        <img 
                                            src="/images/developer-portrait.png"
                                            alt="Photo du développeur"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Technology logos */}
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <FadeIn delay={500}>
                                            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                                                <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                    <SiSymfony className="w-full h-full" title='Symfony' />
                                                </div>

                                                <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                    <SiPrestashop className="w-full h-full" title='Prestashop' />
                                                </div>                                            

                                                <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                    <SiStimulus className="w-full h-full" title='StimulusJS' />
                                                </div>

                                                <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                    <SiBootstrap className="w-full h-full" title='Bootstrap' />
                                                </div>

                                                <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                    <SiOracle className="w-full h-full" title='Oracle' />
                                                </div>
                                            </div>
                                        </FadeIn>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>


                        <FadeIn delay={0}>
                            <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r text-white from-primary via-primary/95 to-primary/90 border border-primary/90 rounded-full">
                                <Star className="w-4 h-4 text-white fill-white" />
                                <span className="flex text-xs md:text-sm text-white tracking-[1.2px]">
                                    {PERSONAL_INFO.title} | Domicilié à {PERSONAL_INFO.location}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-6 leading-15">
                                Portfolio
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className="text-lg text-black/80 max-w-[550px] mb-8">Actuellement en projet de formation professionnelle, je profite de cette période de transition pour améliorer mes compétences dans différentes technologies dans le but d'obtenir un profil plus compétitif.</p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <button
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className="cursor-pointer mb-8 inline-flex gap-3 px-7 py-3.5 bg-black text-[#F4F4F4] font-medium text-base rounded-[17px] border border-black hover:bg-black/90 transition-all duration-300"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                Téléchargez mon CV
                            </button>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="grid grid-cols-3 gap-10 max-w-full">
                                {STATS.map((stat, index) => (
                                    <div key={index} className="text-left border-r border-black/50 pr-5 last:border-r-0">
                                        <div className="text-2xl font-normal text-primary mb-[8px] font-mono text-black">
                                            {stat.value}
                                        </div>
                                        <p className="text-sm text-black leading-snug">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                    </div>

                    {/* Right column - Developer image */}
                    <FadeIn delay={200} >
                        <div className="relative hidden lg:inline-flex">
                            <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-[2px]"></div>
                                </div>

                                {/* Image Container */}
                                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                                    <img 
                                        src="/images/developer-portrait.png"
                                        alt="Photo du développeur"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Technology logos */}
                                <div className="absolute bottom-6 left-6 z-20">
                                    <FadeIn delay={500}>
                                        <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                <SiSymfony className="w-full h-full" title='Symfony' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                <SiPrestashop className="w-full h-full" title='Prestashop' />
                                            </div>                                            

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                <SiStimulus className="w-full h-full" title='StimulusJS' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                <SiBootstrap className="w-full h-full" title='Bootstrap' />
                                            </div>

                                            <div className="w-6 h-6 flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                                <SiOracle className="w-full h-full" title='Oracle' />
                                            </div>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={() => scrollToSection('a-propos')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="cursor-pointer w-8 h-8 text-primary"></ChevronDown>
            </button>
            
        </section>
    )
}

export default Hero