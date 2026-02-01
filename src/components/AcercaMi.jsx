import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import toast, { Toaster } from 'react-hot-toast';
import { ArrowDownToLine } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination'
import '../index.css'

import { informacion, listaInformacion, listaLinks } from '../utils/informacionContacto';
import { listaEstudios, estudios, listaTrabajos, trabajos } from '../utils/informacionContacto';
import { Seccion } from './Secciones';
import { copiar } from '../utils/copiarContenido';
import clsx from 'clsx';
import { Icon } from 'lucide-react';

export function InformacionSlides({ titulo, lista, colorFondo, colorTitulo, icono }) {
    const [cambioTarjeta, setTarjeta] = useState(null);
    return (
        <>
            <div className={clsx(
                "text-[1rem] text-letraTitulos font-[700] w-full text-center py-[0.5rem] rounded-[0.5rem]",
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
                        <div className='font-[600] py-[0.5rem] rounded-[0.5rem]'>
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
        <div className='sm:col-span-2 w-full mx-auto'>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ el: '.custom-pagination', clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                speed={800}
                className='m-auto rounded-b-[1rem] md:w-full'
            >
                <SwiperSlide className='flex-col text-center text-letraTitulos'>
                    <div className={clsx(
                        "w-full rounded-[0.5rem] font-[700] py-[0.5rem] mb-[0.5rem]",
                        "bg-titulos"
                    )}>
                        Sobre mi...
                    </div>
                    <div className='rounded-[0.5rem] text-center'>
                        <p className='w-[90%] mx-auto my-[1rem] text-titulos'>{aboutMe}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex-col'>
                    <InformacionSlides titulo='Estudios' lista={listaEstudios}
                        colorTitulo='bg-titulos'
                        icono='fa-solid fa-laptop-code'
                    />
                </SwiperSlide>
                <SwiperSlide className='flex-col'>
                    <InformacionSlides titulo='Trabajos' lista={listaTrabajos}
                        colorTitulo='bg-titulos'
                        icono='fa-solid fa-briefcase'
                    />
                </SwiperSlide>
            </Swiper>
            <div className="custom-pagination mb-[0.5rem] text-center"></div>
        </div>
    );
}

export function Enlace({ info }) {
    const Icon = informacion[info].icono;
    return (
        <>
            <a href={informacion[info].link} target='_blank'
                className='text-[2.5rem]'>
                <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
        </>
    );
}

export function Dato({ info }) {
    const Icon = informacion[info].icono;
    const notify = () => toast.success('¡Copiado!', {
        duration: 2000,
        position: "bottom-center"
    });
    return (
        <>
            <div className=''
                onClick={() => {
                    const textoACopiar = informacion[info].valor;
                    navigator.clipboard.writeText(textoACopiar);
                    notify();
                }}>
                <Icon className="w-4 h-4" />
                <Toaster />
            </div>
        </>
    );
}

export function Contacto({ lista }) {
    return (
        <ul className={clsx(
            "flex flex-row text-center text-[1rem] my-[1rem] py-[0.5rem]",
        )}>
            {lista.map((info, index) => (
                <li key={index} className='p-[0.6rem] mx-[0.2rem] border rounded-[2rem] text-blanco'>
                    {informacion[info].enlace ? <Enlace info={info} /> : <Dato info={info} />}
                </li>
            ))}
        </ul>
    );
}

export function foto() {
    return (
        <>

        </>
    )
}

export default function AcercaMi() {
    const aboutMe = (
        <>
            Desarrollo aplicaciones web <strong>full-stack</strong>,
            desde la lógica de <span className="text-blue-500">backend</span> hasta interfaces
            <strong>frontend</strong> funcionales,
            enfocadas en claridad, <span className="text-green-500">mantenibilidad</span> y buen uso de datos.
        </>
    )
    return (
        <>
            <div className="w-full flex flex-col items-center">
                <h3 className={clsx(
                    "font-[700] text-letraTitulos text-center",
                    "border-b-2 border-transparent rounded-[0.4rem]",
                    "py-[0.5rem] mb-[0.5rem]"
                )}> <Seccion Titulo="¡Hola mundo! Soy Salvador Gutiérrez Olvera" />
                </h3>
                <p className='text-blanco'>{aboutMe}</p>
                <a href='Portafolio/CV.pdf' download className={clsx(
                    'w-[60%] mt-4 border-rosaBoton border-2 text-rosaBoton p-2 rounded-[0.5rem]',
                    'flex justify-around'
                )}>
                    <ArrowDownToLine />Descargar CV
                </a>
            </div>
            <div className='w-full'>
                <div className='text-center'>
                    <i class="fa-regular fa-user text-[8rem] text-amber-50"></i>
                </div>
                {/* <div className='flex flex-row justify-center'>
                    <Contacto lista={listaLinks} titulo={"Contacto"} />
                    <Contacto lista={listaInformacion} titulo={"Información"} />
                </div> */}
            </div>
        </>
    );
}