import React from 'react'
import { ChakraProvider  } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Cuerpo } from './Components/Cuerpo/Cuerpo'

function App() {

  return (
    <ChakraProvider>
      <Header/>
      <Cuerpo/>
    </ChakraProvider>
  )
}

export default App