import htmlIcon from "../assets/icons/html5.svg?react"
import bootstrapIcon from "../assets/icons/bootstrap.svg?react"
import cssIcon from "../assets/icons/css3.svg?react"
import javascriptIcon from "../assets/icons/javascript.svg?react"
import sassIcon from "../assets/icons/sass.svg?react"
import reactIcon from "../assets/icons/react.svg?react"
import tailwindcssIcon from "../assets/icons/tailwindcss.svg?react"
import pythonIcon from "../assets/icons/python.svg?react"
import nodejsIcon from "../assets/icons/nodejs.svg?react"
import databaseIcon from "../assets/icons/database.svg?react"
import flaskIcon from "../assets/icons/flask.svg?react"
import mongodbIcon from "../assets/icons/mongodb.svg?react"

export const habilidades = [
    {
        id: 'HTML',
        icon: htmlIcon,
        colorIcono: '#E34F26',
        colorSecundario: '#FFF',
        conocimiento: [
            'Estructura semántica de páginas web',
            'Formularios accesibles con validaciones básicas',
            'Uso correcto de tablas, listas y contenido multimedia',
            'Integración con CSS y JavaScript'
        ],
        categoria: 'Front'
    },
    {
        id: 'CSS',
        icon: cssIcon,
        colorIcono: '#1572B6',
        conocimiento: [
            'Estilizado y maquetación de interfaces web',
            'Diseño responsivo con media queries',
            'Flexbox y Grid para layouts',
            'Animaciones y transiciones simples'
        ],
        categoria: 'Front'
    },
    {
        id: 'Javascript',
        icon: javascriptIcon,
        colorIcono: '#F7DF1E',
        colorSecundario: '#323330',
        conocimiento: [
            'Manipulación del DOM',
            'Manejo de eventos y validación de formularios',
            'Consumo de APIs REST con fetch / axios',
            'Manejo de datos dinámicos'
        ],
        categoria: 'Front'
    },
    {
        id: 'Bootstrap',
        icon: bootstrapIcon,
        colorIcono: '#7952B3',
        conocimiento: [
            'Grid system responsivo',
            'Componentes de formulario y botones',
            'Utilidades de espaciado y alineación',
            'Implementación de modales'
        ],
        categoria: 'Front'
    },
    {
        id: 'Python',
        icon: pythonIcon,
        colorIcono: '#306998',
        colorSecundario: '#FFD845',
        conocimiento: [
            'Automatización de procesos',
            'UI con Tkinter/CustomTkinter',
            'Conexión y manejo de bases de datos SQLite',
            'Desarrollo de backend web con Flask'
        ],
        categoria: 'Back'
    },
    {
        id: 'Base de Datos',
        icon: databaseIcon,
        colorIcono: '#374151',
        conocimiento: [
            'Consultas SELECT, INSERT, UPDATE, DELETE',
            'Diseño de tablas y relaciones simples',
            'Integración con aplicaciones backend',
            'Manejo de datos para aplicaciones web'
        ],
        categoria: 'Back'
    },
    {
        id: 'React',
        icon: reactIcon,
        colorIcono: '#61DAFB',
        conocimiento: [
            'Desarrollo de interfaces basadas en componentes',
            'Componentes reutilizables',
            'Renderizado condicional',
            'Integración con APIs REST y control de flujo de datos',
        ],
        categoria: 'Front'
    },
    {
        id: 'Node.js',
        icon: nodejsIcon,
        colorIcono: '#339933',
        conocimiento: [
            'Creación de servidores con Express',
            'Desarrollo de APIs REST básicas',
            'Manejo de rutas y middlewares',
            'Procesamiento de peticiones HTTP'
        ],
        categoria: 'Back'
    },
    {
        id: 'Sass',
        icon: sassIcon,
        colorIcono: '#CC6699',
        conocimiento: [
            'Variables y modularización con @use',
            'Nesting y pseudo-selectores',
            'Media queries responsivas',
            'Estructuración y mantenimiento de CSS escalable'
        ],
        categoria: 'Front'
    },
    {
        id: 'Tailwind',
        icon: tailwindcssIcon,
        colorIcono: '#06B6D4',
        conocimiento: [
            'Estilizado mediante utility-first CSS',
            'Diseño responsivo con clases utilitarias',
            'Creación de interfaces consistentes',
            'Integración con proyectos React'
        ],
        categoria: 'Front'
    },
    {
        id: 'Flask',
        icon: flaskIcon,
        colorIcono: '#FFF',
        conocimiento: [
            'Definición de rutas y controladores',
            'Renderizado de vistas con plantillas',
            'Manejo de formularios',
            'Conexión con bases de datos'
        ],
        categoria: 'Back'
    },
    {
        id: 'MongoDB',
        icon: mongodbIcon,
        colorIcono: '#47A248',
        conocimiento: [
            'Modelado de datos orientado a documentos',
            'Integración con Node.js',
            'Manejo de colecciones y documentos',
            'Uso de MongoDB en proyectos web'
        ],
        categoria: 'Back'
    }
]

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