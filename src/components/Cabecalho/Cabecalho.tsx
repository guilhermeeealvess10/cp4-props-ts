import type { CabecalhoProps } from "../../types";
import styles from "./Cabecalho.module.css";

/**
 * Cabeçalho da página.
 * Recebe título e logo como props — o logo é uma imagem carregada da pasta public.
 */
function Cabecalho({ titulo, logo }: CabecalhoProps) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do projeto" className={styles.logo} />
      <h1 className={styles.titulo}>{titulo}</h1>
    </header>
  );
}

export default Cabecalho;
