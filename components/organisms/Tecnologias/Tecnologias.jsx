import Image from "next/image";
import { ImageTecnologiasServices } from "../../../services/tecnologiasServices";
import styles from "./Tecnologias.module.css";

export const Tecnologias = () => {
  return (
    <>
      <h2>Tecnologias</h2>
      <section className={styles["container-grid_tecnologias"]}>

        <div className={styles["grid-container"]}>
          {ImageTecnologiasServices.map(
            ({ index, imageTecnologia, }) => {
              return (
                <div key={index} className={styles["grid-item"]}>
                  <Image
                    src={imageTecnologia}
                    className={styles["image-tecnologias"]}
                  />
                  <h3 className={styles["title-tecnologias"]}>
                  </h3>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};
