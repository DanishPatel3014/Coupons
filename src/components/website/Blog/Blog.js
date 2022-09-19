import { Box, Container, Flex, Grid, GridItem, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import b1 from '../../../assets/images/blog/b1.avif'

export default function Blog() {
    return (
        <>
            <Stack py={'28'} w={'full'} >
                <Container maxW={'8xl'}>
                    <Stack mb={'10'}>
                        <Heading mb={'3'} color={'brand.400'} as='h2' size='xl'>
                            Stay Updated With <Text color={'brand.300'} display={'inline-block'} >Our Blogs</Text>
                        </Heading >
                    </Stack>
                    <Stack w={'100%'} direction={'row'} flexWrap={'wrap'} >
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            gap={8}
                            alignItems={'center'}
                            mb={'5'}
                        >
                            <GridItem
                                colSpan={{ base: 12, sm: 6, md: 6, lg: 6 }}
                            >
                                <Flex gap={'3'}  rounded='md' bg='white' p={'5'} boxShadow='base'>
                                    <Img w={'300px'} src={b1} alt={'blog'} borderRadius={'6'} />
                                    <Stack w={'full'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed. By reading this guide,
                                            you can find the list of all the best online stores in Australia. So be ready to grab the best furniture and make your home a bit more classy!</Text>
                                    </Stack>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 6, md: 6, lg: 6 }}
                            >
                                <Flex gap={'3'}  rounded='md' bg='white' p={'5'} boxShadow='base'>
                                    <Img w={'300px'} src={b1} alt={'blog'} borderRadius={'6'} />
                                    <Stack w={'full'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed. By reading this guide,
                                            you can find the list of all the best online stores in Australia. So be ready to grab the best furniture and make your home a bit more classy!</Text>
                                    </Stack>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 6, md: 6, lg: 6 }}
                            >
                                <Flex gap={'3'} rounded='md' bg='white' p={'5'} boxShadow='base'>
                                    <Img w={'300px'} src={b1} alt={'blog'} borderRadius={'6'} />
                                    <Stack w={'full'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed. By reading this guide,
                                            you can find the list of all the best online stores in Australia. So be ready to grab the best furniture and make your home a bit more classy!</Text>
                                    </Stack>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 6, md: 6, lg: 6 }}
                            >
                                <Flex gap={'3'}  rounded='md' bg='white' p={'5'} boxShadow='base'>
                                    <Img w={'300px'} src={b1} alt={'blog'} borderRadius={'6'} />
                                    <Stack w={'full'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed. By reading this guide,
                                            you can find the list of all the best online stores in Australia. So be ready to grab the best furniture and make your home a bit more classy!</Text>
                                    </Stack>
                                </Flex>
                            </GridItem>
                        </Grid>



                    </Stack>
                </Container>
            </Stack>
        </>
    )
}
