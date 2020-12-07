import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from './Context'


const client = new ApolloClient({
  uri:'https://petgram-server-23xyhmeq5.vercel.app/graphql'
})

ReactDOM.render(
    <Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
