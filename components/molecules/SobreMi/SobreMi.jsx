import Image from "next/image";
import ImagePerfil from "../../../public/perfil.png";
import styles from "./SobreMi.module.css";

export const SobreMi = () => {
  return (
    <section className={styles["container-sobreMi"]}>
      <Image
        src={ImagePerfil}
        alt="Imagen sobre mi"
        className={styles["image-sobreMi"]}
      />

      <div className={styles["container-info_sobreMi"]}>
        <h2>Conoceme</h2>
        <p>
        Desarrollador Front-end. Tengo conocimiento en React,
          Next.js, JavaScript,Sass, Material UI CSS, HTML. 
          He trabajado desplegando plataformas
          en Vercel , manejo de git & GitHub y
          metodologías ágiles como Trello y Slack.
        </p>
      </div>
    </section>
  );
};
