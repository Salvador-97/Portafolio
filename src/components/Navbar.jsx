import { useState } from "react";
import { linksNav } from "../utils/navbar";
import clsx from "clsx";

export function ItemsNav({ nombre, href }) {
    return (
        <li className="rounded-[0.6rem] barraSelector transition-all duration-300 ease-in">
            <a href={href}
                className='no-underline text-blanco font-[700]'>
                {nombre}</a>
        </li>
    );
}

export default function Navbar() {
    const [navAbierto, setNav] = useState(false);
    return (
        <div className={
            clsx('w-[90%] relative mx-auto text-center',
                'lg:flex lg:pt-[1rem] lg:justify-between lg:items-center',
                'lg:absolute'
            )}>
            <div className={
                clsx('text-center pt-[1rem]',
                    'lg:pt-0 lg:w-[40%]'
                )}>
                <div className={
                    clsx('text-blanco font-[700]',
                        'cursor-pointer duration-700 transition-all ease-out transform scale-110',
                        'sm:text-[1.4rem]',
                        ''
                    )}>
                    <span className="gradienteTitulo">DevPortafolio</span>
                </div>
                <div className={
                    clsx('text-blanco text-[1.2rem] opacity-100',
                        'lg:absolute lg:opacity-0'
                    )}>
                    <button className="lg:pointer-events-none" type="button"
                        onClick={() => setNav(!navAbierto)}>
                        <i className={
                            clsx(`fa-solid fa-caret-down gradienteTitulo`,
                                navAbierto ? 'transform rotate-180' : 'transform rotate-0'
                            )}></i>
                    </button>
                </div>
            </div>
            <div name="links-nav"
                className={clsx(
                    'absolute w-full transition-all duration-500',
                    'lg:relative lg:opacity-100 lg:translate-y-0 lg:w-[50%] lg:pointer-events-auto lg:text-[1.2rem]',
                    navAbierto && 'opacity-100 translate-y-0 bg-gradienteTitulo rounded-[0.5rem] z-10',
                    !navAbierto && 'opacity-0 -translate-y-5 pointer-events-none',
                )}>
                <ul className='flex flex-col list-none lg:flex-row lg:justify-between'>
                    {linksNav.map((item, key) => (
                        <ItemsNav key={key} nombre={item.nombre} href={item.href} />
                    ))}
                </ul>
            </div>
        </div>
    );
}