
import { ProyectosServices } from "../../../services/proyectos";
import styles from "./Proyectos.module.css";
import CardProyect from '../../molecules/CardProyect/CardProyect';




export const Proyectos = () => {
    return (
        <>
            <h2>
                Proyectos
            </h2>
            <section className={styles["container-grid_proyect"]}>

                <div className={styles["grid-container"]}>
                    {ProyectosServices.map(
                        (
                            proyecto, index
                        ) => (<CardProyect proyecto={proyecto} key={index}></CardProyect>)
                    )}

                </div>
            </section>
        </>
    );
};
