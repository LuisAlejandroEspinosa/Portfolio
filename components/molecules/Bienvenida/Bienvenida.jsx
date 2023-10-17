import { Button } from "@mui/material";
import styles from "./Bienvenida.module.css";

export const Bienvenida = () => {
    const numeroWhatsApp = "3208039083"; 
    const mensajeWhatsApp = "¡Hola! Estoy interesado en contactarte desde tu portafolio.";

    const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensajeWhatsApp
    )}`;
  return (
    <section className={styles["container-section_bienvenida"]}>
      <h1 className={styles["title-bienvenida"]}>
        Soy <span>Luis Alejandro</span>
      </h1>
      <h3 className={styles["title-secondary"]}>Desarrollador  Front-end</h3>
      <p>Bienvenido a mi Portafolio</p>
      <Button variant="contained" className={styles["button-bienvenida"]}>
        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
          Contactame
        </a>
      </Button>
    </section>
  );
};
