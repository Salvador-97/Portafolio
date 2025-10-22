import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { proyectos, listaProyectos, estado, lenguajes } from "../utils/informacionProyectos";
import clsx from 'clsx';
import { useState } from 'react';

export function Tarjeta({ informacion, lenguajesProyecto }) {
    const [masInfo, verInformacion] = useState(false);
    return (
        <>
            <div className={clsx(
                "rounded-[1.5rem] mx-auto w-[100%] pb-[1rem] flex flex-col"
            )}>
                <div className='text-center rounded-t-[1.5rem] w-full bg-moradotarjeta text-blanco'>
                    <i className={`${informacion.icono} fa-6x py-[0.8rem]`}></i>
                </div>
                <div className='relative flex justify-center'>
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
                                ! lenguajes[lenguaje].img
                                ? <i key={index} className={`${lenguajes[lenguaje].icono} pr-[0.5rem] text-[1.2rem]`}
                                  style={{ color: lenguajes[lenguaje].colorIcono }}></i>
                                : <img alt='icono' src={lenguajes[lenguaje].img} className="w-[13%] pr-[0.5rem]" />
                            ))}
                        </div>
                        <div className="pb-[1rem]">
                            <i className="fa-solid fa-gear fa-spin px-[0.5rem]"></i>
                            {estado(informacion.desarrollo, 'Completo', 'En desarrollo')}
                            <i className="fa-solid fa-gear fa-spin px-[0.5rem]"></i>
                        </div>
                        <div>
                            <i className='fa-solid fa-circle mr-[0.5rem]'
                                style={{ color: estado(informacion.estado, '#63E6BE', '#E84646') }}>
                            </i>
                            {estado(informacion.estado, 'Online', 'Offline')}
                        </div>
                    </div>
                    <div className={clsx(
                        "flex flex-col justify-center items-center text-center text-[#fff] m-[0.5rem]",
                        "transition-all duration-800 w-[90%]",
                        masInfo ? 'opacity-100' : 'opacity-0'
                    )}>
                        <div className="mb-[1rem] h-[6rem]">
                            {informacion.descripcion}
                        </div>
                        <div className="flex flex-col w-[80%]">
                            <div>
                                Progreso
                            </div>
                            <div className="h-[0.5rem] bg-[#8A5CF6] rounded-full overflow-hidden my-[0.5rem]"
                                style={{ width: `${informacion.progreso * 100}%` }}>
                            </div>
                            <p className="text-xs text-[#ccc] mt-1">
                                {Math.round(informacion.progreso * 100)}%
                            </p>
                        </div>
                        <a href={informacion.link} className={clsx(
                            'w-full my-[0.5rem] font-[700]',
                            masInfo ? 'pointer-events-auto' : 'pointer-events-none'
                            )}>
                        Visitar sitio
                            <i className="fa-solid fa-up-right-from-square text-[0.8rem] text-blanco pl-[0.5rem]"></i>
                        </a>
                    </div>
                </div>
                <button type='button' className='cursor-pointer w-full text-blanco z-20' onClick={() => verInformacion(!masInfo)}>
                    <i className={clsx(
                        "fa-solid fa-sort-down text-[1.28rem] transition-transform duration-300 ease-in-out",
                        masInfo ? 'transform rotate-180' : 'transform rotate-0'
                    )}></i>
                </button>
            </div>
        </>
    );
}

export function SlidesProyectos() {
    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation={true}
                pagination={{ el: '.custom-pagination', clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                speed={800}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },   // móviles
                    768: { slidesPerView: 2 },   // tablets
                    1024: { slidesPerView: 3 },  // pantallas medianas
                    1280: { slidesPerView: 4 }   // pantallas grandes
                }}
                className='rounded-b-[1rem] m-auto h-[25rem]'
            >
                {proyectos.map(proyecto => (
                    <SwiperSlide key={proyecto} className='bg-azulfondo rounded-[1.5rem]'>
                        <Tarjeta  informacion={listaProyectos[proyecto]} lenguajesProyecto={listaProyectos[proyecto].lenguajes} />
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide className='bg-azulfondo rounded-[1.5rem]'>
                <Tarjeta informacion={proyectoPortafolio} iconos={iconos.portafolio} lenguajesProyecto={lenguajesPortafolio} />
            </SwiperSlide>
            <SwiperSlide className='bg-azulfondo rounded-[1.5rem]'>
                <Tarjeta informacion={proyectoContenedores} iconos={iconos.contenedores} lenguajesProyecto={lenguajesContenedores} />
            </SwiperSlide>
            <SwiperSlide className='bg-azulfondo rounded-[1.5rem]'>
                <Tarjeta informacion={proyectoMarbetes} iconos={iconos.marbetes} lenguajesProyecto={lenguajesMarbetes} />
            </SwiperSlide>
            <SwiperSlide className='bg-azulfondo rounded-[1.5rem]'>
                <Tarjeta informacion={proyectoSeries} iconos={iconos.series} lenguajesProyecto={lenguajesSeries} />
            </SwiperSlide>
            <SwiperSlide className='bg-azulfondo rounded-[1.5rem]'>
                <Tarjeta informacion={proyectoHospital} iconos={iconos.hospital} lenguajesProyecto={lenguajesHospital} />
            </SwiperSlide> */}
            </Swiper>
            <div className="custom-pagination mt-4 text-center"></div>
        </>
    );
}

export default function Proyectos() {
    return (
        <>
            <SlidesProyectos />
        </>
    );
}