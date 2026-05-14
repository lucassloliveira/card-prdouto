import { useState, useCallback } from 'react';

export function useCarrinho() {
  const [itens, setItens] = useState(new Map());

  // Callback para evitar recriação da função a cada render
  const adicionar = useCallback((id) => {
    setItens(prev => {
      const novo = new Map(prev)
      novo.set(id, (novo.get(id) || 0) + 1)
      return novo
    })
  }, []);

  const remover = useCallback((id) => {
    setItens(prev => {
      const novo = new Map(prev)
      const qtdAtual = novo.get(id) || 0
      if (qtdAtual <= 1) novo.delete(id)
      else novo.set(id, qtdAtual - 1)
    return novo
    })
  }, []);

  // Valore derivados, calculados na hora, sem estado extra
  const getQtd = (id) => itens.get(id) || 0;

  const totalItens = [...itens.values()].reduce((acc, qtd) => acc + qtd, 0);

  // IDs que irão cruzar com os dados
  const itensDoCarrinho = [...itens.entries()].map(([id, qtd]) => ({ id, qtd }));

  return {
    adicionar,
    remover,
    getQtd,
    totalItens,
    itensDoCarrinho,
  }
}
