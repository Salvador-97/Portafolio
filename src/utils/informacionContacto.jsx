import { ArrowDownToLine, Github, Linkedin, Mail, MapPin, Phone, } from "lucide-react";

export const aboutMe = (
    <>
        Desarrollo aplicaciones web <strong>full-stack</strong>,
        desde la lógica de <span className="text-moradoLetra font-bold">backend</span> hasta interfaces <span className="text-moradoLetra font-bold">frontend</span> funcionales,
        enfocadas en claridad, <span className="text-moradoLetra font-bold">mantenibilidad</span> y buen uso de datos.
    </>
)

export const saludo = (
    <>
    ¡Hola mundo! Soy<br></br><span className="gradienteTitulo">Salvador Gutiérrez</span>
    </>
)

export const listaInformacion = ['telefono', 'correo', 'direccion'];
export const listaLinks = ['github', 'linkedin', 'cv']

export const informacion = {
    nombre: {
        valor: 'Salvador Gutiérrez Olvera',
        icono: 'fa-solid fa-user',
        color: '#fff',
        enlace: false

    },
    telefono: {
        valor: '5582214610',
        icono: Phone,
        color: '#3C88DE',
        enlace: false

    },
    correo: {
        valor: 'salvador.go_97@hotmail.com',
        icono: Mail,
        color: '#DE9E3C',
        enlace: false
    },
    direccion: {
        valor: 'Teoloyucan, Edo. de Méx.',
        icono: MapPin,
        color: '#DE3C3C',
        enlace: false
    },
    github: {
        valor: 'Salvador_97',
        icono: Github,
        color: '#fff',
        link: 'https://github.com/Salvador-97',
        enlace: true
    },
    linkedin: {
        valor: 'salvadorgo97',
        icono: Linkedin,
        color: '#2787F5',
        link: 'https://www.linkedin.com/in/salvadorgo97/',
        enlace: true
    }
    ,
    cv: {
        valor: 'CV',
        icono: ArrowDownToLine,
        color: '#2ECF29',
        link: '/CV.pdf',
        enlace: true
    }
}


export const listaEstudios = ['bachillerato', 'universidad'];

export const estudios = {
    universidad: {
        nombre: 'Facultad de Ingenieria, UNAM',
        carrera: 'Ingenieria en Computación (Incompleta)',
        generacion: 'Agosto 2015 -- Mayo 2019',
        ubicacion: 'Coyoacán, CDMX'
    },
    bachillerato: {
        nombre: ' CCH Vallejo, UNAM',
        carrera: 'Bachillerato',
        generacion: 'Agosto 2012 -- Junio 2015',
        ubicacion: ' Gustavo A. Madero, CDMX'
    }
}

export const listaTrabajos = ['selectshop', 'prova'];

export const trabajos = {
    prova: {
        nombre: 'Procesos de Valor Agregado',
        puesto: 'Almacenista/Embarques',
        estancia: 'Marzo 2025 -- Septiembre 2025',
        ubicacion: 'Tepotzotlán, Méx.'
    },
    selectshop: {
        nombre: 'Comercializadora de Marcas JSB',
        puesto: 'Ayudante General',
        estancia: 'Junio 2024 -- Enero 2025',
        ubicacion: 'Tepotzotlán, Méx.'
    }
}