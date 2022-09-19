import { Container, Grid, Box, Stack, GridItem, Image, Heading, HStack, Tag, TagLeftIcon, TagLabel, Link, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { BiStore,BiCheckShield } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { AiOutlineTags} from 'react-icons/ai'
import { Link as ReactLink } from 'react-router-dom';
import c1 from '../../../assets/images/coupon/1.jpg'
import c2 from '../../../assets/images/coupon/2.jpg'
import c3 from '../../../assets/images/coupon/3.jpg'
import c4 from '../../../assets/images/coupon/4.jpg'
import c5 from '../../../assets/images/coupon/5.jpg'
import c6 from '../../../assets/images/coupon/6.jpg'
import c7 from '../../../assets/images/coupon/7.jpg'
import c8 from '../../../assets/images/coupon/8.jpg'

export default function Bannercoupon() {

    const infocss = {
        color: '#999999',
        fontSize: '13px',
        fontWeight: '400'
    }


    return (
        <Stack>
            <Container
                maxW={"5xl"}
                py={{ base: "6", md: "16" }}

            >
                <Stack borderBottom={'1px'} borderColor={'#fff'} pb={'5'} mb={'8'}>
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        gap={8}
                        alignItems={'center'}
                        mb={'5'}
                    >
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c1} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c2} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c3} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c4} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c5} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c6} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                    </Grid>
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        gap={8}
                        alignItems={'center'}
                    >
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c7} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c8} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c3} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c4} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c5} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 2, lg: 2 }}
                        >
                            <Box
                                bg={'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)'}
                                py={'2'}
                                px={'5'}
                                borderRadius={'6'}
                            >
                                <Image src={c6} alt='coupon' mb={'2'} />
                                <Heading as='h6' size='xs' color={'brand.200'}>
                                    11 Degrees
                                </Heading>
                            </Box>

                        </GridItem>
                    </Grid>
                </Stack>
                <Stack >
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        gap={8}
                        alignItems={'center'}
                    >
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 3, lg: 3 }}
                        >
                            <Stack textAlign={'center'}>

                                <TagLeftIcon boxSize='10' as={BiStore} color={'#f79e22'} m={'auto'} />
                                <Box >
                                    <Heading color={'brand.300'} as='h2' size='xl'>
                                        2,599+
                                    </Heading>
                                    <Heading color={'brand.200'} as='h4' size='sm'>Stores</Heading>
                                </Box>

                            </Stack>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 3, lg: 3 }}
                        >
                            <Stack textAlign={'center'}>

                                <TagLeftIcon boxSize='10' as={BiCheckShield} color={'#f79e22'} m={'auto'} />
                                <Box >
                                    <Heading color={'brand.300'} as='h2' size='xl'>
                                        28,026+
                                    </Heading>
                                    <Heading color={'brand.200'} as='h4' size='sm'>All Verified Codes</Heading>
                                </Box>

                            </Stack>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 3, lg: 3 }}
                        >
                            <Stack textAlign={'center'}>

                                <TagLeftIcon boxSize='10' as={HiOutlineUsers} color={'#f79e22'} m={'auto'} />
                                <Box >
                                    <Heading color={'brand.300'} as='h2' size='xl'>
                                        6.2k+
                                    </Heading>
                                    <Heading color={'brand.200'} as='h4' size='sm'>Daily Users
                                        Followers</Heading>
                                </Box>

                            </Stack>
                        </GridItem>
                        <GridItem
                            colSpan={{ base: 12, sm: 3, md: 3, lg: 3 }}
                        >
                            <Stack textAlign={'center'}>

                                <TagLeftIcon boxSize='10' as={AiOutlineTags} color={'#f79e22'} m={'auto'} />
                                <Box >
                                    <Heading color={'brand.300'} as='h2' size='xl'>

                                        28,026+
                                    </Heading>
                                    <Heading color={'brand.200'} as='h4' size='sm'>Offers</Heading>
                                </Box>

                            </Stack>
                        </GridItem>
                    </Grid>
                </Stack>


            </Container>
        </Stack>
    )
}
