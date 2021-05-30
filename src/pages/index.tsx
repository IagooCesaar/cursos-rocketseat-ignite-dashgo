import {
  Flex,
  Button,
  Stack,
} from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

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
          <Input
            label="E-mail"
            name='email'
            type='email'
          />

          <Input
            label="Senha"
            name='password'
            type='password'
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
