import ReactDOM from 'react-dom'
import React from 'react'
import BaseRouter from './router'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'


ReactDOM.render(
 
  <ChakraProvider theme={theme}>
    <BaseRouter />
  </ChakraProvider>,
  document.getElementById('root')
);

