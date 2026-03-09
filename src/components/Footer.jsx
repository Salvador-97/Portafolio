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
            <h3 className="mb-[1rem] text-[1.4rem]">{titulo}</h3>
            <ul className="flex gap-[1rem] justify-center items-center md:items-start flex-col">
                {datos.map(info => (
                    <li className="text-[var(--colorIcono)] flex"
                            style={{
                                "--colorIcono": info.color
                            }} key={info.id}>
                        {info.link
                            ? <a href={info.link}><Item informacion={info} /></a>
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
                <div className="md:mb-[1rem] ">
                    <h3 className="text-[1.4rem]">Salvador Gutiérrez</h3>
                    <p>Frontend Developer</p>
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