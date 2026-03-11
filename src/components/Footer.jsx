import clsx from "clsx";
import { contacto } from "../utils/informacionContacto"

export function Item({ informacion }) {
    const Icon = informacion.icono;
    return (
        <>
            <Icon />
            {informacion.valor && <span className="text-blanco ml-2">{informacion.valor}</span>}
        </>

    )
}

export function SeccionFooter({ titulo, datos }) {
    return (
        <div className="mb-[1rem]">
            <h3 className="mb-[1rem] text-[1.4rem] font-titulos font-bold">{titulo}</h3>
            <ul className={clsx(
                "flex flex-col gap-[1rem] justify-center md:justify-start items-center md:items-start",
            )}>
                {datos.map(info => (
                    <li className="text-[var(--colorIcono)] flex"
                        style={{
                            "--colorIcono": info.color
                        }} key={info.id}>
                        {info.link
                            ? <a href={info.link} className="flex"><Item informacion={info} /></a>
                            : <Item informacion={info} />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Footer() {
    const datosContacto = contacto.filter(dato => !dato.link);
    const datosRedes = contacto.filter(dato => dato.link);
    return (
        <>
            <div className="mx-auto mt-[1.2rem] grid grid-cols-1 md:grid-cols-3 text-center md:text-left w-[85%]">
                <div className="mb-[1rem] md:mt-0 m-auto">
                    <h3 className="text-[1.4rem] font-titulos font-bold mb-4">Salvador Gutiérrez</h3>
                    <h4 className="text-[#fe197f]">Full-Stack Developer</h4>
                    <p className="m-auto md:m-0 w-[80%] ">Construyendo interfaces claras y aplicaciones web funcionales</p>
                </div>
                <SeccionFooter titulo="Contacto" datos={datosContacto} />
                <SeccionFooter titulo="Redes" datos={datosRedes} />
            </div>
            <div className="mt-[1rem] text-center">
                <i className="fa-solid fa-copyright pr-[0.5rem]"></i>Salvador Gutiérrez Olvera
            </div>
        </>
    )
}