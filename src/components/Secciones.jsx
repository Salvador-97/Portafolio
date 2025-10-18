import '../index.css'
import Habilidades from './Habilidades.jsx';
import Proyectos from './Proyectos.jsx';
import AcercaMi from './AcercaMi.jsx';
import clsx from 'clsx';

export function Seccion({ Titulo, color }) {
    return (
        <div className={
            clsx('w-[90%] mx-auto text-center font-[700] text-[1.2rem] mb-[1rem]',
                'lg:text-[1.5rem]'
            )}
            style={{ color: color }}>
            <i className="fa-solid fa-terminal pr-[0.5rem]"></i>{Titulo}
        </div>
    );
}

export default function Secciones() {
    return (
        <>
            <div className='w-[90%] mx-auto mt-[2rem]' id='acerca'>
                <Seccion Titulo="Sobre mi..." color='#fff' />
                <AcercaMi />
            </div>
            
            <div className='w-[85%] mx-auto mt-[2rem]' id='habilidades'>
                <Seccion Titulo="Habilidades" color='#4F6CF4'/>
                <Habilidades />
            </div>
            <div className='w-4/5 mx-auto my-[2rem]' id='proyectos'>
                <Seccion Titulo="Proyectos" color='#8A5CF6'/>
                <Proyectos />
            </div>
        </>
    )
}