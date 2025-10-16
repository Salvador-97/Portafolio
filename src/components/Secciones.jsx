import '../index.css'
import Habilidades from './Habilidades.jsx';
import Proyectos from './Proyectos.jsx';
import AcercaMi from './AcercaMi.jsx';

export function Seccion({Titulo, color}) {
    return (
        <div>
            <h3 className={`w-1/4 text-center text-[2rem] mx-auto my-[2.5rem] 
            font-[700]`}
            style={{color: color}}>
                <i className="fa-solid fa-terminal pr-[0.5rem]"></i>{Titulo}
            </h3>
        </div>
    );
}

export default function Secciones() {
    return(
        <>
            <div className='w-3/4 mx-auto my-[4rem]'>
                <Seccion Titulo="Sobre mi..." color='#fff'/>
                <AcercaMi />
            </div>
            {/*
            <div className='w-[85%] mx-auto my-[4rem]'>
                <Seccion Titulo="Habilidades" color='#4F6CF4'/>
                <Habilidades />
            </div>
            <div className='w-4/5 mx-auto my-[4rem] border border-[#fff]'>
                <Seccion Titulo="Proyectos" color='#8A5CF6'/>
                <Proyectos />
            </div> */}
        </>
    )
}