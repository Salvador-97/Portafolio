import { useState } from "react";
import { habilidades } from "../utils/informacionHabilidades";
import clsx from "clsx";

export function Habilidad({ lenguaje }) {
    const Icono = lenguaje.icon;
    console.log("Nombre: ", lenguaje.id)
    console.log('Secundario: ', lenguaje.colorSecundario)
    return (
        <div className={
            clsx(
                "w-full h-full p-4 justify-between items-center flex flex-col rounded-[1rem]",
                "transition-all duration-300 ease-in",
                "group border-3 border-[var(--hover-primario)] md:border-transparent bg-white/5",
                "hover:border-[var(--hover-primario)]"
            )}
            style={{
                "--hover-primario": lenguaje.colorIcono,
                "--hover-secundario": lenguaje.colorSecundario,
            }}
        >

            <div className={clsx(
                "justify-between text-center"
            )}>
                <Icono className={clsx(
                    "w-[4rem] mx-auto transition-all duration-300",
                    "[--bg-primaryColor:var(--hover-primario)] [--bg-secondaryColor:var(--hover-secundario)]",
                    "md:[--bg-primaryColor:#c1bcc6] md:[--bg-secondaryColor:#fff]",
                    "group-hover:[--bg-primaryColor:var(--hover-primario)]",
                    "group-hover:[--bg-secondaryColor:var(--hover-secundario)]"
                )}
                />
            </div>
            <div className={
                clsx(
                    "flex items-center py-[0.5rem] justify-center"
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
        <>
            <button className="cursor-pointer w-full" type="button" onClick={() => abrirNav(!navAbierto)}>
                <h2 className={clsx(
                    "bg-gradienteTitulo  text-blanco mx-auto py-[0.5rem] rounded-[0.5rem]",
                    "w-[55%] sm:w-[35%] md:w-[30%] lg:w-[20%] font-[700] text-[1.2rem] my-[1rem]"
                )}>
                    {titulo}
                    <i className="fa-solid fa-caret-down pl-[0.5rem]"></i>
                </h2>
            </button>
            <div className={clsx(
                "grid overflow-hidden",
                "top-full origin-top ",
                `transition-all duration-500 ease-in-out transform`,
                'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]',
                navAbierto
                    ? 'opacity-100 scale-100 max-h-[2000px] overflow-visible my-[1rem] lg:mt-[2rem]'
                    : 'opacity-0 scale-90 max-h-0',

            )}>
                {lista.map(lenguaje => (
                    <Habilidad key={lenguaje.id} lenguaje={lenguaje} />
                ))}
            </div>
        </>
    );
}

export default function Habilidades() {
    const listaFront = habilidades.filter(habilidad => habilidad.categoria === 'Front');
    const listaBack = habilidades.filter(habilidad => habilidad.categoria === 'Back');
    return (
        <>
            <div className="flex flex-col text-center relative overflow-hidden">
                <Subseccion titulo="Front-End" lista={listaFront} />
                <Subseccion titulo="Back-End" lista={listaBack} />
                {/* <Subseccion titulo="Soft Skills" lista={listaSkills} lenguaje={false} /> */}
            </div>
        </>
    );
}