import { Text, Input, Stack, Flex, Icon } from '@chakra-ui/react'
import { Colors } from '../colors'
import { IoBagHandleSharp } from "react-icons/io5"
import { IoIosSearch } from "react-icons/io"


const NavBar = () => {
  return (

    <Flex flexDirection={'row'} height='80px' width={'100%'} justifyContent={'space-between'} paddingX={'150px'} borderBottom='4px' borderColor={Colors.gray7} >

      <Stack flexDirection='row' gap='32px' alignItems='center' >

        <Stack _hover={{ color: Colors.gray6 }} cursor="pointer">
          <Text fontWeight='700' fontSize='20px'>Ecommerce</Text>
        </Stack>

        <Stack _hover={{ color: Colors.gray6 }} cursor="pointer">
          <Text fontWeight='400' fontSize='17px'>Shop</Text>
        </Stack>

        <Stack _hover={{ color: Colors.gray6 }} cursor="pointer">
          <Text fontWeight='400px' fontSize='17px'>Stories</Text>
        </Stack>

        <Stack _hover={{ color: Colors.gray6 }} cursor="pointer">
          <Text fontWeight='400px' fontSize='17px'>About</Text>
        </Stack>

        <Stack direction='row' alignItems='center' display='flex' >
          <Icon boxSize={7} as={IoIosSearch} />
          <Input variant='filled' placeholder='Seach' fontWeight='400px' fontSize='17px' width='300px' />
        </Stack>
      </Stack>



      <Flex flexDirection='row' alignItems='center' justifyContent='flex-end' gap='10px' >
        <Icon boxSize={6} cursor={'pointer'} _hover={{ color: Colors.gray6 }} as={IoBagHandleSharp} />
        <Text fontWeight='400px' fontSize='17px' >3</Text>
        <Stack>
          <Text fontWeight='400px' fontSize='17px' _hover={{ color: Colors.gray6 }} cursor="pointer" >Login</Text>
        </Stack>
      </Flex>

    </Flex>


  )
}

export default NavBar
