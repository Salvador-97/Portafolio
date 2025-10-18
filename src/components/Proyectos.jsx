import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import {
    estado, lenguajes, proyectoContenedores, proyectoMarbetes, proyectoSeries, proyectoPortafolio, lenguajesContenedores, lenguajesMarbetes, lenguajesSeries, lenguajesPortafolio, iconos
}
    from "../utils/informacionProyectos";

export function Tarjeta({ informacion, iconos, lenguajesProyecto }) {

    return (
        <>
            <a href={informacion.link} target="no_blank" className='relative rounded-[1.5rem] mx-auto w-[95%] pb-[1rem]'>
                <div className='text-center rounded-t-[1.5rem] w-full ' style={{ background: iconos.colorFondo }}>
                    <i className={`${iconos.icono} fa-6x py-[0.8rem]`} style={{ color: iconos.colorIcono }}></i>
                </div>
                <div className="text-[#fff] text-[0.9rem] m-[1rem] flex flex-col items-center justify-center text-center transform transition-all duration-700 ease-out group-hover:translate-y-[5rem] group-hover:opacity-0 z-10">
                    <div className="font-[700] h-[3.5rem] pb-[1rem]">{informacion.nombre}</div>
                    <div className="font-[700]">Tecnologias</div>
                    <div className="py-[0.5rem]">
                        {lenguajesProyecto.map((lenguaje, index) => (
                             <i key={index} className={`${lenguajes[lenguaje].icono} pr-[0.5rem] text-[1.2rem]`}
                                 style={{ color: lenguajes[lenguaje].colorIcono }}></i>
                            // <img src={lenguajes[lenguaje].img} className="w-[10%] mx-auto" />
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
                <div className="flex flex-col justify-center items-center text-center text-[#fff] opacity-0 z-0  group-hover:opacity-100 -translate-y-[12rem] transition-all duration-500 ease-out mx-[0.5rem] ">
                    <div className="mb-[1rem] ">
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
                </div>
            </a>
        </>
    );
}

export function SlidesProyectos() {
    return (
        <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            breakpoints={{
                480: { slidesPerView: 2 },
                640: { slidesPerView: 2 },   // móviles
                768: { slidesPerView: 3 },   // tablets
                1024: { slidesPerView: 4 },  // pantallas medianas
                1280: { slidesPerView: 4 }   // pantallas grandes
            }}
            className='rounded-b-[1rem] m-auto h-[22rem]'
        >
            <SwiperSlide className='bg-azulfondo rounded-[1.5rem]'>
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
        </Swiper>


    );
}

export default function Proyectos() {
    return (
        <>
            <SlidesProyectos />
        </>
    );
}