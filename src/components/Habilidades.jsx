import { useState } from "react";
import { lenguajes, listaFront, listaBack, listaSkills, skills } from "../utils/informacionHabilidades";
import clsx from "clsx";

export function Habilidad({ lenguaje }) {
    return (
        <div className="w-[100%] flex flex-col bg-[#1A1A1D] rounded-[0.7rem] shadow-[0_0_25px_5px_#0074D950]">
            <div className="p-[1rem]">
                {/* <i
                    className={`${lenguaje.icono} text-[5rem]`}
                    style={{ color: lenguaje.colorIcono }}>
                </i> */}

                <img src={lenguaje.img} className="w-[35%] mx-auto" />

            </div>
            <div className="flex items-center py-[0.5rem] justify-center bg-azultarjeta rounded-b-[0.7rem]">
                <ul className="text-[#fff] text-left text-[0.75rem] w-[90%]">
                    {Object.values(lenguaje.conocimiento).map((item, index) => (
                        <li key={index}><i className="fa-solid fa-caret-right mr-[0.5rem] text-[#5FF0B9]"></i>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function Skills({ skill }) {
    return (
        <div className="bg-[#1A1A1D] rounded-[0.5rem] flex flex-col">
            <div className="bg-azulfondo rounded-t-[0.5rem]">
                <i className={`
                        ${skill.icono} text-[2rem] my-[0.5rem]`}
                    style={{ color: skill.color }}></i>
            </div>
            <div className="text-blanco items-center w-[80%] m-auto py-[0.5rem] text-[0.6rem] font-[700]">{skill.nombre}</div>
        </div>
    );
}

export function Subseccion({ titulo, lista, lenguaje }) {
    const [navAbierto, abrirNav] = useState(false);
    return (
        <>
            <button type="button" onClick={() => abrirNav(!navAbierto)}>
                <h2 className="text-[#4F6CF4] font-[700] text-[1.2rem] my-[1rem]">
                    {titulo}
                    <i className="fa-solid fa-caret-down pl-[0.5rem]"></i>
                </h2>
            </button>
            <div className={
                clsx(`grid gap-[1rem] justify-between absolute top-full origin-top`,
                    navAbierto ? 'opacity-100 relative' : 'opacity-0',
                    lenguaje ? 'grid-cols-1' : 'grid-cols-3'
                )}>
                {lista.map(item => (
                    lenguaje
                        ? <Habilidad key={item} lenguaje={lenguajes[item]} />
                        : <Skills key={item} skill={skills[item]} />
                ))}
            </div>
        </>
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