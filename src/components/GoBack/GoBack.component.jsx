import React from 'react'
import {Link, useHistory } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import  styled  from 'styled-components'

const BackIcon = styled(IoMdArrowBack)`
    font-size:'32px';
    margin-bottom:0.5em;
    color:'#212121'
`

export const GoBack = () => {
    const history = useHistory()
    const SIZE = '32px'
    return (
        <Link to='/' onClick={()=> {history.goBack()}}>
            <BackIcon size={SIZE} color={'#212121'}/>
        </Link>
    )
}
