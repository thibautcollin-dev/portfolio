import React, { useState } from 'react'
import { Download, Code2, Sparkles, ChevronDown } from 'lucide-react'
import { SiReact, SiTailwindcss, SiOracle, SiSymfony, SiBootstrap, SiPrestashop, SiMysql, SiStimulus } from 'react-icons/si'
import { PERSONAL_INFO } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const About = () => {

    const skills = [
        { name: 'Symfony', icon: SiSymfony, color: '#FFFFFF' },
        { name: 'Prestashop', icon: SiPrestashop, color: '#FFFFFF' },
        { name: 'StimulusJS', icon: SiStimulus, color: '#FFFFFF' },
        { name: 'ReactJS', icon: SiReact, color: '#FFFFFF' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: '#FFFFFF' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#FFFFFF' },
        { name: 'Oracle', icon: SiOracle, color: '#FFFFFF' },
        { name: 'MySQL', icon: SiMysql, color: '#FFFFFF' }
    ];

    return <section id="a-propos" className="relative py-20 bg-neutral-200 overflow-hidden">
            <RadialGradientBackground variant="about" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                {/* Main Grid */}
                <div className="flex flex-col gap-8">
                    <FadeIn delay={60}>
                        <h2 className="text-4xl lg:text-5xl font-normal text-black leading-light mb-5">
                            J'ai bien des noms ...
                        </h2>
                        <div className="space-y-3 space-x-3">
                            {PERSONAL_INFO.works.map(( work, index ) => (
                                <div key={index} className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                    <Code2 className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-primary font-medium">
                                        {work}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    
                    {/* Left column - Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <FadeIn delay={100}>
                            <div className="">
                                <h2 className="text-4xl lg:text-5xl font-normal text-black leading-light mb-7.5">
                                    Accompagner l'ambition métier de l'idée à la livraison
                                </h2>
                                <div className="text-justify flex flex-col gap-4">
                                    {PERSONAL_INFO.bio.map(( paragraph, index ) => (
                                        <p key={index} className="text-base text-black/70 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                
                                <h2 className="text-4xl lg:text-5xl font-normal text-black leading-light mt-10 mb-7.5">
                                    Quel est mon objectif court terme ?
                                </h2>
                                <div className="text-justify flex flex-col gap-4">
                                    {PERSONAL_INFO.learn.map(( paragraph, index ) => (
                                        <p key={index} className="text-base text-black/70 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>  
                        
                        <FadeIn delay={200}>
                            <div className="relative bg-white/20 border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group h-full">
                                <div className="inline-flex p-4 border border-primary/30 bg-primary/10 rounded-[17px]">
                                    <Sparkles className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-normal text-black leading-light my-7.5">
                                    Recherche alternance orientée analyse de projet
                                </h2>

                                <div className="text-justify flex flex-col gap-4 mb-7.5">
                                    {PERSONAL_INFO.goal.map(( paragraph, index ) => (
                                        <p key={index} className="text-base text-black/70 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                
                                <div className="space-y-3 space-x-3 mb-[8vh] md:mb-0">
                                    {PERSONAL_INFO.lookat.map(( work, index ) => (
                                        <div key={index} className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                            <Sparkles className="w-4 h-4 text-primary" />
                                            <span className="text-sm text-primary font-medium">
                                                {work}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                    className="cursor-pointer absolute right-7.5 bottom-7.5 inline-flex gap-3 px-7 py-3.5 bg-black text-[#F4F4F4] font-medium text-base rounded-[17px] border border-black hover:bg-black/90 transition-all duration-300"
                                >
                                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                    Téléchargez mon CV
                                </button>

                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>                                    
                        </FadeIn>                              
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <button
                onClick={() => scrollToSection('competences')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="cursor-pointer w-8 h-8 text-primary" />
            </button>
        </section>;
}

export default About