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
  font-size: 32px;
  font-weight: normal;
`

const LinkHome = styled(Link)`
  color:#212121;
  font-weight: bold;
  text-decoration: none;
  font-size: 32px;
  width: 100%;
`

const NotFoundImg = styled.img`
  width:200px;
  height:200px;
`

export const NotFound = () => (
  <ContainerNotFound>
    <NotFoundImg src={NoFoundLogo}/>
    <Title>Error 404 - Page no found</Title>
    <LinkHome to='/'>Go home</LinkHome>
  </ContainerNotFound>
)