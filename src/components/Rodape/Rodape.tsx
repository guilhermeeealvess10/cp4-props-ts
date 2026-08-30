import type { RodapeProps } from "../../types";
import styles from "./Rodape.module.css";

/** Rodapé da página. Exibe um texto recebido via props. */
function Rodape({ texto }: RodapeProps) {
  return (
    <footer className={styles.footer}>
      <p>{texto}</p>
    </footer>
  );
}

export default Rodape;
