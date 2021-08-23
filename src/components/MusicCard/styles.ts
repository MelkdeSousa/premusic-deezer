import styled from 'styled-components'

import heartOutlined from '../../assets/icons/heart-outlined.svg'

export const Container = styled.div`
  width: 42rem;
  height: 9.6rem;

  display: flex;
  align-items: center;

  padding: 2.4rem 1.6rem;

  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 2.4rem;
`

export const Thumb = styled.img`
  width: 11.6rem;
  height: 7.8rem;

  border-radius: 1.6rem;
  object-fit: cover;
`

export const Artist = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.6rem;
`

export const Title = styled.span`
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 1.6rem;

  color: ${({ theme }) => theme.primary};
`

export const Name = styled.span`
  font-family: Ubuntu;
  font-weight: 400;

  color: ${({ theme }) => theme.background};
  font-size: 1.6rem;
`

export const Like = styled.img.attrs({ src: heartOutlined })`
  width: 4rem;
  height: auto;

  margin-left: auto;
  cursor: pointer;
`

export const LikeButton = styled(Like)``
