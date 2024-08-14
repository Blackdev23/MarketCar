import MarketCarPages from '@/pages/MarketCar'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'


const page = () => {
  return (
    <ChakraProvider>
      <MarketCarPages/>
    </ChakraProvider>
    
  )
}

export default page