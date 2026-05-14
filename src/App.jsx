import styled from 'styled-components'
import { produtos } from './data/produtos'
import { useCarrinho } from './hooks/useCarrinho'
import CardProduto from './components/CardProduto'
import CarrinhoBar from './components/CarrinhoBar'

// O único styled component que faz sentido estar aqui
// é o layout raiz da página — não pertence a nenhum componente específico
const PageWrapper = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`

const SectionLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

// Painel de resumo do carrinho
const ResumoPainel = styled.aside`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: ${({ theme }) => theme.spacing.xl};
`

const ResumoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  &:last-of-type { border-bottom: none; }
`

const ResumoNome = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`

const ResumoInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`

const ResumoQtd = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors.textLight};
`

const ResumoPreco = styled.span`
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text};
`

const ResumoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 2px solid ${({ theme }) => theme.colors.border};
`

const ResumoVazio = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`

function App() {
  const { adicionar, remover, getQtd, totalItens, itensDoCarrinho } = useCarrinho()

  // Calcula o total em R$ cruzando os itens do carrinho com os dados
  const totalValor = itensDoCarrinho.reduce((acc, { id, qtd }) => {
    const produto = produtos.find(p => p.id === id)   // Busca o primeiro elemento do array onde a condição é verdadeira
    return acc + (produto ? produto.preco * qtd : 0)  // Se o produto não for encontrado, soma 0 ao invés de quebrar
  }, 0)

  return (
    <PageWrapper>
      {/* Barra superior com contagem e valor do carrinho */}
      <CarrinhoBar totalItens={totalItens} totalValor={totalValor} />

      <SectionLabel>Produtos disponíveis</SectionLabel>

      {/* Grade de produtos */}
      <Grid aria-label="Lista de produtos">
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}  // Identifica qual item da lista mudou
            produto={produto}
            quantidade={getQtd(produto.id)}
            onAdicionar={adicionar}  // Referência passad na função, o componente filho só chama quando precisa
            onRemover={remover}
          />
        ))}
      </Grid>

      {/* Resumo do carrinho */}
      <SectionLabel>Resumo do carrinho</SectionLabel>
      <ResumoPainel aria-label="Resumo do carrinho">
        {itensDoCarrinho.length === 0 ? (
          <ResumoVazio>Nenhum item adicionado ainda.</ResumoVazio>
        ) : (
          <>
            {itensDoCarrinho.map(({ id, qtd }) => {
              const produto = produtos.find(p => p.id === id)
              return (
                <ResumoItem key={id}>
                  <ResumoNome>{produto.nome}</ResumoNome>
                  <ResumoInfo>
                    <ResumoQtd>{qtd}x</ResumoQtd>
                    <ResumoPreco>R$ {(produto.preco * qtd).toFixed(2)}</ResumoPreco>
                  </ResumoInfo>
                </ResumoItem>
              )
            })}
            <ResumoTotal>
              <span>Total</span>
              <span>R$ {totalValor.toFixed(2)}</span>
            </ResumoTotal>
          </>
        )}
      </ResumoPainel>
    </PageWrapper>
  )
}

export default App
