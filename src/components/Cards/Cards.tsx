import type { CardsProps } from "../../types";
import styles from "./Cards.module.css";

/**
 * Exibe a lista de alunos recebida como props (array de objetos).
 * Cada objeto precisa conter: id, nome, rm e avatar.
 */
function Cards({ alunos }: CardsProps) {
  return (
    <ul className={styles.grid}>
      {alunos.map(({ id, nome, rm, avatar }) => (
        <li key={id} className={styles.card}>
          <img src={avatar} alt={`Foto de ${nome}`} className={styles.avatar} />
          <p className={styles.nome}>{nome}</p>
          <p className={styles.rm}>RM {rm}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cards;
