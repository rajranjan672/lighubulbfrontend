import React from "react";

import 
{ Flex, 
  Box, 
  Button, 
  Image, 
  Text, 
  useColorModeValue
  } from "@chakra-ui/react"

  import myIcon from "../public/icon.svg"
  import { IoEllipsisHorizontalSharp } from "react-icons/io5";
  import { FaTools, FaFistRaised } from "react-icons/fa"

const Card = () => {
  return(
    <Flex
    m={8}
    borderRadius='20px'
    bgColor="#f5f5f5"
    h='345px'
    w={{ base: "315px", md: "345px" }}
    direction='column'>
    <Box p='20px'>
      <Flex w='100%' mb='10px'>
        <Image me='auto' />
      </Flex>
      </Box>
      <Flex
      boxShadow='lg'
      bgColor="#f5f5f5"
        w='100%'
        p='20px'
        borderBottomLeftRadius='inherit'
        borderBottomRightRadius='inherit'
        height='100%'
        direction='column'>
        <Text
          fontSize='sm'
          color='gray.500'
          lineHeight='24px'
          pe='40px'
          fontWeight='500'
          mb='auto'>
          You have the opportunity to play this game of life you need to
          appreciate every moment.
        </Text>
        <Flex>
          <Flex me='25px'>
            <Button leftIcon={<FaTools />} variant='solid' color='whitesmoke' bgColor='#9069FF' fontSize='md' fontWeight='500'>
              Build
            </Button>
          </Flex>
          <Flex>
            <Button leftIcon={<FaFistRaised />} variant='outline' border='2px' borderColor='#9069FF' color='#9069FF' fontSize='md' fontWeight='500'>
              Vouch
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Card