export const lenguajes = {
    html: {
        icono: 'fa-brands fa-html5',
        colorIcono: '#E34F26',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    },
    css: {
        icono: 'fa-brands fa-css3',
        colorIcono: '#1572B6',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    bootstrap: {
        icono: 'fa-brands fa-bootstrap',
        colorIcono: '#7952B3',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
    },
    javascript: {
        icono: 'fab fa-js',
        colorIcono: '#F7DF1E',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    python: {
        icono: 'fa-brands fa-python',
        colorIcono: '#3776AB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    },
    excel: {
        icono: 'fa-solid fa-file-excel',
        colorIcono: '#217346',
        img: false
    },
    sql: {
        icono: 'fa-solid fa-database',
        colorIcono: '#9FA6A2',
        img: false
    },
    node: {
        icono: 'fa-brands fa-node-js',
        colorIcono: '#339933',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    },
    react: {
        icono: 'fa-brands fa-react',
        colorIcono: '#61DAFB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    csharp: {
        icono: 'devicon-csharp-plain',
        colorIcono: '',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
    },
    tailwind: {
        icono: '',
        colorIcono: '',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    flask: {
        icono: 'devicon-flask-original',
        colorIcono: '',
        img: false
    },
    sqlserver: {
        icono: 'devicon-microsoftsqlserver-plain',
        colorIcono: '',
        img: false
    },
    dotnet: {
        icono: 'devicon-dotnetcore-plain',
        colorIcono: '',
        img: false
    }
}

export const contenedores = {
    icono: 'fa-solid fa-truck-ramp-box',
    nombre: 'Sistema de control y registro de contenedores',
    descripcion: 'Aplicación web para gestionar contenedores y productos en un almacén, con seguimiento de tarimas y ubicación.',
    link: 'https://github.com/Salvador-97/Inbound_Manager-Web',
    desarrollo: false,
    estado: false,
    progreso: 1,
    lenguajes: ['bootstrap', 'javascript', 'python', 'flask', 'sql']
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

export const series = {
    icono: 'fa-solid fa-circle-play',
    nombre: 'Plataforma de series web',
    descripcion: 'Sitio web para explorar y ver series, con información detallada de temporadas y capítulos.',
    link: 'https://github.com/Salvador-97/Rari-Caturas-TV/tree/fix-css',
    desarrollo: true,
    estado: false,
    progreso: 0.8,
    lenguajes: ['html', 'css', 'javascript', 'sql', 'node']
}

export const portafolio = {
    icono: 'fa-solid fa-address-card',
    nombre: 'Portafolio Web',
    descripcion: 'Sitio web diseñado para presentar mis proyectos, habilidades y experiencia laboral.',
    link: 'https://salvador-97.github.io/Portafolio/',
    desarrollo: true,
    estado: true,
    progreso: 1,
    lenguajes: ['javascript', 'react', 'tailwind']
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

export const listaProyectos = {
    portafolio: portafolio,
    contenedores: contenedores,
    series: series,
    marbetes: marbetes,
    hospital: hospital
}

export const proyectos = ['portafolio', 'contenedores', 'series', 'marbetes', 'hospital']

export const lenguajesContenedores = ['html', 'css', 'bootstrap', 'javascript', 'python', 'sql'];
export const lenguajesMarbetes = ['python', 'cvs', 'excel'];
export const lenguajesSeries = ['html', 'css', 'javascript', 'sql', 'node'];
export const lenguajesPortafolio = ['react', 'javascript', 'css']

export function estado(estado, verdadero, falso) {
    let valorEstado = ''
    if (estado) {
        valorEstado = verdadero;
    } else if (!estado) {
        valorEstado = falso;
    }
    return valorEstado;
}