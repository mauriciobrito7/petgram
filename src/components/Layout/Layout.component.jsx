import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './Layout.styles'

export const Layout = ({ children, title, subtitle }) => {
  return <Fragment>
    <Helmet>
      {title && <title>{ title } Petgram</title>}
      { 
        subtitle && <meta name='decription' content={subtitle} />
      }
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>subtitle</Subtitle>}
        {children}
      </Div>
    </Helmet>
    
  </Fragment>
}