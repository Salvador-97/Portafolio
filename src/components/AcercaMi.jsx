import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination'
import '../index.css'

import { aboutMe, informacion, listaInfo } from '../utils/informacionContacto';
import { listaEstudios, estudios, listaTrabajos, trabajos } from '../utils/informacionContacto';
import { copiar } from '../utils/copiarContenido';

export function InformacionSlides({ titulo, lista, colorFondo }) {
    return (
        <div className='text-[#E6E9F0] font-[700] flex flex-col justify-center items-center text-center h-full mx-[2.5rem]'>
            <div className='text-[1.3rem]'>{titulo}</div>
            <div className='flex w-[95%]'>
                {lista.map((valor, index) => (
                <div key={index} className='flex flex-col text-center  my-[0.5rem] w-[90%] p-[0.5rem] rounded-[1rem] justify-between mx-[0.8rem]' style={{background: colorFondo}}>
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
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            className='w-[45rem] h-[15rem] m-auto'
        >
            <SwiperSlide className='bg-[#17854A] h-full'>
                <div className='h-full flex items-center text-justify text-[#E6E9F0] mx-[4rem] font-[700]'>
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
                className='hover:text-[#dee2f8] transition-all duration-700 ease-out cursor-pointer'>
                {informacion[info].valor}
            </a>
        </>
    );
}

export function Dato({ info }) {
    return (
        <>
            <div onClick={() => copiar(info)} name={info}>
                {informacion[info].valor}
            </div>
        </>
    );
}

export function Contacto() {
    return (
        <ul className="text-[1.2rem]">
            {listaInfo.map((info, index) => (
                <li key={index} className='text-[1rem] flex items-center hover:text-[#dee2f8] transition-all duration-700 ease-out cursor-pointer'>
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
        <div className="flex rounded-[1rem] overflow-x-hidden">
            <div className="flex items-center justify-center w-[30%] bg-[#1A1A1D] rounded-lr-[1rem] p-[1rem] text-[#A5B4FC] font-[700]">
                <Contacto />
            </div>
            <Carousel />
        </div>
    );
}