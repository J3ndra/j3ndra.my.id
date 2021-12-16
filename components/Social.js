import {
    AiOutlineTwitter,
    AiOutlineGithub,
} from 'react-icons/ai'
import { IconButton, Link, HStack } from '@chakra-ui/react'

export default function Social() {
    return (
        <HStack spacing={4}>
            <IconButton
                as={Link}
                rounded='md'
                isExternal
                aria-label='github'
                href='https://github.com/J3ndra'
                icon={<AiOutlineGithub />}
            />

            <IconButton
                as={Link}
                rounded='md'
                isExternal
                aria-label='twitter'
                href='https://twitter.com/Koh_Endru'
                icon={<AiOutlineTwitter />}
            />
        </HStack>
    )
}