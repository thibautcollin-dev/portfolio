export const projects = [
    {
        id: 1,
        title: 'Boutique Prestashop BTB',
        description: 'La solution consiste en une boutique e-commerce connectées à un progiciel métier via des échanges asynchrones. Le progiciel est responsable de la gestion des données produits et des stocks, qu’il transmet régulièrement à la boutique pour publication. Les commandes saisies par les clients sont automatiquement rapatriées dans le progiciel, qui en assure le traitement complet et synchronise les statuts vers la boutique.',
        image: 'images/projects/boutique.png',
        categories: ['Pro', 'Full Stack'],
        technologies: ['Prestashop', 'Symfony', 'VisualCron', 'MySql', 'Oracle', 'Aristote', 'REST APIs', 'Apache', 'Confluence', 'draw.io', 'Git']
    },
    {
        id: 2,
        title: 'Espace client assurance affinitaire',
        description: 'Les sites web sont destinés aux utilisateurs afin de leur permettre de réaliser différentes actions telles que : déclarer un sinistre, gérer leurs contrats, suivre l’avancement de leurs dossiers. Ces plateformes sont directement connectées au progiciel métier, avec lequel elles échangent en temps réel. Cette connexion permet : la création instantanée des dossiers dans le progiciel dès qu’un utilisateur effectue une déclaration ; la mise à jour immédiate des informations (statuts, documents, données client, etc.) ; la synchronisation continue de l’évolution des dossiers pour garantir une information fiable et à jour.',
        image: 'images/projects/espace-client.png',
        categories: ['Pro', 'Full Stack'],
        technologies: ['Symfony', 'Bootstrap', 'Stimulus', 'Oracle', 'Aristote', 'Docker',  'REST APIs', 'SOAP APIs', 'Git']
    },
    {
        id: 3,
        title: 'Solution marketplace',
        description: 'Pour déverser le catalogue de l\'entreprise sur les marketplaces un OMS est connecté à un progiciel métier via des échanges asynchrones. Le progiciel est responsable de la gestion des données produits et des stocks, qu’il transmet régulièrement à l\'OMS pour publication. Les commandes saisies par les clients sont automatiquement rapatriées dans le progiciel, qui en assure le traitement complet et synchronise les statuts vers les marketplaces.',
        image: 'images/projects/visualcron.png',
        categories: ['Pro', 'Back-end'],
        technologies: ['VisualCron', 'Oracle', 'Aristote', 'REST APIs', 'Confluence', 'draw.io']
    },
    {
        id: 4,
        title: 'Portfolio',
        description: 'Ce site donne une approche plus dynamique pour présenter mon profil et me permet d\'apporter plus de détail sur mes travaux et compétences. Il représente aussi un bon exercice pour découvrir React.js et confirmé mes compétences sur TailwindCSS. Merci de votre visite et du temps accordé à la lecture de celui-ci.',
        image: 'images/projects/portfolio.png',
        categories: ['Perso', 'Front-end'],
        technologies: ['React.js', 'Vite', 'TailwindCSS', 'Git']
    }
]

export const categories = ['Fullstack', 'Backend', 'Frontend']