import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { hardSkills, softSkills } from '../../data/skills';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { scrollToSection } from '../../hooks/useScrollSpy';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const Skills = () => {
    const hardSkillCategories = {
        'Backend & APIs' : [
            hardSkills.find(s => s.name === 'Symfony'),
            hardSkills.find(s => s.name === 'Prestashop'),
            hardSkills.find(s => s.name === 'REST APIs'),
            hardSkills.find(s => s.name === 'SOAP APIs'),            
        ].filter(Boolean),
        'Fontend' : [
            hardSkills.find(s => s.name === 'Stimulus'),
            hardSkills.find(s => s.name === 'React.js'),
            hardSkills.find(s => s.name === 'Bootstrap'),
            hardSkills.find(s => s.name === 'TailwindCSS'),
        ].filter(Boolean),
        'Database & PL/SQL' : [
            hardSkills.find(s => s.name === 'Oracle'),
            hardSkills.find(s => s.name === 'MySql'),
        ].filter(Boolean),
        'DevOps' : [
            hardSkills.find(s => s.name === 'Docker'),
            hardSkills.find(s => s.name === 'Apache'),
        ].filter(Boolean),
        'Documentation' : [
            hardSkills.find(s => s.name === 'Confluence'),
            hardSkills.find(s => s.name === 'draw.io'),
        ].filter(Boolean),
        'Logiciels et autres' : [
            hardSkills.find(s => s.name === 'Git'),
            hardSkills.find(s => s.name === 'Visual Cron'),
            hardSkills.find(s => s.name === 'Aristote'),
        ].filter(Boolean),
    };

    const getProficiencyLevel = (level) => {
        const levels = {
            'Expert': 95,
            'Avancé': 70,
            'Intermédiaire': 50,
            'Débutant': 20,
        };

        return levels[level] || 50;
    }

    const getLevelColor = (level) => {
        const colors = {
            'Expert': 'text-cyan-700 bg-cyan-800/20 border-cyan-800/30',
            'Avancé': 'text-emerald-700 bg-emerald-800/20 border-emerald-800/30',
            'Intermédiaire': 'text-lime-700 bg-lime-800/20 border-lime-800/30',
            'Débutant': 'text-amber-700 bg-amber-800/20 border-amber-800/30',
        }
        
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }

    return <section id="competences" className="relative py-20 bg-neutral-200 overflow-hidden">
            <RadialGradientBackground variant="competences" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={100}>
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-5">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Compétences</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-normal mb-4">
                            Savoir-être
                        </h2>
                        <p className="text-lg text-black/60 max-w-2xl m-auto">
                            Le savoir-être, un élément pouvant être sous-estimé dans un profil technique.
                        </p>
                    </div>
                </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {softSkills.map((softSkill) => {
                    const IconComponent = Icons[softSkill.icon] || Icons.Code2

                    return (
                        <FadeIn key={'soft' + softSkill.id} delay={softSkill.id * 100}>
                            <div className="relative bg-white/20 border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                                <div className="flex items-center mb-4">
                                    <div className="mx-auto p-6 bg-primary/20 rounded-full">
                                        <IconComponent className="w-10 h-10 text-primary" />
                                    </div>
                                </div>
                                <div className="flex items-center mb-4 pb-4 border-b border-black/5">
                                    <h3 className="mx-auto text-xl font-medium">{softSkill.name}</h3>
                                </div>

                                <div className="flex items-center space-y-5">
                                    <p className="mx-auto text-sm font-medium text-center text-black/50">
                                        {softSkill.description}
                                    </p>
                                </div>

                                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={100}>
                    <div className="text-center mb-8">
                        <h2 className="text-4xl lg:text-5xl font-normal mb-4">
                            Technologies
                        </h2>
                        <p className="text-lg text-black/60 max-w-2xl m-auto">
                            Un aperçu de mon profil technique, les niveaux représentent le jugement personnel de mes connaissances avant d'atteindre un rôle d'expert. Dans ce contexte, le rôle d'expert signifie être capable de trouver une solution à toutes les demandes.
                        </p>
                    </div>
                </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-5 mb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-xs opacity-75">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor('Débutant')}`}>
                        Débutant
                    </span>
                    <span> = en apprentissage</span>
                </div>
                <div className="text-center text-xs opacity-75">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor('Intermédiaire')}`}>
                        Intermédiaire
                    </span>
                    <span> = maîtrise partielle</span>
                </div>
                <div className="text-center text-xs opacity-75">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor('Avancé')}`}>
                        Avancé
                    </span>
                    <span> = autonome</span>
                </div>
                <div className="text-center text-xs opacity-75">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor('Expert')}`}>
                        Expert
                    </span>
                    <span> = source de solution</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {Object.entries(hardSkillCategories).map(([category, categorySkills], categoryId) => (
                    <FadeIn key={category} delay={categoryId * 100}>
                        <div className="relative h-100 bg-white/20 border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/5">
                                <div className="w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full"></div>
                                <h3 className="text-xl font-medium">{category}</h3>
                            </div>

                            <div className="space-y-5">
                                {categorySkills.map((skill, skillIndex) => {
                                    const IconComponent = Icons[skill.icon] || Icons.Code2
                                    const proficiency = getProficiencyLevel(skill.level)

                                    return (
                                        <div key={skill.id} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-primary/5 rounded-lg">
                                                        <IconComponent className="w-4 h-4 text-primary/50" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium">
                                                            {skill.name}
                                                        </div>
                                                        <div className="text-xs text-black/50">
                                                            {skill.experience}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                                    {skill.level}
                                                </span>
                                            </div>

                                            <div className="relative h-1.5 bg-black/5 rounded-full overflow-hidden">
                                                <div 
                                                    className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${proficiency}%`}}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                        </div>
                    </FadeIn>
                ))}
            </div>

                        
            {/* Scroll indicator */}
            <button
                onClick={() => scrollToSection('projets')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="cursor-pointer w-8 h-8 text-primary" />
            </button>
        </section>;
}

export default Skills;