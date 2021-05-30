import { Flex, Input, Button, Stack, FormLabel } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg='gray.800'
        p='8' // padding 2rem ou  32px (múltiplo 4)
        borderRadius='8'
        flexDir="column"
      >
        <Stack
          spacing='4'
        >
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            type='email'
            name='email'
            id='email'
            focusBorderColor='pink.500'
            bgColor="gray.900"
            variant='filled'
            _hover={{
              bgColor: 'gray.900'
            }}
            size='lg'
          />

          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            type='password'
            name='password'
            id='password'
            focusBorderColor='pink.500'
            bgColor="gray.900"
            variant='filled'
            _hover={{
              bgColor: 'gray.900'
            }}
            size='lg'
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
