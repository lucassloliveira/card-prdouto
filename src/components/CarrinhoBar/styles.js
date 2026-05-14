// ============================================================
// ESTILOS DO CarrinhoBar
// ============================================================
import styled from 'styled-components'

export const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const Logo = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
`

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`

export const Badge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  padding: 2px 10px;
  min-width: 24px;
  text-align: center;
  /* $visivel controla a opacidade sem remover o elemento do DOM */
  opacity: ${({ $visivel }) => $visivel ? 1 : 0};
  transition: opacity 0.2s ease;
`

export const TotalTexto = styled.span`
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`
