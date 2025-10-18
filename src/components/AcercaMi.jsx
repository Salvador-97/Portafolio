import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import '../index.css'

import { aboutMe, informacion, listaInfo } from '../utils/informacionContacto';
import { listaEstudios, estudios, listaTrabajos, trabajos } from '../utils/informacionContacto';
import { copiar } from '../utils/copiarContenido';
import { act } from 'react';
import clsx from 'clsx';

export function InformacionSlides({ titulo, lista, colorFondo }) {
    const [cambioTarjeta, setTarjeta] = useState(null);
    return (
        <div className='text-blanco font-[700] text-center h-[90%] mt-[0.5rem]'>
            <div className='text-[1.3rem]'>{titulo}</div>
            <div className='relative h-[75%] w-[90%] mx-auto'>
                {lista.map((valor) => (
                <div key={valor} onClick={() => setTarjeta(valor === cambioTarjeta ? null : valor)}
                className={
                    clsx(`h-full w-full flex flex-col absolute text-center p-[0.5rem] rounded-[1rem] justify-between
                    transition-opacity duration-500
                    ${valor === cambioTarjeta ? 'opacity-0' : 'opacity-100'}`)}
                style={{background: colorFondo}}>
                    <div>
                        {estudios[valor]?.nombre || trabajos[valor]?.nombre} <br />
                        {estudios[valor]?.carrera || trabajos[valor]?.puesto}
                    </div>
                    <div>
                        {estudios[valor]?.generacion || trabajos[valor]?.estancia} <br />
                        {estudios[valor]?.ubicacion || trabajos[valor]?.ubicacion}
                    </div>
                </div>
            ))}
            </div>
        </div>
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
            className='rounded-b-[1rem] h-[15rem] m-auto'
        >
            <SwiperSlide className='bg-[#17854A] h-full'>
                <div className='m-auto flex items-center w-[80%] h-[85%] text-blanco text-center font-[500] text-[0.9rem]'>
                    {aboutMe}
                </div>
            </SwiperSlide>
            <SwiperSlide className='bg-[#178582]'>
                <InformacionSlides titulo='Estudios' lista={listaEstudios} colorFondo='#0F5E5C' />
            </SwiperSlide>
            <SwiperSlide className='bg-[#851752]'>
                <InformacionSlides titulo='Trabajos' lista={listaTrabajos} colorFondo='#5E0F3A'/>
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
        <div className="">
            <div className="p-[0.5rem] rounded-t-[1rem] bg-negrofondo">
                <Contacto />
            </div>
            <Carousel />
        </div>
    );
}