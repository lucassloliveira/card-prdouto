// ============================================================
// COMPONENTE CardProduto
// ============================================================
import PropTypes from 'prop-types'
import {
  Card, Badge, NomeProduto, TagRow, Tag,
  Preco, PrecoLabel, Parcelas,
  QuantidadeControl, QuantidadeValor, BotaoQtd,
  Botao,
} from './styles'

function CardProduto({ produto, quantidade, onAdicionar, onRemover }) {
  const adicionado = quantidade > 0
  const parcela = (produto.preco / produto.parcelas).toFixed(2)

  return (
    // article é mais semântico que div para um item de conteúdo
    <Card $adicionado={adicionado} aria-label={`Produto: ${produto.nome}`}>

      {/* Badge dinâmica: mostra categoria ou "no carrinho" */}
      <Badge $adicionado={adicionado}>
        {adicionado ? '✓ No carrinho' : produto.categoria}
      </Badge>

      <NomeProduto>{produto.nome}</NomeProduto>

      {/* Tags de características */}
      <TagRow>
        {produto.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagRow>

      {/* Preço com parcelamento */}
      <Preco>
        <PrecoLabel>R$</PrecoLabel>
        {produto.preco.toFixed(2)}
      </Preco>
      <Parcelas>
        {produto.parcelas}x de R$ {parcela} sem juros
      </Parcelas>

      {/* Controle de quantidade, aparece só quando adicionado */}
      {adicionado && (
        <QuantidadeControl aria-label="Controle de quantidade">
          <BotaoQtd onClick={() => onRemover(produto.id)} aria-label="Diminuir quantidade">−</BotaoQtd>
          <QuantidadeValor>{quantidade} un.</QuantidadeValor>
          <BotaoQtd onClick={() => onAdicionar(produto.id)} aria-label="Aumentar quantidade">+</BotaoQtd>
        </QuantidadeControl>
      )}

      {/* Botão principal */}
      <Botao
        $adicionado={adicionado}
        onClick={() => adicionado ? onRemover(produto.id) : onAdicionar(produto.id)}
        aria-pressed={adicionado}
      >
        {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </Botao>

    </Card>
  )
}

// PropTypes: documentação viva + alerta em tempo de desenvolvimento
CardProduto.propTypes = {
  produto: PropTypes.shape({
    id:       PropTypes.number.isRequired,
    nome:     PropTypes.string.isRequired,
    preco:    PropTypes.number.isRequired,
    parcelas: PropTypes.number.isRequired,
    categoria:PropTypes.string.isRequired,
    tags:     PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  quantidade: PropTypes.number.isRequired,
  onAdicionar: PropTypes.func.isRequired,
  onRemover:   PropTypes.func.isRequired,
}

export default CardProduto
