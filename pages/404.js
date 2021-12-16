import { Heading, Stack, Text } from "@chakra-ui/react"
import Head from 'next/head'

const NotFound = () => {
    return (
        <Stack spacing={4}>
            <Head>
                <title>404 - Page not found</title>
            </Head>
            <Heading>
                404 Page not found!
            </Heading>
            <Text pb={2}>
                Page you are looking for is not exists.
            </Text>
        </Stack>
    )
}

export default NotFound