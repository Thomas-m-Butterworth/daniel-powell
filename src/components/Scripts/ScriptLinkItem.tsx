import styled from 'styled-components'

export const ScriptLinkItem = styled.li`
  list-style: none;
  text-decoration: none;
  text-decoration-line: none;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.scale.h3};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.accent};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:focus {
    filter: none;
  }
  &:active {
    color: ${({ theme }) => theme.colors.accent};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`

export const ScriptLinkDescription = styled.div`
  text-align: justify;
  letter-spacing: 0.35px;
`