import type { ConteudoProps } from "../../types";
import Cards from "../Cards/Cards";
import styles from "./Conteudo.module.css";

/**
 * Conteúdo principal da página.
 * Repassa a lista de alunos (recebida via props do App) para o componente Cards.
 */
function Conteudo({ alunos }: ConteudoProps) {
  return (
    <main className={styles.conteudo}>
      <h2 className={styles.subtitulo}>Turma</h2>
      <p className={styles.legenda}>{alunos.length} alunos matriculados nesta turma.</p>
      <Cards alunos={alunos} />
    </main>
  );
}

export default Conteudo;
