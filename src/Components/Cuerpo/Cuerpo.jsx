import { Box, Flex, Image, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Lista } from '../Lista/Lista';
import { Menu } from '../Menu/Menu';

const Cuerpo = () => {
    const [menuPrincipal, setMenuPrincipal] = useState(true)
    const [tareaRecibida, setTareaRecibida] = useState("")
    const [tareas, setTareas] = useState([])
    const [historial, setHistorial] = useState([])
    const recibirTarea = (e) => {
        setTareaRecibida(e.target.value)
    }
    const seleccionarMenu = (seleccion) =>{
        setMenuPrincipal(seleccion)
    }
    const agregarTarea = () => {
        if (tareaRecibida != ""){
            tareas.push(tareaRecibida)
            setTareaRecibida("")
        }
    }
    const borrarTarea = (tarea, indice) => {
        historial.push(tarea)
        tareas.splice(indice, 1)
    }
    useEffect(() => {

    },[])
    return(
        <VStack fontSize="1.2rem" lineHeight="1.5" fontWeight="400" fontFamily="Roboto,sans-serif" w="100%">
            <Flex direction="row" w="80%" alignContent="center" justifyContent={{base:"center", sm:"center", md:"space-around"}}>
                <Box display={{base:"none", sm:"none", md:"block"}}>
                    <Menu seleccionarMenu={seleccionarMenu} menuPrincipal={menuPrincipal} direction={"column"} />
                </Box>
                <Flex direction="column" mt="50px">
                    <Flex direction="column">
                        <InputGroup size='xxl' w={{base:"300px", sm:"400px", md:"500px", lg:"600px"}} maxW="600px">
                            <Input w="100%" h="60px" pr="1.2rem"  p='15px' border="2px solid #e6e6e6" mb={{base:"0px", sm:"0px", md:"30px"}} borderRadius="20px" fontSize="1.2rem" onChange={recibirTarea} value={tareaRecibida} placeholder='Enter yor Task' isDisabled={!menuPrincipal ? true : false}  variant={menuPrincipal ? "outline" : "filled"}/>
                            <InputRightElement>
                                <Image src='img/agregar.png' alt='+' w="30px" cursor={menuPrincipal ? "pointer" : "no-drop"} top="15px" right="15px" position="relative" onClick={agregarTarea} />
                            </InputRightElement>
                        </InputGroup>
                        <Box display={{base:"block", sm:"block", md:"none"}}  mb={{base:"30px", sm:"30px", md:"0px"}}>
                            <Menu seleccionarMenu={seleccionarMenu} menuPrincipal={menuPrincipal} direction={"row"} />
                        </Box>
                    </Flex>
                        <Lista seleccionMenu={menuPrincipal ? tareas : historial} borrarTarea={borrarTarea} menuPrincipal={menuPrincipal} />
                </Flex>
            </Flex>
        </VStack>
    )
}

export { Cuerpo }