import React from 'react'
import  styled  from 'styled-components'
import { Link } from 'react-router-dom'
import NoFoundLogo from '../svg/error-404.svg'

const ContainerNotFound = styled.div`
  height:calc(100vh - 100px);
  width:100%;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
`
const Title = styled.h1`
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  color: #888;
  @media (min-width: 720px) {
    font-size: 32px;
  }
`

const LinkHome = styled(Link)`
  color:#212121;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  margin-top: 1em;
  @media (min-width: 720px) {
    font-size: 32px;
  }
`

const NotFoundImg = styled.img`
  width:200px;
  height:200px;
  
`

export const NotFound = () => (
  <ContainerNotFound>
    <NotFoundImg src={NoFoundLogo}/>
    <Title>Error 404 - Page not found</Title>
    <LinkHome to='/'>Go home</LinkHome>
  </ContainerNotFound>
)