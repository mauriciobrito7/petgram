import React from 'react'
import { Fragment, Div, Title, Subtitle } from './Layout.styles'

export const Layout = ({ children, title, subtitle }) => {
  return <Fragment>
      {title && <title>{ title } Petgram</title>}
      { 
        subtitle && <meta name='decription' content={subtitle} />
      }
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>subtitle</Subtitle>}
        {children}
      </Div>
    
  </Fragment>
}