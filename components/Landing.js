import React from "react";
import { Flex, Button, Text, useColorMode, Box, Image, Heading, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGoogle } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg"

import "../public/rocket.svg"

const Landing = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <>
    <Flex
      as="header"
      position="fixed"
      top={0}
      right={0}
      left={0}
      zIndex={1}
      p="5"
      bg={`mode.${colorMode}.header`}
      justify="space-between"
      align="center"
    >
      <Text mx={8} fontSize="3xl" fontWeight="bold">liteBulb</Text>
      <Flex>
        <Button
          size="md"
          leftIcon={<CgDarkMode />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          mr="3"
        >
        {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        {/* <Button size="md" colorScheme="twitter" leftIcon={<FaTwitter />}>
          Login with Twitter
        </Button> */}
        <Button onClick={onOpen} size='md'>
          Sign in
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='scale'>
        <ModalContent backdropFilter=''>
        <Button size="md" colorScheme="twitter" leftIcon={<FaTwitter />}>
          Login with Twitter
        </Button>

        <Button mt={4} size="md" colorScheme={color} bg={bg} leftIcon={<FaGoogle />}>
          Login with Google
        </Button>
        </ModalContent>
        </Modal>
      </Flex>
    </Flex>

    <Divider />

    <Flex height="50vh" alignItems="center">
      <Box mt='20' ml='20' >
        <Heading as="h1" size="xl" mb="4">
          Launch Your Next Idea 💡
        </Heading>
        <Text>
          With our platform, you can turn your ideas into a reality and build it for users
        </Text>
      </Box>
      <Image mt="44" ml='96' src="rocket.svg" alt="Rocket Illustration" boxSize="lg" />
    </Flex>
  
    </>
  );
};


export default Landing;

