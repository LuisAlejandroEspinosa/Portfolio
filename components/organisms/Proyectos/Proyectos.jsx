import Image from "next/image";
import { ProyectosServices } from "../../../services/proyectos";
import styles from "./Proyectos.module.css";
import CardProyect from '../../molecules/CardProyect/CardProyect';


export const Proyectos = () => {
    return (
        <section className={styles["container-grid_tecnologias"]}>
            <h2>Proyectos
            </h2>
            <div className={styles["grid-container"]}>
                {ProyectosServices.map(
                    (
                    proyecto
                    ) => (<CardProyect proyecto={proyecto}></CardProyect>)
                )}
            </div>
        </section>
    );
};
