import '../index.css'
import Habilidades from './Habilidades.jsx';
import Proyectos from './Proyectos.jsx';
import AcercaMi from './AcercaMi.jsx';
import clsx from 'clsx';

export function Seccion({ Titulo }) {
    return (
        <div className={
            clsx('w-full sm:w-[50%] lg:w-[45%] gradienteTitulo rounded-[0.5rem] mx-auto text-center font-[700] text-[1.2rem]',
                'lg:text-[1.8rem] py-[0.5rem]'
            )}>
            <i className="fa-solid fa-chevron-left mr-[0.5rem]"></i>
            <span className='font-titulos'>{Titulo}</span>
            <i class="fa-solid fa-chevron-right ml-[0.5rem]"></i>
        </div>
    );
}

export default function Secciones() {
    return (
        <>
            <section className={clsx(
                "w-[85%] lg:min-h-dvh flex flex-col-reverse items-center mx-auto",
                "mb-[2rem] pt-[4rem]"
            )} id='acerca'>
                <AcercaMi />
            </section>
            
            <section className='w-[85%] mx-auto' id='habilidades'>
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