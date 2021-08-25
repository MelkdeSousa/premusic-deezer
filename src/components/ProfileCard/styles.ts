import styled from 'styled-components'

export const Container = styled.a`
  width: fit-content;
  height: auto;

  text-decoration: none;

  background: ${({ theme }) => theme.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;

  display: flex;
  align-items: center;
  column-gap: 1.6rem;
  padding: 1.6rem;

  position: absolute;
  bottom: 3.2rem;
  right: 3.2rem;
`

export const Avatar = styled.img`
  width: 5.6rem;
  height: auto;

  border-radius: 50%;
`

export const Text = styled.span`
  font-family: Ubuntu, sans-serif;

  font-weight: 700;
  font-size: 1.6rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.white};
`
