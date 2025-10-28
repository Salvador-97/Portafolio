export const listaFront = ['html', 'css', 'javascript', 'react', 'tailwind']
export const listaBack = ['python', 'sql', 'node', 'flask']

const htmlJSON = {
    icono: 'fa-brands fa-html5',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    colorIcono: '#E34F26',
    conocimiento: {
        item1: 'Estructura de páginas web semánticas',
        item2: 'Formularios, tablas y listas',
        item3: 'Integración con CSS y JavaScript',
        item4: 'Uso de plantillas dinámicas (EJS)'
    }
}

const cssJSON = {
    icono: 'fa-brands fa-css',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    colorIcono: '#1572B6',
    conocimiento: {
        item1: 'Estilizado de páginas web',
        item2: 'Responsive design con media queries',
        item3: 'Animaciones simples y transiciones'
    }
}

const javascriptJSON = {
    icono: 'fab fa-js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    colorIcono: '#F7DF1E',
    conocimiento: {
        item1: 'Manipulación del DOM',
        item2: 'Eventos y validación de formularios',
        item3: 'Interacción con APIs y datos dinámicos'
    }
}

const pythonJSON = {
    icono: 'fa-brands fa-python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    colorIcono: '#3776AB',
    conocimiento: {
        item1: 'Automatización de procesos',
        item2: 'UI con Tkinter/CustomTkinter',
        item3: 'Conexión a archivos CSV y SQLite',
        item4: 'Backend web con Flask'
    }
}

const sqlJSON = {
    icono: 'fa-solid fa-database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    colorIcono: '#336791',
    conocimiento: {
        item1: 'Consultas SELECT, INSERT, UPDATE, DELETE',
        item2: 'Diseño de tablas y relaciones simples',
        item3: 'Conexión con aplicaciones web (Flask, Node.js)',
    }
}

const reactJSON = {
    icono: 'fa-brands fa-react',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    colorIcono: '#61DAFB',
    conocimiento: {
        item1: 'Desarrollo de interfaces modulares.',
        item2: 'Componentes reutilizables.',
        // item3: 'Manejo de estado con props y hooks.',
        item4: 'Integración con APIs REST y control de flujo de datos.',
    }
}

const nodeJSON = {
    icono: 'fa-brands fa-node-js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
    colorIcono: '#339933',
    conocimiento: {
        item1: 'Creación de servidores REST y APIs básicas.',
        item2: 'Rutas, middlewares y conexión con bases de datos.',
        item3: 'Gestión de formularios y peticiones HTTP.',
    }
}

const tailwindJSON = {
    icono: 'devicon-tailwindcss-original',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    colorIcono: '#fff',
    conocimiento: {
        item1: 'Creación de servidores REST y APIs básicas.',
        item2: 'Rutas, middlewares y conexión con bases de datos.',
        item3: 'Gestión de formularios y peticiones HTTP.',
    }
}

const flaskJSON = {
    icono: 'devicon-flask-original-wordmark',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg',
    colorIcono: '#fff',
    conocimiento: {
        item1: 'Creación de servidores REST y APIs básicas.',
        item2: 'Rutas, middlewares y conexión con bases de datos.',
        item3: 'Gestión de formularios y peticiones HTTP.',
    }
}

export const lenguajes = {
    html: htmlJSON,
    css: cssJSON,
    javascript: javascriptJSON,
    python: pythonJSON,
    sql: sqlJSON,
    react: reactJSON,
    node: nodeJSON,
    tailwind: tailwindJSON,
    flask: flaskJSON
}

export const listaSkills = ['disciplina', 'resultados', 'organizacion', 'aprendizaje', 'equipo'];

const disciplinaJSON = {
    nombre: 'Disciplina',
    icono: 'fa-solid fa-bullseye',
    color: '#BD3953'
}

const resultadosJSON = {
    nombre: 'Orientación a resultados',
    icono: 'fa-solid fa-list-check',
    color: '#3AB330'
}

const organizacionJSON = {
    nombre: 'Organización',
    icono: 'fa-solid fa-chart-pie',
    color: '#D4B726'
}
const aprendizajeJSON = {
    nombre: 'Aprendizaje autónomo',
    icono: 'fa-solid fa-brain',
    color: '#F098CC'
}

const equipoJSON = {
    nombre: 'Trabajo en equipo',
    icono: 'fa-solid fa-people-group',
    color: '#A19C9D'
}

export const skills = {
    disciplina: disciplinaJSON,
    resultados: resultadosJSON,
    organizacion: organizacionJSON,
    aprendizaje: aprendizajeJSON,
    equipo: equipoJSON
}