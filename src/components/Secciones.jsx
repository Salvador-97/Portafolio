import '../index.css'
import Habilidades from './Habilidades.jsx';
import Proyectos from './Proyectos.jsx';
import AcercaMi from './AcercaMi.jsx';
import clsx from 'clsx';

export function Seccion({ Titulo }) {
    return (
        <div className={
            clsx('w-[70%] sm:w-[50%] lg:w-[40%] rounded-[0.5rem] mx-auto text-center font-[700] text-[1.2rem] mb-[1rem] bg-azultitulosfondo',
                'lg:text-[1.5rem] text-blanco py-[0.5rem]'
            )}>
            {/* <img src="Portafolio/bracket.png" alt="" className='w-[20%]'/>  */}
            <i className="fa-solid fa-chevron-left mr-[0.5rem]"></i>
            {Titulo}
            <i class="fa-solid fa-chevron-right ml-[0.5rem]"></i>
        </div>
    );
}

export default function Secciones() {
    return (
        <>
            <section className='w-[85%] mx-auto mt-[2rem]' id='acerca'>
                <Seccion Titulo="Salvador Gutiérre Olvera" />
                <AcercaMi />
            </section>
            
            <section className='w-[85%] mx-auto mb-[2rem]' id='habilidades'>
                <Seccion Titulo="Habilidades"/>
                <Habilidades />
            </section>
            <section className='w-full mx-auto' id='proyectos'>
                <Seccion Titulo="Proyectos"/>
                <Proyectos />
            </section>
        </>
    )
}