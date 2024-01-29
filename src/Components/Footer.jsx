import React from 'react'
import {Box, Stack, VStack, Heading, HStack, Button, Input,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
   <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
   <Stack direction={['column','row']}>
      <VStack alignItems={"Strech"} w={'full'}px={"4"} >
       <Heading size={'md'} textTransform={'Uppercase'} textAlign={'center'}>
        Subcribe to get updates
       </Heading>
       <HStack borderBottom={"2px solid white"} py={'2'}>
        <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
        <Button
        p={'0'}
        colorScheme='purple'
        variant={'ghost'}
        borderRadius={'0 20px 20px 0'}>
          <AiOutlineSend size={20}/>
        </Button>
       </HStack>
      </VStack>
      <VStack
       w={"full"}
       borderLeft={["none","1px solid white"]}
       borderRight={["none","1px solid white"]}>
        <Heading textTransform={'uppercase'} textAlign={'center'}>
          Practice-Webdev
        </Heading>
        <Text>All rights reserved</Text>
      </VStack>
      <VStack
       w={"full"}
       >
       <Heading size={'md'} textTransform={'uppercase'}>
        Social Media
       </Heading>
       <Button variant={'link'} colorScheme='white'>
         <a target='blank' href="http://youtube.com/6packprogrammer">Youtube</a>
       </Button>
       <Button variant={'link'} colorScheme='white'>
         <a target='blank' href="http://youtube.com/6packprogrammer">Instagran</a>
       </Button>
       <Button variant={'link'} colorScheme='white'>
         <a target='blank' href="http://youtube.com/6packprogrammer">Facebook</a>
       </Button>
      </VStack>
   </Stack>
   </Box>
  )
}

export default Footer