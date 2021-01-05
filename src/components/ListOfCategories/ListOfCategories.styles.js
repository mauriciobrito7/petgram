import styled, { css } from 'styled-components'
import {fadeIn} from '../../styles/animation'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    padding:1em;
    -ms-overflow-style: none;
    scrollbar-width:none;
    //when fixed = true
    ${props => props.fixed && css`{
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        left:0;
        margin: 0 auto !important;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right:0;
        top:-20px;
        transform: scale(.7);
        z-index:1000;
        ${fadeIn({time:'0.3s'})}
    }`}
`

export const Item = styled.li`
    padding: 0 8px;
`