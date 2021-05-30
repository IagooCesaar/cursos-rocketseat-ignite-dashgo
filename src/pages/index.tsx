import { Flex, Input, Button } from '@chakra-ui/react'

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
        <Input type='email' name='email' />
        <Input type='password' name='password' />

        <Button
          type="submit"
          mt="6"
          colorScheme='pink'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
