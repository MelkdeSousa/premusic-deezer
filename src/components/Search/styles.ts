import styled from 'styled-components'

import magnifying from '../../assets/icons/search.svg'

export const Container = styled.form`
  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2.4rem;
`

export const Field = styled.input`
  width: 39.5rem;
  height: 5rem;

  padding: 1.6rem;
  text-align: center;

  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 3.2rem;

  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.primary};
    opacity: 0.5;

    text-align: center;
  }
`

export const Magnifying = styled.img.attrs({ src: magnifying })``

export const Button = styled.button`
  width: 5rem;
  height: 5rem;

  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  border-radius: 50%;
  border: none;
  cursor: pointer;
`
