import { useEffect } from "react";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";
import type { Aluno } from "./types";

import avatar01 from "./assets/img/avatar01.png";
import avatar02 from "./assets/img/avatar02.png";
import avatar03 from "./assets/img/avatar03.png";
import avatar04 from "./assets/img/avatar04.png";
import avatar05 from "./assets/img/avatar05.png";
import avatar06 from "./assets/img/avatar06.png";
import avatar07 from "./assets/img/avatar07.png";
import avatar08 from "./assets/img/avatar08.png";
import avatar09 from "./assets/img/avatar09.png";
import avatar10 from "./assets/img/avatar10.png";
import avatar11 from "./assets/img/avatar11.png";
import avatar12 from "./assets/img/avatar12.png";
import avatar00 from "./assets/img/avatar00.png";



// Dados fornecidos pelo componente App aos filhos diretos, via props.
// Troque estes valores pelos dados reais da sua turma/grupo quando for entregar.
const TITULO_PAGINA = "Turma 1TDSPI — Checkpoint 4";

// Arquivos dentro de /public são servidos a partir da raiz do site, então o
// logo é referenciado por caminho (string), não por import — é assim que o
// enunciado pede: "logo carregado a partir de uma imagem localizada na pasta public".
const LOGO = "/logo.png";

const TEXTO_RODAPE = "Checkpoint 4 · Front-End Design Engineering · FIAP © 2026";

const alunos: Aluno[] = [
  {id:  0, nome: "Guilherme de Oliveira Alves", rm: "571683", avatar: avatar00 },
  { id: 1, nome: "Ana Beatriz Souza", rm: "551234", avatar: avatar01 },
  { id: 2, nome: "Bruno Carvalho Lima", rm: "551235", avatar: avatar02 },
  { id: 3, nome: "Carla Mendes Rocha", rm: "551236", avatar: avatar03 },
  { id: 4, nome: "Diego Ferreira Alves", rm: "551237", avatar: avatar04 },
  { id: 5, nome: "Elisa Martins Costa", rm: "551238", avatar: avatar05 },
  { id: 6, nome: "Felipe Nogueira Dias", rm: "551239", avatar: avatar06 },
  { id: 7, nome: "Gabriela Pires Santos", rm: "551240", avatar: avatar07 },
  { id: 8, nome: "Henrique Barbosa Melo", rm: "551241", avatar: avatar08 },
  { id: 9, nome: "Isabela Ramos Teixeira", rm: "551242", avatar: avatar09 },
  { id: 10, nome: "João Pedro Azevedo", rm: "551243", avatar: avatar10 },
  { id: 11, nome: "Larissa Nunes Cardoso", rm: "551244", avatar: avatar11 },
  { id: 12, nome: "Marcelo Andrade Ribeiro", rm: "551245", avatar: avatar12 },
];

function App() {
  // Título exibido também na aba do navegador, como pede o enunciado.
  useEffect(() => {
    document.title = TITULO_PAGINA;
  }, []);

  return (
    <div className="app">
      <Cabecalho titulo={TITULO_PAGINA} logo={LOGO} />
      <Conteudo alunos={alunos} />
      <Rodape texto={TEXTO_RODAPE} />
    </div>
  );
}

export default App;
