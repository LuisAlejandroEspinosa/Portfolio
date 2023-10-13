import Image from "next/image";
import ImagePerfil from "../../../public/daniel1.jpg";
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
        <h2>Sobre Mi</h2>
        <p>
          Desarrollador Full-Stack con 1 año de experiencia, utilizando React,
          Next.js, Node.js, Express y MongoDB. He trabajado desplegando
          plataformas como Heroku y Vercel , manejo de git & GitHub y
          metodologías ágiles como Kanban y Scrum.
        </p>
      </div>
    </section>
  );
};
