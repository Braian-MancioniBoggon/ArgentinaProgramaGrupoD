import { Box, Flex, Image, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Lista } from '../Lista/Lista';

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
            <Flex direction="row" flexWrap="wrap" w="75%" alignContent="center">
                <Flex direction="column" mt="50px" flex="0 0 33%">
                    <Flex mb="20px" cursor="pointer" h="33px" alignItems="center" onClick={() => seleccionarMenu(true)}>
                        <Box backgroundColor={!menuPrincipal ? "" : "#00B89F" } w="4px" h="40px" mr="4px"></Box>
                        <Image src='img/lista.png' alt='Lista de tareas' w="33px" h="33px" mr="10px" />
                        <Text h="fit-content">Tasks</Text>
                    </Flex>
                    <Flex mb="20px" cursor="pointer" h="33px" alignItems="center" onClick={() => seleccionarMenu(false)}>
                        <Box backgroundColor={!menuPrincipal ? "#00B89F" : "" } w="4px" h="40px" mr="4px"></Box>
                        <Image src='img/historial.png' alt='Historial' w="33px" h="33px" mr="10px" />
                        <Text h="fit-content">History</Text>
                    </Flex>
                </Flex>
                <Flex direction="column" mt="50px" flex="0 0 66%">
                    <Flex>
                        <InputGroup size='xxl' w="600px" maxW="600px">
                            <Input w="100%" h="60px" pr="1.2rem"  p='15px' border="2px solid #e6e6e6" mb="30px" borderRadius="20px" fontSize="1.2rem" onChange={recibirTarea} value={tareaRecibida} placeholder='Enter yor Task' isDisabled={!menuPrincipal ? true : false}  variant={menuPrincipal ? "outline" : "filled"}/>
                            <InputRightElement>
                                <Image src='img/agregar.png' alt='+' w="30px" cursor={menuPrincipal ? "pointer" : "no-drop"} top="15px" right="15px" position="relative" onClick={agregarTarea} />
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                        <Lista seleccionMenu={menuPrincipal ? tareas : historial} borrarTarea={borrarTarea} menuPrincipal={menuPrincipal} />
                    {/* <Box borderRadius="15px" bgColor="#e6e6e6" p="20px" w="600px" maxW="600px">
                        <Stack spacing="15px">
                            {tareas == 0 && <Text fontWeight="300">Add a Task</Text>}
                            {tareas.map((tarea, indice) => (
                                <Box key={indice}>
                                    <Tarea tarea={tarea} borrarTarea={borrarTarea} indice={indice}/>
                                </Box>
                            ))}                
                        </Stack>
                    </Box> */}
                </Flex>
            </Flex>
        </VStack>
    )
}

export { Cuerpo }