import { use, useEffect, useState } from "react";
import { linksNav, abrirNav } from "../utils/navbar";
import clsx from "clsx";

export function ItemsNav({ nombre }) {
    return (
        <li className="py-[0.2rem]">
            <a href='#' className='no-underline text-blanco font-[700]'>
                {nombre}</a>
        </li>
    );
}

export default function Navbar() {
    const [navAbierto, setNav] = useState(false);
    return (
        <div className='w-[90%] relative mx-auto text-center'>
            <div className='text-center pt-[1rem]'>
                <div className='text-blanco font-[700] hover:text-[#DD8FFA] cursor-pointer duration-700 transition-all ease-out transform hover:scale-110'>
                    <i className="fa-solid fa-code pr-[0.5rem]"></i>
                    Salvador Gutiérrez Olvera
                    <i className="fa-solid fa-code pl-[0.5rem]"></i>
                </div>
                <div className='text-blanco text-[1.2rem]'>
                    <button type="button"
                        onClick={() => setNav(!navAbierto)}>
                        <i className="fa-solid fa-caret-down"></i></button>
                </div>
            </div>
            <div name="links-nav"
                className={clsx(
                    'absolute w-full transition-all duration-500',
                    navAbierto && 'opacity-100 translate-y-0 bg-azulfondo',
                    !navAbierto && 'opacity-0 -translate-y-5 pointer-events-none')}>
                <ul className='flex flex-col list-none'>
                    {linksNav.map((item, key) => (
                        <ItemsNav key={key} nombre={item.nombre} href={item.href} />
                    ))}
                </ul>
            </div>
        </div>
    );
}