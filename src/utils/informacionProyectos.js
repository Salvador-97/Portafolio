
export const iconos = {
    contenedores: {
        icono: 'fa-solid fa-truck-ramp-box',
        colorIcono: '#F5F5F4',
        colorFondo: '#6D44E0'
    },
    series: {
        icono: 'fa-solid fa-circle-play',
        colorIcono: '#F5F5F4',
        colorFondo: '#6D44E0'
    },
    marbetes: {
        icono: 'fa-solid fa-file-circle-check',
        colorIcono: '#F5F5F4',
        colorFondo: '#6D44E0'
    },
    portafolio: {
        icono: 'fa-solid fa-address-card',
        colorIcono: '#F5F5F4',
        colorFondo: '#6D44E0'
    }
}

export const lenguajes = {
    html: {
        icono: 'fa-brands fa-html5',
        colorIcono: '#FF851B',
    },
    css: {
        icono: 'fa-brands fa-css3',
        colorIcono: '#0059A6'
    },
    bootstrap: {
        icono: 'fa-brands fa-bootstrap',
        colorIcono: '#6B2099'
    },
    javascript: {
        icono: 'fab fa-js',
        colorIcono: '#F7CD34'
    },
    python: {
        icono: 'fa-brands fa-python',
        colorIcono: '#0059A6'
    },
    cvs: {
        icono: 'fa-brands fa-css3',
        colorIcono: '#0074D9'
    },
    excel: {
        icono: 'fa-solid fa-file-excel',
        colorIcono: '#188531'
    },
    sql: {
        icono: 'fa-solid fa-database',
        colorIcono: '#9FA6A2'
    },
    node: {
        icono: 'fa-brands fa-node-js',
        colorIcono: '#0D5928'
    },
    react: {
        icono: 'fa-brands fa-react',
        colorIcono: '#26B6E0'
    }
}

export const proyectoContenedores = {
    nombre: 'Sistema de control y registro de contenedores',
    descripcion: 'Aplicación web para gestionar contenedores y productos en un almacén, con seguimiento de tarimas y ubicación.',
    link: '#',
    desarrollo: false,
    estado: false,
    progreso: 1
}

export const proyectoMarbetes = {
    nombre: 'Sistema de generación y gestión de marbetes',
    descripcion: 'Aplicación de escritorio para crear y administrar marbetes de productos, con manejo automatizado de datos.',
    link: '#',
    desarrollo: false,
    estado: true,
    progreso: 0.75
}

export const proyectoSeries = {
    nombre: 'Plataforma de series web',
    descripcion: 'Sitio web para explorar y ver series, con información detallada de temporadas y capítulos.',
    link: '#',
    desarrollo: true,
    estado: false,
    progreso: 0.8
}

export const proyectoPortafolio = {
    nombre: 'Portafolio Web',
    descripcion: 'Sitio web diseñado para presentar mis proyectos, habilidades y experiencia laboral.',
    link: 'https://salvador-97.github.io/',
    desarrollo: true,
    estado: true,
    progreso: 1
}

export const lenguajesContenedores = ['html', 'css', 'bootstrap', 'javascript', 'python', 'sql'];
export const lenguajesMarbetes = ['python', 'cvs', 'excel'];
export const lenguajesSeries = ['html', 'css', 'javascript', 'sql', 'node'];
export const lenguajesPortafolio = ['react', 'javascript', 'css']

export function estado (estado, verdadero, falso){
    let valorEstado = ''
    if (estado) {
        valorEstado = verdadero;
    } else if (!estado) {
        valorEstado = falso;
    }
    return valorEstado;
}