import React from 'react'

const RadialGradientBackground = ({variant='hero', gradients=[]}) => {
    const variants = {
        hero: [
            {
                position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    { color: '#e35f0035', stop:'100%' },
                    { color: '#e35f0070', stop:'100%' },
                    { color: '#e35f0080', stop:'100%' },
                    { color: '#e35f0075', stop:'100%' },
                    { color: '#e35f0035', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            },
            {
                position: 'top-1 left-1',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.15)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.15)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            },
            {
                position: 'bottom-1 right-1',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.15)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.15)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            },
            {
                position: 'bottom-0 right-[75%]',
                size: 'w-[700px] h-[700px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.15)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.15)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            }           
        ],
        about: [
            {
                position: 'bottom-0 left-[65%]',
                size: 'w-[900px] h-[900px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            }           
        ],
        competences: [
            {
                position: 'top-1 left-5',
                size: 'w-[150px] h-[150px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            },
            {
                position: 'top-10 left-20',
                size: 'w-[200px] h-[200px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            },
            {
                position: 'top-[37.5%] right-50',
                size: 'w-[150px] h-[150px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            },
            {
                position: 'top-[32.5%] right-10',
                size: 'w-[200px] h-[200px]',
                colors: [
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.40)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.35)', stop:'100%' },
                    { color: 'rgba(227, 95, 0, 0.25)', stop:'100%' }
                ],
                blur: '0px',
                opacity: 0.5,
            }            
        ]
    };

    const activeGradients = variant === 'custom' ? gradients : variants[variant] || variant.hero

    const generateGradient = (colors) => {
        const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(', ');
        return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`;

    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {activeGradients.map((gradient, index) => (
                <div
                    key={index}
                    className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
                    style={{
                        background: generateGradient(gradient.colors),
                        filter: `blur(${gradient.blur})`,
                        opacity: gradient.opacity,
                    }}
                />
            ))}
        </div>
    )
}

export default RadialGradientBackground