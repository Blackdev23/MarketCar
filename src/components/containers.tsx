import {
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Image,
    Skeleton,
    Box,
    TextProps
  } from '@chakra-ui/react';
  import React, { useState } from 'react'
import { PropsWithChildren } from 'react';

const Containers = () => {
    return(
        <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
          <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
            <Box mr={{ base: 0, md: 5 }} pos="relative">
              <Image
              boxShadow="lg"
              w="100%"
              h="100%"
              minW={{ base: 'auto', md: '30rem' }}
              maxH="20rem"
              objectFit="cover"
              src={`https://jpimg.com.br/uploads/2020/10/iphone.png`}
              rounded="md"
              fallback={<Skeleton />}
              />
            </Box>
            <Stack direction="column" spacing={6} justifyContent="center">
              <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
                Bem-vindo à TechNexus, a sua loja de inovação e tecnologia.
              </chakra.h1>
              <Box>
                <Content>
                  Qualidade Garantida: Trabalhamos apenas com os modelos mais confiáveis e avançados, garantindo que você receba o melhor em tecnologia.
                </Content>
                <Content mt={4}>
                  Atendimento Personalizado: Nossa equipe é apaixonada por tecnologia e está aqui para ajudá-lo a encontrar o celular ideal para você.
                </Content>
                <Content mt={4}>
                  Ofertas Exclusivas: Aproveite promoções especiais e ofertas imperdíveis para ter o smartphone dos seus sonhos a um preço que cabe no seu bolso.
                </Content>
              </Box>
            </Stack>
          </Stack>
        </Container>
    )
}

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
    return (
      <Text
        fontSize="md"
        textAlign="left"
        lineHeight="1.375"
        fontWeight="400"
        color="gray.500"
        {...props}
      >
        {children}
      </Text>
    );
  };
  
  function DottedBox() {
    return (
      <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
        <svg
          color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
          width="350"
          height="420"
          fill="none"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
        </svg>
      </Box>
    );
  }

export default Containers