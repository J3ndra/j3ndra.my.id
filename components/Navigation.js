import {
    Button,
    Flex,
    Box,
    useColorModeValue,
    HStack,
    Text,
    Link,
} from '@chakra-ui/react'
import DarkModeSwitch from '/components/DarkModeSwitch'
import { useRouter } from 'next/router'

const Navigation = () => {
    const router = useRouter()
    return (
        <Flex
            py={5}
            as='nav'
            direction='row'
            w='100%'
            zIndex='10'
            pos='sticky'
            top='0'
            backdropFilter='auto'
            backdropBlur='12px'
            px={{ base: '4', md: '12' }}
            justifyContent='space-between'
            bg={useColorModeValue('bgLightOpacity', 'bgDarkOpacity')}
        >
            <HStack>
                <Link passhref="true" href='/'>
                    <Button aria-label='Homepage'>Koh</Button>
                </Link>
                <Text>{router.pathname}</Text>
            </HStack>
            <Box>
                <DarkModeSwitch />
            </Box>
        </Flex>
    )
}

export default Navigation;