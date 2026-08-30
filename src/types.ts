// Tipagem central das props utilizadas pelos componentes do projeto.
// Mantida em um arquivo único (types.ts) conforme pedido no enunciado do Checkpoint 4.

/** Representa um aluno exibido em um Card. */
export type Aluno = {
  id: number;
  nome: string;
  rm: string;
  avatar: string;
};

/** Props do componente Cabecalho: título da página + logo (carregado da pasta public). */
export type CabecalhoProps = {
  titulo: string;
  logo: string;
};

/** Props do componente Conteudo: repassa a lista de alunos para o componente Cards. */
export type ConteudoProps = {
  alunos: Aluno[];
};

/** Props do componente Cards: lista de objetos de aluno a serem exibidos. */
export type CardsProps = {
  alunos: Aluno[];
};

/** Props do componente Rodape: texto exibido no rodapé da página. */
export type RodapeProps = {
  texto: string;
};
