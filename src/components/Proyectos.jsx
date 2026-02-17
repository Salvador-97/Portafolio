import { proyectos, estado, lenguajes } from "../utils/informacionProyectos";
import clsx from 'clsx';

export function Tarjeta({ informacion }) {
    return (
        <div className="relative">
            <div className={clsx(
                "rounded-[1.5rem] border border-blanco",
                "flex flex-col group",
                "bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl",
                "shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            )}>
                <div className='flex mx-[1.5rem] mt-[1rem]'>
                    <div className={clsx(
                        'border-2 border-white/10 transition-all duration-300 group-hover:border-white/40 w-16 h-16 rounded-full flex justify-center items-center text-center'
                    )}>
                        <i className={clsx(
                            `${informacion.icono}`,
                            "text-[2rem] text-white/40 transition-all duration-300 group-hover:text-white/70"
                        )}></i>
                    </div>
                    <div className='flex flex-col justify-center ml-[1rem]'>
                        <span className='text-blanco font-bold'>{informacion.categoria}</span>
                        <span className='text-gray-100'>{informacion.tiempo}</span>
                    </div>

                </div>
                <div className='m-[1.5rem]'>
                    <h1 className='text-blanco text-[1.2rem] font-bold '>{informacion.nombre}</h1>
                    <div className='flex mt-[0.5rem]'>
                        {informacion.lenguajes.map(lenguaje => {
                            const tecnologia = lenguajes[lenguaje];

                            return !tecnologia.img
                                ? (
                                    <i
                                        key={tecnologia.id}
                                        className={`${tecnologia.icono} mr-[0.5rem] text-[2rem]`}
                                        style={{ color: tecnologia.colorIcono }}>
                                    </i>
                                )
                                : (
                                    <img
                                        key={tecnologia.id}
                                        className='w-8 mr-[0.5rem]'
                                        src={tecnologia.img}
                                        alt={tecnologia.id} />
                                )
                        })}
                    </div>
                </div>
                <div className='mx-[1.5rem] mb-[1.5rem] flex justify-between'>
                    <div className='text-blanco w-[45%]'>
                        <span>Progreso</span>
                        <div className="h-[0.8rem] bg-gradienteBarra rounded-full overflow-hidden my-[0.5rem]"
                            style={{ width: `${informacion.progreso * 100}%` }}>
                        </div>
                        <span className="text-xs text-[#ccc] mt-1">
                            {Math.round(informacion.progreso * 100)}%
                        </span>
                        <div>
                            <i className='fa-solid fa-circle mr-[0.5rem]'
                                style={{ color: estado(informacion.online, '#63E6BE', '#E84646') }}>
                            </i>
                            {estado(informacion.online, 'Online', 'Offline')}
                        </div>
                    </div>
                    <div className='w-[50%] flex flex-col items-center justify-between'>
                        <a
                            href={informacion.demo}
                            target="_blank"
                            className={clsx(
                                'w-full rounded-[1rem] border border-rosa transition-all duration-300',
                                'hover:bg-rosa  text-blanco text-center p-[0.4rem] font-bold z-10'
                            )}>
                            Demo
                            <i className="fa-solid fa-arrow-up-right-from-square ml-[0.5rem]"></i>
                        </a>
                        <a
                            href={informacion.github}
                            target="_blank"
                            className={clsx(
                                'w-full flex items-center justify-around rounded-[1rem] border border-rosa',
                                'transition-all duration-300  hover:bg-rosa text-blanco text-center p-[0.4rem] font-bold z-10'
                            )}>
                            <i className="fa-brands fa-github"></i>
                            GitHub
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <a href="#" className="absolute inset-0"></a>

                {/* <div className='relative flex justify-center'>
                    <div className={
                        clsx(
                            "text-[#fff] text-[0.9rem] text-center m-[1rem] flex flex-col items-center justify-center",
                            "transition-all duration-800 absolute",
                            masInfo ? 'translate-y-[160%]' : 'opacity-100'
                        )}>
                        <div className="font-[700] h-[3.5rem] pb-[1rem]">{informacion.nombre}</div>
                        <div className="font-[700]">Tecnologias</div>
                        <div className="py-[0.5rem] flex justify-center">
                            {lenguajesProyecto.map((lenguaje, index) => (
                                !lenguajes[lenguaje].img
                                    ? <i key={index} className={`${lenguajes[lenguaje].icono} pr-[0.5rem] text-[1.2rem]`}
                                        style={{ color: lenguajes[lenguaje].colorIcono }}></i>
                                    : <img alt='icono' src={lenguajes[lenguaje].img} className="w-[13%] pr-[0.5rem]" />*/}
            </div>
        </div>
    );
}

export default function Proyectos() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
            {proyectos.map(proyecto => (
                <Tarjeta informacion={proyecto} lenguajesProyecto={proyecto.lenguajes} />
            ))}
        </div>
    );
}
