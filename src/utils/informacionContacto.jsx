import { ArrowDownToLine, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import toast from "react-hot-toast";


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

const notify = () => toast.success('¡Copiado!', {
        duration: 2000,
        position: "bottom-center"
    });

export const contacto = [
    {
        id: 'telefono',
        valor: '5582214610',
        icono: Phone,
        color: '#3C88DE'
    },
    {
        id: 'correo',
        valor: 'salvador.go_97@hotmail.com',
        icono: Mail,
        color: '#DE9E3C'
    },
    {
        id: 'ubicacion',
        valor: 'Teoloyucan, MX',
        icono: MapPin,
        color: '#DE3C3C'
    },
    {
        id: 'linkedin',
        icono: Linkedin,
        color: '#2787F5',
        valor: 'Linkedin',
        link: 'https://www.linkedin.com/in/salvadorgo97/'
    },
    {
        id: 'github',
        icono: Github,
        color: '#fff',
        valor: 'Github',
        link: 'https://github.com/Salvador-97'
    }

]