import React from 'react'
import { ChakraProvider, Flex  } from '@chakra-ui/react'
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