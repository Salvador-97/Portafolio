export const lenguajes = {
    html: {
        id: 'html',
        icono: 'fa-brands fa-html5',
        colorIcono: '#E34F26',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    },
    css: {
        id: 'css',
        icono: 'fa-brands fa-css3',
        colorIcono: '#1572B6',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    bootstrap: {
        id: 'bootstrap',
        icono: 'fa-brands fa-bootstrap',
        colorIcono: '#7952B3',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
    },
    javascript: {
        id: 'javascript',
        icono: 'fab fa-js',
        colorIcono: '#F7DF1E',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    python: {
        id: 'python',
        icono: 'fa-brands fa-python',
        colorIcono: '#3776AB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    },
    excel: {
        id: 'excel',
        icono: 'fa-solid fa-file-excel',
        colorIcono: '#217346',
        img: false
    },
    sql: {
        id: 'sql',
        icono: 'fa-solid fa-database',
        colorIcono: '#9FA6A2',
        img: false
    },
    node: {
        id: 'node',
        icono: 'fa-brands fa-node-js',
        colorIcono: '#339933',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    },
    react: {
        id: 'react',
        icono: 'fa-brands fa-react',
        colorIcono: '#61DAFB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    csharp: {
        id: 'csharp',
        icono: 'devicon-csharp-plain',
        colorIcono: '',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
    },
    tailwind: {
        id: 'tailwind',
        icono: '',
        colorIcono: '',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    flask: {
        id: 'flask',
        icono: 'devicon-flask-original',
        colorIcono: '#fff',
        img: false
    },
    sqlserver: {
        id: 'sqlserver',
        icono: 'devicon-microsoftsqlserver-plain',
        colorIcono: '',
        img: false
    },
    dotnet: {
        id: 'dotnet',
        icono: 'devicon-dotnetcore-plain',
        colorIcono: '',
        img: false
    },
    mongoDB: {
        id: 'mongoDB',
        icono: '',
        colorIcono: '',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
    },
    sass: {
        id: 'sass',
        icono: '',
        colorIcono: '',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'
    },
    axios: {
        id: 'axios',
        icono: '',
        colorIcono: '',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg'
    },

}

export const marbetes = {
    icono: 'fa-solid fa-file-circle-check',
    nombre: 'Sistema de generación y gestión de marbetes',
    descripcion: 'Aplicación de escritorio para crear y administrar marbetes de productos, con manejo automatizado de datos.',
    link: 'https://github.com/Salvador-97/Inbound_Manager',
    desarrollo: false,
    estado: true,
    progreso: 0.75,
    lenguajes: ['python', 'excel']
}

export const hospital = {
    icono: 'fa-solid fa-stethoscope',
    nombre: 'Sistema de simulacion de un hospital',
    descripcion: 'Gestión de pacientes de un hospital así como de trabajadores.',
    link: '#',
    desarrollo: false,
    estado: false,
    progreso: 0.1,
    lenguajes: ['sqlserver', 'csharp', 'dotnet']
}

export const proyectos = [
    {
        id: 'inbound',
        icono: 'fa-solid fa-truck-ramp-box',
        nombre: 'Inbound Manager Web',
        categoria: 'Sistema WMS',
        descripcion: 'Aplicación web para gestionar contenedores y productos en un almacén, con seguimiento de tarimas y ubicación.',
        demo: 'https://inbound-manager-web.onrender.com',
        github: 'https://github.com/Salvador-97/Inbound_Manager-Web',
        tiempo: '2 meses',
        online: true,
        progreso: 0.8,
        lenguajes: ['bootstrap', 'javascript', 'sass', 'python', 'flask', 'sql']
    },
    {
        id: 'portafolio',
        icono: 'fa-solid fa-address-card',
        nombre: 'Portafolio Web',
        categoria: 'Landing Page Personal',
        descripcion: 'Sitio web diseñado para presentar mis proyectos, habilidades y experiencia laboral.',
        demo: 'https://salvador-97.github.io/Portafolio/',
        github: 'https://github.com/Salvador-97/Portafolio',
        tiempo: 'Ayer',
        online: true,
        progreso: 1,
        lenguajes: ['javascript', 'react', 'tailwind']
    },
    {
        id: 'series',
        icono: 'fa-solid fa-circle-play',
        nombre: 'Rari-Caturas TV',
        categoria: 'Aplicación Web de Series',
        descripcion: 'Sitio web para explorar y ver series, con información detallada de temporadas y capítulos.',
        demo: 'https://rari-caturas-tv.onrender.com/',
        github: 'https://github.com/Salvador-97/Rari-Caturas-TV',
        tiempo: '2 meses',
        online: true,
        progreso: 0.9,
        lenguajes: ['javascript', 'mongoDB', 'node', 'axios']
    }
]

export function estado(estado, verdadero, falso) {
    let valorEstado = ''
    if (estado) {
        valorEstado = verdadero;
    } else if (!estado) {
        valorEstado = falso;
    }
    return valorEstado;
}