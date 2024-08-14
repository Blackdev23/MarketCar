'use client'
import React, { useState } from 'react'
import * as C from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import * as I from '@chakra-ui/icons'
import {
    chakra,
    Stack
  } from '@chakra-ui/react';
import Containers from '@/components/containers';

interface ICelular {
    id: number,
    titulo: string,
    preco: number,
    descricao: string,
    imgCelular: string
}

interface IShoppingItem {
    produto: ICelular,
    quantidade: number
}

const celulares: ICelular[] = [
    {id:1, titulo:'Iphone 12', preco: 3500.00, descricao: 'Um clássico moderno que combina performance fluida com um design elegante. Ideal para quem busca um smartphone confiável e sofisticado.', imgCelular: 'https://dcdn.mitiendanube.com/stores/004/399/474/products/0c156b80-a438-4661-b726-f3cd61e417c7-e423319bb6bdcf7ae117152616284802-1024-1024.jpg'},
    {id:2, titulo:'Samsung S23', preco: 4000.00, descricao: 'A mais recente inovação da Samsung, trazendo tecnologia avançada e recursos de ponta para quem deseja o melhor em desempenho.', imgCelular: 'https://www.mercam1.com.br/cdn/shop/files/19_1024x.png?v=1720033780'},
    {id:3, titulo:'Iphone 14', preco: 4500.00, descricao: 'O novo padrão de excelência da Apple, com características ainda mais refinadas, câmeras de alta qualidade e um desempenho que impressiona', imgCelular: 'https://dcdn.mitiendanube.com/stores/002/802/567/products/iphone-141-e1c3480bac600215bd16834137343566-1024-1024.jpg'},
    {id:4, titulo:'Samsung S22', preco: 2900.00, descricao: 'Um dispositivo que mistura poder e estilo, perfeito para quem valoriza uma experiência premium com as últimas novidades em tecnologia.', imgCelular: 'https://img.odcdn.com.br/wp-content/uploads/2022/02/S223-1-1024x1024.jpg'},
    {id:5, titulo:'Redmi Note 13', preco: 1250.00, descricao: 'Um dispositivo que mistura poder e estilo, perfeito para quem valoriza uma experiência premium com as últimas novidades em tecnologia.', imgCelular: 'https://cdn.awsli.com.br/995/995871/produto/257777173/redmi-note-13-pro-plus-5g-512gb-12gb-ram-b7928a6c-50dahyx683.png'}
]

const MarketCarPages = () => {
   const[shoppingCelular, setShoppingCelular] = useState<IShoppingItem[]>([])

   const handleAddCelular = (id: number) => {
    const celular = celulares.find((celular) => celular.id === id)
    const celularExisteShopping = shoppingCelular.find(item => item.produto.id === id)

    if(celularExisteShopping){
        const newShoppingCelular:IShoppingItem[] = shoppingCelular.map(item =>{
            if(item.produto.id === id) ({
                ...item,
                quantidade: item.quantidade++
            })

            return item
        })
        setShoppingCelular(newShoppingCelular)
        return
    }

    const carItem:IShoppingItem ={
        produto: celular!,
        quantidade: 1
    }

    const newShoppingCelular:IShoppingItem[] = [...shoppingCelular, carItem]
    setShoppingCelular(newShoppingCelular)
   }
   
   const handleRemoveCelular = (id:number) => {
    const celularExisteShopping = shoppingCelular.find((item) => item.produto.id === id)
    
    if(celularExisteShopping!.quantidade>1){
        const newShoppingCurso:IShoppingItem[] = shoppingCelular.map(item =>{
            if(item.produto.id === id)({
                ...item,
                quantidade:item.quantidade--
            })
    
        return item
        })
       setShoppingCelular(newShoppingCurso)
       return
    }
    const newShoppingCurso: IShoppingItem[] = shoppingCelular.filter(item => item.produto.id !== id)
    setShoppingCelular(newShoppingCurso)
        
    }
      
      const totalCelular = shoppingCelular.reduce((total, precoAtual) => {
        return total + (precoAtual.produto.preco * precoAtual.quantidade)
      },0);

  return (
    <C.Center bg={'gray.50'}>
      <C.VStack>
      <Containers></Containers>

      <C.Divider></C.Divider>
      <C.Divider></C.Divider>
      <C.Divider></C.Divider>

      <Stack>
        <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="center">
            Nossos Produtos
        </chakra.h1>
        <C.HStack>
          {celulares.map(celular =>(
            <Card maxW='sm'>
              <C.CardBody>
                <C.Image
                  src={celular.imgCelular}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <C.Stack mt='6' spacing='3'>
                  <C.Heading size='md'>{celular.titulo}</C.Heading>
                  <C.Text>
                    {celular.descricao}
                  </C.Text>
                  <C.Text color='green.600' fontSize='2xl'>
                    R${celular.preco}
                  </C.Text>
                </C.Stack>
              </C.CardBody>

              <C.Divider />

              <CardFooter>
                <C.ButtonGroup spacing='2'>
                <C.Button  onClick={() => handleAddCelular(celular.id)}
                    leftIcon={<I.PlusSquareIcon/>}
                    size='md'
                    height='48px'
                    width='200px'
                    border='2px'
                    padding='10px'
                    borderColor='green.500'>
                        Adicionar ao carrinho
                    </C.Button>
                </C.ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </C.HStack>
      </Stack>
        
      <C.Heading>Carrinho de compras - R${totalCelular}</C.Heading>

        <C.VStack>
        {shoppingCelular.map((item) =>(<Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
        <C.Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={item.produto.imgCelular}
            alt='Caffe Latte'
        />
        <C.Stack>
            <CardBody>
                <C.Heading size='md'>{item.produto.titulo}</C.Heading>
                <C.Text py='2'>
                  {item.produto.descricao}
                </C.Text>

                <C.Text color='green.600' fontSize='2xl'>
                    {item.quantidade} und
                  </C.Text>

                  <C.Text color='green.600' fontSize='2xl'>
                    R${item.quantidade * item.produto.preco}
                  </C.Text>
            </CardBody>

            <CardFooter>
                <C.ButtonGroup spacing='2'>
                    <C.Button rightIcon={<I.PlusSquareIcon/>} variant='ghost' colorScheme='green' onClick={() => handleAddCelular(item.produto.id)}>
                        Adicionar
                    </C.Button>



                    <C.Button rightIcon={<I.DeleteIcon/>} variant='ghost' colorScheme='red' onClick={() => handleRemoveCelular(item.produto.id)}>
                        Remover
                    </C.Button>
                </C.ButtonGroup>

                
            </CardFooter>
        </C.Stack>
        </Card>

        ))}
        </C.VStack>     

        </C.VStack>
    </C.Center>
    
    
  )
}

export default MarketCarPages