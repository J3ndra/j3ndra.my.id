import { Divider, 
    Stack, 
    Text, 
    Spacer,
    HStack,
    Link } from '@chakra-ui/react'
import { SiVercel } from 'react-icons/si'
import Social from '/components/Social'

function Footer() {
    return (
        <Stack as='footer' spacing={8} w='100%' py={8} px={{ base: '4', md: '16' }}>
            <Divider />
            <Stack direction={{ base: 'column', md: 'row' }}>
                <Social />
                <Spacer />
                <HStack>
                    <Text fontSize='sm'>&copy; Koh Endru</Text>
                    <Text fontSize='sm'>|</Text>
                    <Text fontSize='sm'>Powered by</Text>
                    <SiVercel/>
                    <Text fontSize='sm' as={Link} href='https://vercel.com/'>Vercel</Text>
                </HStack>
            </Stack>
        </Stack>
    );
}

export default Footer