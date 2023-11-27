import React from 'react'
import { VStack, Flex, Img, Text, Heading } from '@chakra-ui/react'

const Header = () => {
    return(
        <VStack>
            <Flex bgColor="#E7F6DF" h="130px" w="100%" alignItems="center" justifyContent={{base:"center", sm:"center", md:"normal"}}  pl={{base:"0px", sm:"0px", md:"20%"}}>
                <Img h="65px" w="75px" src="img/logo.png" />
                <Flex direction={'column'} ml="10px">
                    <Heading lineHeight="0.9" fontSize="40px" fontWeight="400" color="#4d4d4d">
                        TODO LIST
                    </Heading>
                    <Text fontSize="22px" fontWeight="400" color="#4d4d4d">
                        Create your list
                    </Text>
                </Flex>
            </Flex>
        </VStack>
    )
}

export { Header }