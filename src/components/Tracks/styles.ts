import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  background: ${({ theme }) => theme.primary};
  width: 48rem;
  height: 64vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 5rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.ul`
  position: absolute;
  top: 9.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 3.2rem 3.2rem;
  row-gap: 1.6rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    list-style: none;
  }
`
