import {
  Flex,
  Button,
  Stack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

import { Input } from '../components/Form/Input'

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function handleSignIn(values) {
    console.log(values);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input
            name='email'
            type='email'
            label="E-mail"
            {...register('email')}
          />
          <Input
            name='password'
            type='password'
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme='pink' size='lg' >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
