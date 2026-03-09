import { proyectos, estado, lenguajes } from "../utils/informacionProyectos";
import clsx from 'clsx';

export function Tarjeta({ informacion }) {
    return (
        <div className="relative">
            <div className={clsx(
                "rounded-[1.5rem] border border-blanco",
                "flex flex-col group h-full justify-center",
                "bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl",
                "shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            )}>
                <div className='flex mx-[1.5rem] mt-[1rem]'>
                    <div className={clsx(
                        'border-2 border-white/10 transition-all duration-300 group-hover:border-white/40 aspect-square rounded-full flex justify-center items-center text-center'
                    )}>
                        <i className={clsx(
                            `${informacion.icono}`,
                            "text-[2rem] p-[0.8rem] text-white/40 transition-all duration-300 group-hover:text-white/70"
                        )}></i>
                    </div>
                    <div className='flex flex-col justify-center ml-[1rem]'>
                        <span className='text-blanco font-bold'>{informacion.categoria}</span>
                        <span className='text-gray-100'>{informacion.tiempo}</span>
                    </div>

                </div>
                <div className='m-[1.5rem]'>
                    <h1 className='text-blanco text-[1.2rem] font-bold mb-2'>{informacion.nombre}</h1>
                    <div className='flex flex-wrap gap-2'>
                        {informacion.lenguajes.map(lenguaje => {
                            const tecnologia = lenguajes[lenguaje];

                            return !tecnologia.img
                                ? (
                                    <i
                                        key={tecnologia.id}
                                        className={`${tecnologia.icono} text-[2rem]`}
                                        style={{ color: tecnologia.colorIcono }}>
                                    </i>
                                )
                                : (
                                    <img
                                        key={tecnologia.id}
                                        className='w-8'
                                        src={tecnologia.img}
                                        alt={tecnologia.id} />
                                )
                        })}
                    </div>
                </div>
                <div className='mx-[1.5rem] mb-[1.5rem] flex justify-between'>
                    <div className='text-blanco w-[45%] flex flex-col'>
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
                <a className="absolute inset-0"></a>
            </div>
        </div>
    );
}

export default function Proyectos() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
            {proyectos.map(proyecto => (
                <Tarjeta key={proyecto.id} informacion={proyecto} lenguajesProyecto={proyecto.lenguajes} />
            ))}
        </div>
    );
}
