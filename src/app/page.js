
import {
  BienvenidaTemplate,
  MenuPorfolioTemplate,
  SobreMiTemplate,
  TecnologiasTemplate,
  ProyectosTemplate
} from "../../components/template";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <MenuPorfolioTemplate />
      <div className={styles["container-porfolio"]}>
        <BienvenidaTemplate />
        <SobreMiTemplate />
        <TecnologiasTemplate />
        <ProyectosTemplate/>
      </div>
    </>
  );
}
