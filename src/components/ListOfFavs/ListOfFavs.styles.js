import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSadCry } from 'react-icons/fa'

export const Fav = styled(Link)`
  border-radius:8px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  display:inline-block;
  margin:1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after { 
    content:'';
    display:block;
    padding-bottom: 100%;   
  }
`
export const Empty = styled.div`
  width:100%;
  margin-top:50%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  color: #888;
`

export const Icon = styled(FaSadCry)`
  font-size:256px;

`

export const Title = styled.span`
  font-size:32px;
`

export const Grid = styled.div`
  padding-top: 32px;
` 
export const Image = styled.img`
  object-fit:cover;
  height: 100%;
  width: 100%;
  position: absolute;
`