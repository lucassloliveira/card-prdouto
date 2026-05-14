// =======================
// ESTILOS DO CardProduto 
// =======================
import styled from 'styled-components'

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme, $adicionado }) =>
    $adicionado ? theme.colors.borderSuccess : theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: border-color ${({ theme }) => theme.transitions.normal},
              box-shadow  ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

export const Badge = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  width: fit-content;

  /* Cor dinâmica com base no estado */
  background: ${({ theme, $adicionado }) =>
    $adicionado ? theme.colors.successLight : theme.colors.primaryLight};
  color: ${({ theme, $adicionado }) =>
    $adicionado ? theme.colors.success : theme.colors.primary};
`

export const NomeProduto = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`

export const TagRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
`

export const Tag = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const Preco = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xxl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;
`

export const PrecoLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-right: 4px;
`

export const Parcelas = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: -6px;
`

// Controle de quantidade: − [ N ] +
export const QuantidadeControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 4px ${({ theme }) => theme.spacing.sm};
`

export const QuantidadeValor = styled.span`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.text};
  min-width: 24px;
`

export const BotaoQtd = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }
`

// O botão principal usa $adicionado para definir sua aparência
export const Botao = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.normal},
              color      ${({ theme }) => theme.transitions.normal};

  background: ${({ theme, $adicionado }) =>
    $adicionado ? theme.colors.successLight : theme.colors.primaryLight};

  color: ${({ theme, $adicionado }) =>
    $adicionado ? theme.colors.success : theme.colors.primary};

  &:hover {
    background: ${({ theme, $adicionado }) =>
      $adicionado ? theme.colors.dangerLight : theme.colors.primary};
    color: ${({ theme, $adicionado }) =>
      $adicionado ? theme.colors.danger : '#ffffff'};
  }

  &:active {
    transform: scale(0.98);
  }
`
