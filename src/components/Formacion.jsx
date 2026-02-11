import { trabajos, estudios } from "../utils/informacionFormacion";
import { clsx } from "clsx";

export function Trabajo({ informacion }) {
    return (
        <div className="text-blanco text-center">
            <h2 className="text-morado font-bold">{informacion.puesto}</h2>
            <h4>{informacion.nombre}</h4>
            <h5>{informacion.ubicacion}</h5>
            <ul>
                {Object.values(informacion.funciones).map((funcion, index) => (
                    <li key={index}>{funcion}</li>
                ))}
            </ul>
        </div>
    )
}

export function Estudio({ informacion }) {
    return (
        <div className="text-blanco text-center">
            <h2 className="text-morado font-bold">{informacion.carrera}</h2>
            <h4>{informacion.institucion}</h4>
        </div>
    )
}

export default function Formacion() {
    return (
        <div className="flex justify-evenly">
            <div>
                <h2 className={clsx(
                    "bg-gradienteTitulo text-center text-blanco mx-auto py-[0.5rem] rounded-[0.5rem]",
                    "w-[55%] sm:w-[35%] md:w-[30%] lg:w-[50%] font-[700] text-[1.2rem] my-[1rem]"
                )}>
                    Trabajos
                </h2>
                {trabajos.map(trabajo => (
                    <Trabajo key={trabajo.id} informacion={trabajo} />
                ))}
            </div>
            <div>
                <h2 className={clsx(
                    "bg-gradienteTitulo text-center text-blanco mx-auto py-[0.5rem] rounded-[0.5rem]",
                    "w-[55%] sm:w-[35%] md:w-[30%] lg:w-[50%] font-[700] text-[1.2rem] my-[1rem]"
                )}>
                    Estudios
                </h2>
                {estudios.map(estudio => (
                    <Estudio key={estudio.id} informacion={estudio} />
                ))
                }
            </div>
        </div>
    )
} 