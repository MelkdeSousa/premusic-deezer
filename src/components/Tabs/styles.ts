import styled from 'styled-components'

/* import sparkle from '../../assets/icons/sparkle.svg'
import heart from '../../assets/icons/heart.svg' */

export const Container = styled.div`
  margin: 1.6rem 0;
  display: flex;

  gap: 3.2rem;

  position: fixed;
  z-index: 99;
`

export const Top = styled.div`
  width: 15.8rem;
  height: 5.5rem;

  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1.6rem;
`

export const Like = styled(Top)``
