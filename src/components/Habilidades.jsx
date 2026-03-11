import { useState } from "react";
import { habilidades } from "../utils/informacionHabilidades";
import clsx from "clsx";

export function Habilidad({ lenguaje }) {
    const Icono = lenguaje.icon;
    return (
        <div className={
            clsx(
                "w-full h-full p-4 justify-between items-center flex flex-col rounded-[1rem]",
                "transition-all duration-300 ease-in",
                "group border-3 border-[var(--hover-primario)] lg:border-transparent bg-white/5",
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
                    "lg:[--bg-primaryColor:#c1bcc6] lg:[--bg-secondaryColor:#fff]",
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
                        <li key={index}>
                            <i className="fa-solid fa-caret-right mr-[0.5rem] text-[#5FF0B9]">
                            </i>
                            {item}
                        </li>
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

export function Subseccion({ lista }) {
    return (
        <>
            <div className={clsx(
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]"
            )}>
                {lista.map(lenguaje => (
                    <Habilidad key={lenguaje.id} lenguaje={lenguaje} />
                ))}
            </div>
        </>
    );
}

export function Tab({ Titulo, cambiarTab, seccion }) {
    return (
        <button className={clsx(
            "text-blanco border-b-2 border-transparent mx-auto",
            "font-[700] text-[1.2rem] transition-colors ease-in 300ms",
            "cursor-pointer barraSelector",
            seccion === Titulo && "active"
        )}
            type="button"
            onClick={() => cambiarTab(Titulo)}>
            {Titulo}
        </button>
    )
}

export default function Habilidades() {
    const [seccion, cambiarTab] = useState('Frontend')
    const listaFront = habilidades.filter(habilidad => habilidad.categoria === 'Front');
    const listaBack = habilidades.filter(habilidad => habilidad.categoria === 'Back');
    return (
        <>
            <div className="flex flex-col text-center">
                <div className="flex mb-[1rem] w-[20rem] mx-auto">
                    <Tab Titulo={'Frontend'} cambiarTab={cambiarTab} seccion={seccion} />
                    <Tab Titulo={'Backend'} cambiarTab={cambiarTab} seccion={seccion} />
                </div>
                <div key={seccion}
                    className="transition-all duration-300 ease-in-out animate-fade">
                    {
                        seccion === 'Frontend'
                            ? <Subseccion lista={listaFront} />
                            : <Subseccion lista={listaBack} />
                    }
                </div>
            </div>
        </>
    );
}