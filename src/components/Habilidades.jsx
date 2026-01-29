import { useState } from "react";
import { lenguajes, listaFront, listaBack, listaSkills, skills } from "../utils/informacionHabilidades";
import clsx from "clsx";

export function Habilidad({ lenguaje }) {
    let versionMobile;
    if (window.innerWidth < 1024) {
        versionMobile = true;
    } else {
        versionMobile = false;
    }
    return (
        <div className={
            clsx(
                "w-[100%] h-[10rem] justify-center items-center flex flex-col rounded-[1rem]",
                "bg-[var(--color-fondo)] transition-all duration-300 ease-in",
                "relative group border-y-3 border-transparent",
                "hover:rounded-none hover:border-[#687FE3] hover:border-x-0 hover:bg-transparent",
            )}
                style={{
                    "--color-fondo": lenguaje.colorIcono,
                    // backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"                    
                }}
                >
            <div className={clsx(
                "p-[1rem] absolute transition-all duration-800 ease-in-out",
                versionMobile 
                ? "-translate-y-[6rem]"
                : "group-hover:-translate-y-[6rem]",
            )}>
                <i className={clsx(
                    "text-[4rem] text-[#fff] mx-auto p-[0.5rem] rounded-[0.5rem]",
                    "group-hover:text-[var(--color-hover)] transition-all duration-300 ease-in",
                    "group-hover:scale-[80%]",
                    `${lenguaje.icono}`,
                    versionMobile
                    ? "bg-blanco"
                    : "group-hover:bg-blanco"
                )}
                    style={{"--color-hover": lenguaje.colorIcono}}
                    //src={lenguaje.img} 
                    ></i>
            </div>
            <div className={
                clsx(
                    "absolute flex items-center py-[0.5rem] h-[8rem] justify-center",
                    "transition-all duration-300 ease-in",
                    versionMobile
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                )}>
                <ul className={
                    clsx("text-blanco text-left text-[0.75rem] w-[90%]",
                        "font-[700]"
                    )}>
                    {Object.values(lenguaje.conocimiento).map((item, index) => (
                        <li key={index}><i className="fa-solid fa-caret-right mr-[0.5rem] text-[#5FF0B9]"></i>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function Skills({ skill }) {
    const [hover, cambiarHover] = useState(false)
    return (
        <div className={clsx(
            "rounded-[0.5rem] flex flex-col bg-azulfondo justify-center",
            "transition-colors duration-400 ease-in"
        )}
            /*
            style={{
                borderColor: skill.color,
                backgroundColor: hover ? skill.color : 'transparent',
    }} */
        onMouseEnter={() => cambiarHover(true)}
        onMouseLeave={() => cambiarHover(false)}
        >

            <i className={clsx(
                `my-[0.5rem] text-[2.5rem] text-blanco ${skill.icono}`,
                "transition-colors duration-400 ease-in"
            )}
            style={{
                color: hover ? '#F3F4F6' : skill.color
            }}
            >
            </i>
            <div className={clsx(
                "text-blanco items-center w-[80%] mx-auto py-[0.5rem] text-[0.7rem] font-[700]",
                "transition-colors duration-400 ease-in"
            )}
            >
                {skill.nombre}
            </div>
        </div>
    );
}

export function Subseccion({ titulo, lista, lenguaje }) {
    let navAbiertoMobile;
    if (window.innerWidth < 1024) {
        navAbiertoMobile = false;
    } else {
        navAbiertoMobile = true;
    }
    const [navAbierto, abrirNav] = useState(navAbiertoMobile);
    return (
        <div className="my-auto">
            <button className="cursor-pointer w-full" type="button" onClick={() => abrirNav(!navAbierto)}>
                <h2 className={clsx(
                    "bg-titulos text-letraTitulos mx-auto py-[0.5rem] rounded-[0.5rem]", 
                    "w-[55%] sm:w-[35%] md:w-[30%] lg:w-[20%] font-[700] text-[1.2rem] my-[1rem]"
                )}>
                    {titulo}
                    <i className="fa-solid fa-caret-down pl-[0.5rem]"></i>
                </h2>
            </button>
            <div className={clsx(
                    "grid overflow-hidden",
                    "justify-between top-full origin-top ",
                    `transition-all duration-500 ease-in-out transform`,
                    navAbierto
                        ? 'opacity-100 scale-100 max-h-[2000px] overflow-visible mt-[4rem] lg:mt-[2rem]'
                        : 'opacity-0 scale-90 max-h-0',
                    lenguaje
                        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5rem] md:gap-[2rem]'
                        : 'grid-cols-2 md:grid-cols-5 w-[85%] gap-[1rem] mx-auto mt-[1rem]'
                )}>
                {lista.map(item => (
                    lenguaje
                        ? <Habilidad key={item} lenguaje={lenguajes[item]} />
                        : <Skills key={item} skill={skills[item]} />
                ))}
            </div>
        </div>
    );
}

export default function Habilidades() {
    return (
        <>
            <div className="flex flex-col text-center relative overflow-hidden">
                <Subseccion titulo="Front-End" lista={listaFront} lenguaje={true} />
                <Subseccion titulo="Back-End" lista={listaBack} lenguaje={true} />
                <Subseccion titulo="Soft Skills" lista={listaSkills} lenguaje={false} />
            </div>
        </>
    );
}