import { Stack } from '@chakra-ui/react'
import React from 'react'
import HomeBanner from '../../../components/website/Banner/HomeBanner'
import Blog from '../../../components/website/Blog/Blog'
import Stores from '../../../components/website/Stores/Stores'


export default function index() {
    return (

        <Stack>
            <HomeBanner />
            <Blog />
            <Stores/>
        </Stack>

    )
}
