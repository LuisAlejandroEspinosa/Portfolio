import {
  BienvenidaTemplate,
  MenuPorfolioTemplate,
  SobreMiTemplate,
  TecnologiasTemplate,
  ProyectosTemplate,
} from "../../components/template";
import FooterTemplete from "../../components/template/Footer-Template/FooterTemplete";
import styles from "./page.module.css";

const Home = ()=> {
  return (
    <>
      <MenuPorfolioTemplate />
      <div className={styles["container-porfolio"]}>
        <BienvenidaTemplate />
        <SobreMiTemplate />
        <TecnologiasTemplate />
        <ProyectosTemplate/>
        <FooterTemplete/>
      </div>
      
    </>
  );
}
export default Home;
