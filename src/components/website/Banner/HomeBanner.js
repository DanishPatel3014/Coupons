import { Box, Button, color, Container, FormControl, Heading, Icon, Input, Stack , Text} from '@chakra-ui/react'
import React from 'react'
import { BiSearchAlt} from 'react-icons/bi'

export default function HomeBanner() {
  return (
    <>
  
    <Stack py={'32'} bg={'#001E3C'} w={'full'} textAlign={'center'}>
    <Container maxW={'8xl'}>
    <Box mb={'10'}>
    <Heading mb={'3'} color={'#fff'} as='h2' size='xl'>
    SavingLite have some Special <Text color={'brand.300'} display={'inline-block'} >Voucher Codes</Text> for you!
  </Heading >
  <Heading color={'brand.200'} as='h4' size='md' fontWeight={'400'}>With <Text color={'brand.300'} display={'inline-block'} >20,093</Text> offers from <Text color={'brand.300'} display={'inline-block'} >8,538</Text> stores, we have a coupon to save you an average</Heading>
    </Box>
    <Stack maxW={'5xl'} margin={'auto'}>
    <FormControl>
  
  <Input 
  letterSpacing={'2px'} 
  fontFamily={'Montserrat, sans-serif'} 
  color={'brand.200'} 
  borderWidth={'2px'} 
  borderRadius={'30px'}  
  height={'60px'} 
  type='email'  
  placeholder={'Search Thousand of Stores in Saving'} 
  _placeholder={{color:'#fff',fontSize:'16px'}} />
<Button  bg={'brand.300'} w={'45px'} h={'45px'} borderRadius={'50%'} position={'absolute'} margin={'auto'} top={'0'} bottom={'0'} right={'6px'}><Icon color={'brand.200'} boxSize='25px' as={BiSearchAlt}/></Button>
</FormControl>
    </Stack>
    </Container>
    </Stack>
   
    </>
  )
}
