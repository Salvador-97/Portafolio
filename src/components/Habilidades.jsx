import { lenguajes, listaFront, listaBack, listaSkills, skills } from "../utils/informacionHabilidades";

export function Habilidad({ lenguaje }) {
    return (
        <div className="flex w-[95%] transform transition-transform hover:scale-105 duration-700 ease-out justify-center">
            <div className="w-[100%] flex justify-around bg-[#1A1A1D] hover:bg-[#212122] p-[1rem] mb-[0.8rem] rounded-[1rem] shadow-[0_0_25px_5px_#0074D950]">
                <div className="p-[1rem]">
                    <i
                        className={`${lenguaje.icono} text-[5rem]`}
                        style={{ color: lenguaje.colorIcono }}>
                    </i>
                </div>
                <div className="flex items-center">
                    <ul className="text-[#fff] text-left text-[0.75rem]">
                        {Object.values(lenguaje.conocimiento).map((item, index) => (
                            <li key={index}><i className="fa-solid fa-caret-right fa-fade mr-[0.5rem] text-[#5FF0B9]"></i>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Skills({ skill }) {
    return (
        <div className="flex w-full h-[12rem] justify-center transform transition-transform hover:scale-110 duration-900 ease-out">
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
    return (
        <>
        <h2 className="text-[#4F6CF4] font-[700] text-[1.2rem] mb-[1rem]">{titulo}</h2>
        <div className="grid grid-cols-3 justify-between">
            {lista.map((lenguaje, index) => (
                <Habilidad key={index} lenguaje={lenguajes[lenguaje]}/>
            ))}
        </div>
        </>
    );
}

export default function Habilidades() {
    return (
        <>
            <div className="flex flex-col text-center">
                <TipoLenguage titulo="Front-End" lista={listaFront}/>
                <TipoLenguage titulo="Back-End" lista={listaBack}/>
            </div>
            <div className="flex flex-col text-center">
                <h2 className="text-[#4F6CF4] font-[700] text-[1.2rem] mb-[1rem]">Soft Skills</h2>
                <div className="grid grid-cols-5 justify-between place-items-center">
                    {listaSkills.map((skill, index) => (
                        <Skills key={index} skill={skills[skill]} />
                    ))}
                </div>
            </div>
        </>

    );
}