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
        <div className="flex w-full">
            <div className="w-[80%] flex justify-around bg-[#1A1A1D] p-[1rem] mb-[0.8rem] rounded-[1rem] shadow-[0_0_25px_5px_#0074D950]">
                <div className="p-[0.5rem]">
                    <i className={`
                        ${skill.icono} text-[5rem] text-[#fff] mb-[0.5rem]`}
                        style={{ color: skill.color }}></i>
                    <p className="text-[#fff] font-[700]">{skill.nombre}</p>
                </div>
            </div>
        </div>
    );
}

export function TipoLenguage({ titulo, lista }) {
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
                clsx(`grid grid-cols-1 gap-[1rem] justify-between absolute top-full origin-top
                    ${navAbierto ? 'opacity-100 relative' : 'opacity-0'}`
                )}>
                {lista.map((lenguaje, index) => (
                    <Habilidad key={index} lenguaje={lenguajes[lenguaje]} />
                ))}
            </div>
        </>
    );
}

export default function Habilidades() {
    return (
        <>
            <div className="flex flex-col text-center relative overflow-hidden">
                <TipoLenguage titulo="Front-End" lista={listaFront} />
                <TipoLenguage titulo="Back-End" lista={listaBack} />
            </div>
            <div className="flex flex-col text-center">
                <h2 className="text-[#4F6CF4] font-[700] text-[1.2rem] mb-[1rem]">Soft Skills</h2>
                <div className="grid grid-cols-2 justify-between place-items-center">
                    {listaSkills.map((skill, index) => (
                        <Skills key={index} skill={skills[skill]} />
                    ))}
                </div>
            </div>
        </>
    );
}