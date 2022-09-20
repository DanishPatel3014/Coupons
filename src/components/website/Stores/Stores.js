import { Box, Container, Flex, Heading, Icon, Image, Img, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import c1 from '../../../assets/images/coupon/1.jpg'
import c2 from '../../../assets/images/coupon/2.jpg'
import c3 from '../../../assets/images/coupon/3.jpg'
import c4 from '../../../assets/images/coupon/4.jpg'
import c5 from '../../../assets/images/coupon/5.jpg'
import c6 from '../../../assets/images/coupon/6.jpg'
import c7 from '../../../assets/images/coupon/7.jpg'
import c8 from '../../../assets/images/coupon/8.jpg'
import { AiOutlineTags } from 'react-icons/ai'

export default function Stores() {
    return (
        <>
            <Stack py={'20'} bg={'#001E3C'} w={'full'} >
                <Container maxW={'8xl'}>
                    <Stack mb={'10'}>
                        <Heading mb={'3'} color={'brand.200'} as='h2' size='xl'>
                            Browse Top <Text color={'brand.300'} display={'inline-block'} >Stores</Text>
                        </Heading >
                    </Stack>
                    <Stack>
                        <Tabs variant='soft-rounded' colorScheme='whatsapp'>
                            <TabList mb={'12'}>
                                <Tab color={'brand.300'}>Tranding Store</Tab>
                                <Tab color={'brand.300'}>Top Stores</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Flex gap={'4'} flexWrap={'wrap'}>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c1} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c2} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c3} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c4} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c5} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c6} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c7} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c8} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c1} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c2} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                <Flex gap={'4'} flexWrap={'wrap'}>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c2} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c1} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c4} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c3} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c5} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c6} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c7} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c8} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c1} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                        <Box p={'3'} textAlign={'center'} w={'234px'} h={'202'} bg={'brand.200'}>
                                            <Img src={c2} w={'100px'} alt='' m={'auto'} mb={'3'} />
                                            <Heading fontSize={'16px'} color={'brand.300'}>Lovisa Offers</Heading>
                                            <Text color={'brand.500'} fontSize={'14px'} mb={'2'}>Shop At The Adidas Store And Get Upto 50% Off</Text>
                                            <Text color={'brand.500'} verticalAlign={'middle'} fontSize={'12px'} fontWeight={'bold'}><Icon verticalAlign={'middle'} boxSize='5' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />11 Off</Text>
                                        </Box>
                                    </Flex>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Stack>
                </Container>
            </Stack>
        </>
    )
}
