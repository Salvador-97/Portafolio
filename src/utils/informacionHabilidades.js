export const listaFront = ['html', 'css', 'javascript', 'react', 'tailwind']
export const listaBack = ['python', 'sql', 'node', 'flask', 'mongo']

const htmlJSON = {
    icono: 'devicon-html5-plain',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    colorIcono: '#E34F26',
    conocimiento: {
        item1: 'Estructura semántica de páginas web',
        item2: 'Formularios accesibles con validaciones básicas',
        item3: 'Uso correcto de tablas, listas y contenido multimedia',
        item4: 'Integración con CSS y JavaScript'
    }
}

const cssJSON = {
    icono: 'fa-brands fa-css',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    colorIcono: '#1572B6',
    conocimiento: {
        item1: 'Estilizado y maquetación de interfaces web',
        item2: 'Diseño responsivo con media queries',
        item3: 'Flexbox y Grid para layouts',
        item4: 'Animaciones y transiciones simples'
    }
}

const javascriptJSON = {
    icono: 'fab fa-js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    colorIcono: '#F7DF1E',
    conocimiento: {
        item1: 'Manipulación del DOM',
        item2: 'Manejo de eventos y validación de formularios',
        item3: 'Consumo de APIs REST con fetch / axios',
        item4: 'Manejo de datos dinámicos'
    }
}

const pythonJSON = {
    icono: 'fa-brands fa-python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    colorIcono: '#3776AB',
    conocimiento: {
        item1: 'Automatización de procesos',
        item2: 'UI con Tkinter/CustomTkinter',
        item3: 'Conexión y manejo de bases de datos SQLite',
        item4: 'Desarrollo de backend web con Flask'
    }
}

const sqlJSON = {
    icono: 'fa-solid fa-database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    colorIcono: '#828282',
    conocimiento: {
        item1: 'Consultas SELECT, INSERT, UPDATE, DELETE',
        item2: 'Diseño de tablas y relaciones simples',
        item3: 'Integración con aplicaciones backend',
        item4: 'Manejo de datos para aplicaciones web'
    }
}

const reactJSON = {
    icono: 'fa-brands fa-react',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    colorIcono: '#61DAFB',
    conocimiento: {
        item1: 'Desarrollo de interfaces basadas en componentes',
        item2: 'Componentes reutilizables',
        item3: 'Renderizado condiciona',
        item4: 'Integración con APIs REST y control de flujo de datos',
    }
}

const nodeJSON = {
    icono: 'fa-brands fa-node-js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
    colorIcono: '#339933',
    conocimiento: {
        item1: 'Creación de servidores con Express',
        item2: 'Desarrollo de APIs REST básicas',
        item3: 'Manejo de rutas y middlewares',
        item4: 'Procesamiento de peticiones HTTP'
    }
}

const tailwindJSON = {
    icono: 'devicon-tailwindcss-original',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    colorIcono: '#38bdf8',
    conocimiento: {
        item1: 'Estilizado mediante utility-first CSS',
        item2: 'Diseño responsivo con clases utilitarias',
        item3: 'Creación de interfaces consistentes',
        item4: 'Integración con proyectos React'
    }
}

const flaskJSON = {
    icono: 'devicon-flask-original',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg',
    colorIcono: '#3A506B',
    conocimiento: {
        item1: 'Definición de rutas y controladores',
        item2: 'Renderizado de vistas con plantillas',
        item3: 'Manejo de formularios',
        item4: 'Conexión con bases de datos'
    }
}

const mongoJSON = {
    icono: 'devicon-mongodb-plain',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    colorIcono: '#4faa41',
    conocimiento: {
        item1: 'Modelado de datos orientado a documentos',
        item2: 'Integración con Node.js',
        item3: 'Manejo de colecciones y documentos',
        item4: 'Uso de MongoDB en proyectos web'
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
    flask: flaskJSON,
    mongo: mongoJSON
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