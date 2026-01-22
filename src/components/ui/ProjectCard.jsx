import React from 'react'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'


const ProjectCard = ({project}) => {

    const { title, description, image, technologies, metrics, demoUrl, githubUrl } = project

    return (
        <div className='group relative bg-black/5 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 m-auto w-full'>
            <div className='relative h-64 overflow-hidden'>
                <img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-700 -rotate-3 scale-130 group-hover:scale-150' />
            
                <div className='absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300' />

                <div className='absolute bottom-4 right-4 flex items-center gap-3'>
                    {demoUrl && (
                        <a 
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-primary/10 backdrop-blur-md rounded-lg border border-primary/20 hover:bg-primary/30 hoverborder-primary/50 transition-all duration-300 hover:scale-110"
                            title=""
                        >
                            <ExternalLink className='w-4 h-4 text-white' />
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-2.5 bg-primary/10 backdrop-blur-md rounded-lg border border-primary/20 hover:bg-primary/30 hoverborder-primary/50 transition-all duration-300 hover:scale-110'
                            title="Voir le code"
                        >
                            <Github className='w-4 h-4 text-white' />
                        </a>
                    )}
                </div>

                <div className='absolute top-4 left-4'>
                    {project.categories.map((category, index) => (
                        <span
                            key={index}
                            className='px-3 py-1 mr-2 text-xs font-medium bg-primary/40 backdrop-blur-sm border-white/20 rounded-full'
                        >
                            {category}
                        </span>
                    ))}
                </div>

                <div className='absolute sm:w-100 md:w-125 lg:w-175 h-full right-0 top-0 p-6 space-y-4 bg-white/80 '>
                    <div>
                        <h3 className='text-xl font-semibold mb-2 group-hover:text-[#CC4E00] transition-colors duration-300'>
                            {title}
                        </h3>
                        <p className='text-black/60 text-sm text-justify leading-relaxed line-clamp-4'>
                            {description}
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className='px-3 py-1 text-xs font-meidum text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-200'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {metrics && (
                        <div className=''>
                            <TrendingUp className='' />
                            <p className=''>{metrics}</p>
                        </div>
                    )}

                </div>
            </div>

            
        </div>
    )
}

export default ProjectCard