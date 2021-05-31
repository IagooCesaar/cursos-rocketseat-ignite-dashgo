import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";


import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          <Divider my='6' borderColor='gray.700' />

        </Box>
      </Flex>
    </Box>
  )
}