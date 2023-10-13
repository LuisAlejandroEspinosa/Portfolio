import Image from "next/image";
import { ImageTecnologiasServices } from "../../../services/tecnologiasServices";
import styles from "./Tecnologias.module.css";

export const Tecnologias = () => {
  return (
    <section className={styles["container-grid_tecnologias"]}>
      <h2>Tecnologias</h2>
      <div className={styles["grid-container"]}>
        {ImageTecnologiasServices.map(
          ({ index, imageTecnologia, nameTecnologia }) => {
            return (
              <div key={index} className={styles["grid-item"]}>
                <Image
                  src={imageTecnologia}
                  alt={nameTecnologia}
                  className={styles["image-tecnologias"]}
                />
                {/* <h3 className={styles["title-tecnologias"]}>
                  {nameTecnologia}
                </h3> */}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
