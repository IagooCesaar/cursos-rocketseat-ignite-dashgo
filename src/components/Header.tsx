import { Flex, Text } from '@chakra-ui/react'

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
    </Flex>
  )
}
