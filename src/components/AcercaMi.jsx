import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import '../index.css'

import { aboutMe, informacion, listaInformacion, listaLinks } from '../utils/informacionContacto';
import { listaEstudios, estudios, listaTrabajos, trabajos } from '../utils/informacionContacto';
import { copiar } from '../utils/copiarContenido';
import clsx from 'clsx';

export function InformacionSlides({ titulo, lista, colorFondo, colorTitulo, icono }) {
    const [cambioTarjeta, setTarjeta] = useState(null);
    return (
        <>
            <div className={clsx(
                "text-[1rem] text-blanco font-[700] w-full text-center py-[0.5rem] rounded-[0.5rem]",
                colorTitulo
            )}>
                {titulo}
            </div>
            <div className='w-full text-blanco'>
                {lista.map((valor) => (
                    <div key={valor} onClick={() => setTarjeta(valor === cambioTarjeta ? null : valor)}
                        className={clsx(
                            "w-full flex flex-col text-center py-[0.5rem] justify-between"
                        )}>
                        <div className='font-[600] bg-azultitulosfondo py-[0.5rem] rounded-[0.5rem]'>
                            {estudios[valor]?.nombre || trabajos[valor]?.nombre} <br />
                            {estudios[valor]?.carrera || trabajos[valor]?.puesto} <br />
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
        <div className='sm:row-span-2'>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ el: '.custom-pagination', clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                speed={800}
                className='m-auto rounded-b-[1rem] md:w-full'
            >
                <SwiperSlide className='flex-col text-center text-blanco'>
                    <div className={clsx(
                        "w-full rounded-[0.5rem] font-[700] py-[0.5rem] mb-[0.5rem]",
                        "bg-[#3462CF]"
                    )}>
                        Sobre mi...
                    </div>
                    <div className='bg-azultitulosfondo rounded-[0.5rem] text-center'>
                        <p className='w-[90%] mx-auto my-[1rem]'>{aboutMe}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex-col'>
                    <InformacionSlides titulo='Estudios' lista={listaEstudios}
                        colorTitulo='bg-azulestudiosfondo'
                        icono='fa-solid fa-laptop-code'
                    />
                </SwiperSlide>
                <SwiperSlide className='flex-col'>
                    <InformacionSlides titulo='Trabajos' lista={listaTrabajos}
                        colorTitulo='bg-rojotrabajosfondo'
                        icono='fa-solid fa-briefcase'
                    />
                </SwiperSlide>
            </Swiper>
            <div className="custom-pagination mb-[0.5rem] text-center"></div>
        </div>
    );
}

export function Enlace({ info }) {
    return (
        <>
            <a href={informacion[info].link} target='_blank'
                className='text-blanco font-[600]'>
                <i className={`${informacion[info].icono} pr-[0.5rem]`}></i>
                {informacion[info].valor}
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

export function Contacto({ lista, titulo }) {
    return (
        <div className=''>
            <h3 className={clsx(
                "font-[700] text-blanco text-center border-b-2 border-transparent rounded-[0.4rem]",
                "py-[0.5rem] mb-[0.5rem] bg-[#3462CF]"
            )}>
                {titulo}
            </h3>
            <ul className="text-center text-[1rem] mx-auto my-[0.5rem] bg-azultitulosfondo py-[0.5rem] rounded-[0.5rem]">
                {lista.map((info, index) => (
                    <li key={index} className='flex justify-center'>
                        {informacion[info].enlace ? <Enlace info={info} /> : <Dato info={info} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function AcercaMi() {
    return (
        <div className="mx-auto grid gap-2 grid-cols-1 sm:grid-cols-2 md:gap-4 lg:w-[60%]">
            <Carousel />
            <Contacto lista={listaLinks} titulo={"Links de contacto"} />
            <Contacto lista={listaInformacion} titulo={"Información"} />
        </div>
    );
}