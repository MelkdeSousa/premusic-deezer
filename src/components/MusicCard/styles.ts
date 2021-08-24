import styled from 'styled-components'

import play from '../../assets/icons/play.svg'
import pause from '../../assets/icons/pause.svg'
import logoDeezer from '../../assets/images/logo-deezer.svg'

export const Container = styled.div`
  width: 42rem;
  height: 9.6rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 2.4rem 1.6rem;

  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 2.4rem;

  & > img {
    cursor: pointer;
  }
`

export const Thumb = styled.img`
  width: 11.6rem;
  height: 7.8rem;

  border-radius: 1.6rem;
  object-fit: cover;
`

export const Artist = styled.div`
  width: inherit;

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

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
`

export const LikeButton = styled.img`
  width: 4rem;
  height: auto;

  cursor: pointer;
`

export const ToDeezer = styled.a``

export const PlayerPreview = styled.audio``

export const LogoDeezer = styled.img.attrs({
  src: logoDeezer
})`
  width: 4.8rem;
  height: auto;
`

export const Play = styled.img.attrs({ src: play })`
  width: 3.2rem;
  height: auto;
  margin: 0 1.6rem;
`

export const Pause = styled.img.attrs({ src: pause })`
  width: 3.2rem;
  height: auto;
  margin: 0 1.6rem;
`
