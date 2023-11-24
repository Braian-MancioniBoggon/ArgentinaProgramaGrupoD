import React from 'react'
import { VStack, Flex, Img, Text, Heading } from '@chakra-ui/react'

const Header = () => {
    return(
        <VStack>
            <Flex bgColor="#E7F6DF" h="130px" w="100%" alignItems="center" pl="150px">
                <Img h="65px" w="75px" src="img/logo.png" />
                <Flex direction={'column'} ml="10px">
                    <Heading as="h1">
                        TODO LIST
                    </Heading>
                    <Text as="p">
                        Create your list
                    </Text>
                </Flex>
            </Flex>
        </VStack>
    )
}

export { Header }