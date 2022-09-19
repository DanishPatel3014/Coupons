import { Box, Container, Flex, Grid, GridItem, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import b1 from '../../../assets/images/blog/b1.jpg'
import b2 from '../../../assets/images/blog/b2.jpg'
import b3 from '../../../assets/images/blog/b3.jpg'
import b4 from '../../../assets/images/blog/b4.jpg'
import b5 from '../../../assets/images/blog/b5.jpg'
import b6 from '../../../assets/images/blog/b6.jpg'

export default function Blog() {
    return (
        <>
            <Stack pt={'28'} w={'full'} >
                <Container maxW={'8xl'}>
                    <Stack mb={'10'}>
                        <Heading mb={'3'} color={'brand.400'} as='h2' size='xl'>
                            Stay Updated With <Text color={'brand.300'} display={'inline-block'} >Our Blogs</Text>
                        </Heading >
                    </Stack>
                    <Stack w={'100%'} direction={'row'} flexWrap={'wrap'} >
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            
                            alignItems={'baseline'}
                            mb={'5'}
                        >
                            <GridItem
                                colSpan={{ base: 12, sm: 4, md: 4, lg: 4 }}
                                mb={'5'}
                            >
                                <Box gap={'3'}  overflow={'hidden'} >
                                    <Img  src={b1} alt={'blog'}  />
                                    <Stack w={'full'} p={'5'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontWeight={'bold'} color={'brand.300'}>June 28, 2021</Text>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed.</Text>
                                    </Stack>
                                </Box>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 4, md: 4, lg: 4 }}
                                mb={'5'}
                            >
                                <Box gap={'3'}  >
                                    <Img  src={b2} alt={'blog'}  />
                                    <Stack w={'full'} p={'5'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontWeight={'bold'} color={'brand.300'}>June 28, 2021</Text>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed.</Text>
                                    </Stack>
                                </Box>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 4, md: 4, lg: 4 }}
                                mb={'5'}
                            >
                                <Box gap={'3'}  >
                                    <Img  src={b3} alt={'blog'}  />
                                    <Stack w={'full'} p={'5'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontWeight={'bold'} color={'brand.300'}>June 28, 2021</Text>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed.</Text>
                                    </Stack>
                                </Box>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 4, md: 4, lg: 4 }}
                                mb={'5'}
                            >
                                <Box gap={'3'}  overflow={'hidden'} >
                                    <Img  src={b4} alt={'blog'}  />
                                    <Stack w={'full'} p={'5'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontWeight={'bold'} color={'brand.300'}>June 28, 2021</Text>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed.</Text>
                                    </Stack>
                                </Box>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 4, md: 4, lg: 4 }}
                                mb={'5'}
                            >
                                <Box gap={'3'}  >
                                    <Img  src={b5} alt={'blog'}  />
                                    <Stack w={'full'} p={'5'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontWeight={'bold'} color={'brand.300'}>June 28, 2021</Text>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed.</Text>
                                    </Stack>
                                </Box>
                            </GridItem>
                            <GridItem
                                colSpan={{ base: 12, sm: 4, md: 4, lg: 4 }}
                                mb={'5'}
                            >
                                <Box gap={'3'}  >
                                    <Img  src={b6} alt={'blog'}  />
                                    <Stack w={'full'} p={'5'}>
                                        <Heading as='h2' fontSize={'20px'} color={'brand.400'}>
                                            16 Of The Best Furniture Stores to Buy Online in Australia for 2022
                                        </Heading>
                                        <Text fontWeight={'bold'} color={'brand.300'}>June 28, 2021</Text>
                                        <Text fontSize='md' color={'brand.500'}> Are you looking for the best furniture store in Australia to make your home a piece of heaven? Here, all of your concerns are addressed.</Text>
                                    </Stack>
                                </Box>
                            </GridItem>
                            
                        </Grid>



                    </Stack>
                </Container>
            </Stack>
        </>
    )
}
