import { Flex, Input, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as='header'
      w="100%"
      maxWidth={1488}
      h='28'
      marginX='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="light"
        w='64'
      >
        dashgo
        <Text as='span' ml='1' color="pink.500" >.</Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth='400'
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color='gray.50'
          variant='unstyled'
          px='4'
          mr='4'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400' }}
        />
      </Flex>
    </Flex>
  )
}
