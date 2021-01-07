import React from 'react'
import { Container } from './ShadowSpinner.styles'

export const ShadowSpinner = ( { shape, width, height, orientation } ) => {
    return (
        <Container className={orientation}>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
            <div className={shape} style={{width: `${width}`, height:`${height}`}}></div>
        </Container>
    )
}
