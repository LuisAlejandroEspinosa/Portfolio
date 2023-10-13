import {
  BienvenidaTemplate,
  MenuPorfolioTemplate,
  SobreMiTemplate,
  TecnologiasTemplate,
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
      </div>
    </>
  );
}
