import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import '../index.css'

import { aboutMe, informacion, listaInfo } from '../utils/informacionContacto';
import { listaEstudios, estudios, listaTrabajos, trabajos } from '../utils/informacionContacto';
import { copiar } from '../utils/copiarContenido';
import clsx from 'clsx';

export function InformacionSlides({ titulo, lista, colorFondo, colorTitulo, icono }) {
    const [cambioTarjeta, setTarjeta] = useState(null);
    return (
        <>
            <div className={clsx(
                "text-[1.5rem] text-blanco font-[700] w-full text-center py-[0.5rem] border-y-6 border-double",
                colorTitulo
            )}
            // style={{ background: colorTitulo }}
            >
                {/* <i class="fa-solid fa-laptop-code pr-[0.5rem]"></i> */}
                <i className={`${icono}`}></i> {titulo} <i className={`${icono}`}></i>
            </div>
            <div className='relative h-[55%] w-full text-blanco'>
                {lista.map((valor) => (
                    <div key={valor} onClick={() => setTarjeta(valor === cambioTarjeta ? null : valor)}
                        className={
                            clsx(`h-full w-full flex flex-col absolute text-center p-[0.5rem] justify-between
                    transition-opacity duration-500
                    ${valor === cambioTarjeta ? 'opacity-0' : 'opacity-100'}`,
                                colorFondo)}>
                        <div className='font-[600]'>
                            {estudios[valor]?.nombre || trabajos[valor]?.nombre} <br />
                            {estudios[valor]?.carrera || trabajos[valor]?.puesto}
                        </div>
                        <div className='bg-blanco'></div>
                        <div>
                            {estudios[valor]?.generacion || trabajos[valor]?.estancia} <br />
                            {estudios[valor]?.ubicacion || trabajos[valor]?.ubicacion}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


export function Carousel() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            className='h-[15rem] m-auto rounded-b-[1rem] sm:rounded-bl-none sm:rounded-r-[1rem] md:w-[70%]'
        >
            <SwiperSlide className='bg-[#17854A]'>
                <div className={clsx(
                    "m-auto flex items-center justify-center w-[80%] max-h-[12rem]",
                    "text-blanco text-center font-[700] text-[0.9rem]"
                )}>
                    {aboutMe}
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-azulestudiosfondo flex-col'>
                <InformacionSlides titulo='Estudios' lista={listaEstudios}
                    colorFondo='bg-azulestudiosfondo' colorTitulo='bg-azulestudiostitulo'
                    icono='fa-solid fa-laptop-code'
                />
            </SwiperSlide>
            <SwiperSlide className='bg-rojotrabajosfondo flex-col'>
                <InformacionSlides titulo='Trabajos' lista={listaTrabajos}
                    colorFondo='bg-rojotrabajosfondo' colorTitulo='bg-rojotrabajostitulo'
                    icono='fa-solid fa-briefcase'
                />
            </SwiperSlide>
        </Swiper>
    );
}

export function Enlace({ info }) {
    return (
        <>
            <a href={informacion[info].link} target='_blank'
                className='text-blanco font-[600]'>
                {informacion[info].valor}
                {/* <i className="fa-solid fa-arrow-up-right-from-square text-[0.5rem] ml-[0.5rem]"></i> */}
            </a>
        </>
    );
}

export function Dato({ info }) {
    return (
        <>
            <div className='text-gris font-[500]' onClick={() => copiar(info)} name={info}>
                {informacion[info].valor}
            </div>
        </>
    );
}

export function Contacto() {
    return (
        <ul className="text-[1rem] w-[90%] mx-auto my-[0.5rem]">
            {listaInfo.map((info, index) => (
                <li key={index} className='flex'>
                    <i className={`${informacion[info].icono} pr-[0.5rem]`}
                        style={{ color: informacion[info].color }}></i>
                    {informacion[info].enlace ? <Enlace info={info} /> : <Dato info={info} />}
                </li>
            ))}
        </ul>
    );
}

export default function AcercaMi() {
    return (
        <div className="mx-auto sm:flex lg:w-[70%]">
            <div className={
                clsx("bg-negrofondo flex items-center p-[0.5rem] rounded-t-[1rem]",
                    "sm:rounded-tr-none sm:rounded-l-[1rem] md:w-[50%]"
                )}>
                <Contacto />
            </div>
            <Carousel />
        </div>
    );
}