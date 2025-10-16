export const listaFront = ['html', 'css', 'javascript', 'react']
export const listaBack = ['python', 'sql', 'node']

const htmlJSON = {
    icono: 'fa-brands fa-html5',
    colorIcono: '#FF851B',
    conocimiento: {
        item1: 'Estructura de páginas web semánticas',
        item2: 'Formularios, tablas y listas',
        item3: 'Integración con CSS y JavaScript',
        item4: 'Uso de plantillas dinámicas (EJS)'
    }
}

const cssJSON = {
    icono: 'fa-brands fa-css',
    colorIcono: '#0059A6',
    conocimiento: {
        item1: 'Estilizado de páginas web',
        item2: 'Responsive design con media queries',
        item3: 'Animaciones simples y transiciones'
    }
}

const javascriptJSON = {
    icono: 'fab fa-js',
    colorIcono: '#F7CD34',
    conocimiento: {
        item1: 'Manipulación del DOM',
        item2: 'Eventos y validación de formularios',
        item3: 'Interacción con APIs y datos dinámicos'
    }
}

const pythonJSON = {
    icono: 'fa-brands fa-python',
    colorIcono: '#0074D9',
    conocimiento: {
        item1: 'Automatización de procesos',
        item2: 'UI con Tkinter/CustomTkinter',
        item3: 'Conexión a archivos CSV y SQLite',
        item4: 'Backend web con Flask'
    }
}

const sqlJSON = {
    icono: 'fa-solid fa-database',
    colorIcono: '#AAB6BD',
    conocimiento: {
        item1: 'Consultas SELECT, INSERT, UPDATE, DELETE',
        item2: 'Diseño de tablas y relaciones simples',
        item3: 'Conexión con aplicaciones web (Flask, Node.js)',
    }
}

const reactJSON = {
    icono: 'fa-brands fa-react',
    colorIcono: '#1EC7C7',
    conocimiento: {
        item1: 'Desarrollo de interfaces modulares.',
        item2: 'Componentes reutilizables.',
        // item3: 'Manejo de estado con props y hooks.',
        item4: 'Integración con APIs REST y control de flujo de datos.',
    }
}

const nodeJSON = {
    icono: 'fa-brands fa-node-js',
    colorIcono: '#1C993F',
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
    node: nodeJSON
}

export const listaSkills = ['disciplina', 'resultados', 'organizacion', 'aprendizaje', 'equipo'];

const disciplinaJSON = {
    nombre: 'Disciplina',
    icono: 'fa-solid fa-bullseye',
    color: '#fff'
}

const resultadosJSON = {
    nombre: 'Orientación a resultados',
    icono: 'fa-solid fa-clipboard-check',
    color: '#3AB330'
}

const organizacionJSON = {
    nombre: 'Organización',
    icono: 'fa-solid fa-chart-pie',
    color: '#302C82'
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