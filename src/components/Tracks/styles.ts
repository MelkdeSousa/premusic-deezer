import styled from 'styled-components'

export const Container = styled.ul`
    background: ${({ theme }) => theme.primary};
    width: 48rem;
    height: 56rem;

    padding: 3.2rem;
    row-gap: 1.6rem;

    box-shadow: .0rem .4rem .4rem rgba(0, 0, 0, 0.25);
    border-radius: 5.0rem;

    display: flex;
    flex-direction: column;
    align-items: center;

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
