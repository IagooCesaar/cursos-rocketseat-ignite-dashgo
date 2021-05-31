import {
  Flex,
  Text,
  Box,
  Avatar,
} from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center' >
      <Box mr='4' textAlign='right'>
        <Text>Iago César F. Nogueira</Text>
        <Text color='gray.300' fontSize='small'>
          iagocesar.sgs@gmail.com
            </Text>
      </Box>
      <Avatar size='md' name='Iago César' src='https://github.com/iagoocesaar.png' />
    </Flex>
  )
}