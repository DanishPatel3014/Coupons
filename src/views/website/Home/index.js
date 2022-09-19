import { Stack } from '@chakra-ui/react'
import React from 'react'
import HomeBanner from '../../../components/website/Banner/HomeBanner'
import Blog from '../../../components/website/Blog/Blog'


export default function index() {
    return (

        <Stack>
            <HomeBanner />
            <Blog />
        </Stack>

    )
}
