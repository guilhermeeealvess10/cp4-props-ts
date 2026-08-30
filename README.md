# Checkpoint 4 — Componentização e Tipagem de Props com TypeScript

Projeto da disciplina **Front-End Design Engineering** (Turma 1TDSPI), desenvolvido em
React + Vite + TypeScript, com estilização via CSS Modules.

## Integrantes do grupo

> Substitua pelos nomes e RMs reais do seu grupo (até 5 integrantes).

| Nome | RM |
|---|---|
| Guilherme de Oliveira Alves  | 571683 |

**Link do repositório no GitHub:** `https://github.com/seu-usuario/cp4-props-ts`

## Sobre o projeto

A aplicação simula a página de uma turma: o componente `App` centraliza os dados
(título da página, logo, lista de alunos e texto de rodapé) e os distribui via **props**
para os componentes filhos:

- **Cabecalho** — `header` com título (`h1`) e logo, ambos recebidos por props. O logo é
  carregado a partir da pasta `public/`.
- **Conteudo** — envolve o componente `Cards`, repassando a lista de alunos.
- **Cards** — recebe um array de objetos (`id`, `nome`, `rm`, `avatar`) e renderiza um
  card por aluno (mínimo de 10 objetos, conforme pedido no enunciado).
- **Rodape** — exibe um texto recebido por props.

Toda a tipagem das props está centralizada em `src/types.ts`.

## Estrutura de pastas

```
src/
  assets/img/          → avatares dos alunos (importados no App)
  components/
    Cabecalho/
      Cabecalho.tsx
      Cabecalho.module.css
    Conteudo/
      Conteudo.tsx
      Conteudo.module.css
    Cards/
      Cards.tsx
      Cards.module.css
    Rodape/
      Rodape.tsx
      Rodape.module.css
  App.tsx
  index.css            → configurações gerais da página
  types.ts             → tipagem de todas as props
  main.tsx
public/
  logo.png             → logo usado pelo Cabecalho
```

## Como rodar o projeto

```bash
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```
