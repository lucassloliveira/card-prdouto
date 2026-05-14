// ============================================================
// COMPONENTE CarrinhoBar — barra superior com resumo do carrinho
// ============================================================
import PropTypes from 'prop-types'
import { Bar, Logo, CartInfo, Badge, TotalTexto } from './styles'

function CarrinhoBar({ totalItens, totalValor }) {
  return (
    <Bar role="banner">
      <Logo>Loja Tech</Logo>

      <CartInfo aria-label={`Carrinho com ${totalItens} itens`}>
        🛒
        <span>{totalItens} {totalItens === 1 ? 'item' : 'itens'}</span>

        {/* Badge do total: existe sempre, mas fica invisível quando vazio */}
        <Badge $visivel={totalItens > 0} aria-hidden={totalItens === 0}>
          R$ {totalValor.toFixed(2)}
        </Badge>
      </CartInfo>
    </Bar>
  )
}

CarrinhoBar.propTypes = {
  totalItens: PropTypes.number.isRequired,
  totalValor: PropTypes.number.isRequired,
}

export default CarrinhoBar
