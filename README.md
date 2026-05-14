# 🛒 Loja Tech — CardProduto com CSS-in-JS

Projeto desenvolvido como atividade prática do módulo de **CSS-in-JS** do curso de Front-End.  
Demonstra a refatoração de um componente React utilizando **Styled Components**, com estilização dinâmica, design tokens e separação de responsabilidades.

---

## 📋 Sobre o projeto

O projeto consiste em uma interface de loja com cards de produto interativos. O usuário pode adicionar e remover itens do carrinho, controlar a quantidade de cada produto e acompanhar o resumo em tempo real.

---

## ✨ Funcionalidades

- Listagem de produtos em grid responsivo
- Adição e remoção de itens do carrinho
- Controle de quantidade por produto
- Resumo do carrinho com total atualizado em tempo real
- Estilização dinâmica com base no estado do componente
- Barra superior com contagem e valor total do carrinho

---

## 🚀 Tecnologias utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18 | Biblioteca de interface |
| Vite | 5 | Bundler e servidor de desenvolvimento |
| Styled Components | 6 | CSS-in-JS e estilização dinâmica |
| PropTypes | 15 | Validação de props em desenvolvimento |

---

## 📁 Estrutura do projeto

```
src/
├── data/
│   └── produtos.js              # Dados estáticos dos produtos
├── hooks/
│   └── useCarrinho.js           # Lógica do carrinho (custom hook)
├── styles/
│   ├── theme.js                 # Design tokens centralizados
│   └── GlobalStyle.js           # Estilos globais com createGlobalStyle
├── components/
│   ├── CardProduto/
│   │   ├── index.jsx            # Componente e PropTypes
│   │   └── styles.js            # Styled components do card
│   └── CarrinhoBar/
│       ├── index.jsx            # Barra superior
│       └── styles.js            # Styled components da barra
├── App.jsx                      # Componente raiz
└── main.jsx                     # ThemeProvider + GlobalStyle + entrada
```

---

## ⚙️ Como rodar o projeto

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/card-produto.git

# Entre na pasta
cd card-produto

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🧠 Conceitos aplicados

**CSS-in-JS** — Estilos definidos dentro do JavaScript usando template literals, com escopo automático por componente e sem conflitos de classe.

**Styled Components** — Biblioteca utilizada para criar componentes estilizados com a sintaxe `styled.tag`. Cada elemento visual é um componente nomeado e reutilizável.

**Estilização dinâmica** — O botão e a borda do card mudam de cor com base na prop `$adicionado`, utilizando interpolação de função dentro do template literal:
```js
background: ${({ theme, $adicionado }) =>
  $adicionado ? theme.colors.successLight : theme.colors.primaryLight};
```

**ThemeProvider** — Injeta o objeto de tema em todos os styled components da aplicação via Context API, eliminando a necessidade de passar cores manualmente.

**Custom Hook** — `useCarrinho` isola toda a lógica do carrinho (adicionar, remover, calcular totais) fora dos componentes, deixando-os responsáveis apenas pela exibição.

**Transient Props (`$`)** — Convenção do Styled Components v6 para props usadas apenas no CSS, que não são repassadas ao DOM HTML.

---

## 👨‍💻 Autor

Desenvolvido durante o curso de Front-End — Módulo CSS-in-JS.
