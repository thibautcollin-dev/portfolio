import React, { useState, useRef } from 'react'
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { projects, categories } from '../../data/projects'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {

    // const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const filteredProjects = projects;
    // activeCategory === 'All'
    //     ? projects
    //     : projects.filter(project => project.category === activeCategory);

    // const handleCategoryChange = (category) => {
    //     setActiveCategory(category);
    //     setCurrentIndex(0);
    //     if (scrollContainerRef.current) {
    //         scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth'})
    //     }
    // };

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.offsetWidth;
            container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => {
        const maxIndex = Math.max(0, filteredProjects.length - 1);
        const newIndex = Math.min(currentIndex + 1, maxIndex);
        console.log(newIndex);
        scrollToIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = Math.max(currentIndex - 1, 0);
        console.log(newIndex);
        scrollToIndex(newIndex);
    };

    const categoryIcons = {
        'Tout': Target,
        'Frontend': Palette,
        'Fullstack': Zap,
    };

    return <section id="projets" className="relative py-20 bg-neutral-200 overflow-hidden">

            <div className="abosulte inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Projets</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-normal mb-4">
                            Pro & Perso
                        </h2>
                        <p className="text-lg text-black/60 max-w-2xl mx-auto">
                            Exemple de projets professionnels et exposition de projets personnels
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="relative">
                        <div 
                            ref={scrollContainerRef}
                            className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
                            <div className="flex gap-6 pb-4">
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={project.index}
                                        className="w-full shrink-0 snap-start"
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {filteredProjects.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className="flex absolute left-0 top-1/2 translate-y-31.5 xl:-translate-y-1/1 xl:-translate-x-20 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                                    aria-label="Précédent"
                                >
                                    <ChevronLeft className="w-6 h-6" />                            
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= filteredProjects.length - 1}
                                    className="flex absolute right-0 top-1/2 translate-y-34.5 xl:-translate-y-1/1 xl:translate-x-20 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                                    aria-label="Suivant"
                                >
                                    <ChevronRight className="w-6 h-6" />          
                                </button>
                            </>
                        )}

                        {/* Navigation Dots */}
                        {filteredProjects.length > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-8">
                                {Array.from({ length: Math.max(0, filteredProjects.length) }).map((_, index) => (                            
                                    <button
                                        key={index}
                                        onClick={() => scrollToIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                            ? 'bg-primary w-6 h-2'
                                            : 'bg-primary/30 w-2 h-2 hover:bg-primary/50'
                                        }`}
                                        aria-label={`Défiler vers la page ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}                    
                    </div>
                </FadeIn>
            </div>
        </section>;
}

export default Projects