import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.div.attrs(
  (props: { isActive: boolean } & DefaultTheme) => ({
    ...props
  })
)`
  width: 15.8rem;
  height: 5.5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1.6rem;

  transition: all 0.3s;

  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.6;
      box-shadow: none;
    `}

  :hover {
    opacity: 0.6;
  }
`

export const Icon = styled.img`
  width: 2.4rem;
  height: auto;
`

export const Title = styled.h1.attrs(props => ({
  color: props.color
}))`
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.7rem;

  color: ${({ color }) => color};
`
