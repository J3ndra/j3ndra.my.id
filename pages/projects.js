import {
    Heading,
    Text,
    Stack,
    HStack,
    Box,
    Flex,
    Spacer,
    IconButton,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import {
    AiOutlineGithub,
    AiOutlineLink,
  } from 'react-icons/ai'
import { getProjects } from '../lib/api'
import Head from 'next/head'

export default function Projects({ projects } = props) {
    return (
        <Stack spacing={4}>
            <Head>
                <title>Projects</title>
            </Head>
            <HStack>
                <Heading as='h1' size='2xl' fontWeight='bold'>
                    Maintaned projects by me.
                </Heading>
            </HStack>

            <Stack spacing={4}>
                {projects.map((project) => (
                    <Box
                        borderRadius='md'
                        border='1px solid'
                        borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
                        p={4}
                        key={project.title}
                    >
                        <Flex pb={2}>
                            <Heading as='h3' fontSize='2xl'>
                                {project.title}
                            </Heading>
                            <Spacer />
                            {project.github && (
                                <IconButton
                                    as={Link}
                                    isExternal
                                    href={project.github}
                                    variant='outline'
                                    aria-label='github'
                                    icon={<AiOutlineGithub />}
                                />
                            )}
                            {project.demo && (
                                <IconButton
                                    ml={2}
                                    as={Link}
                                    isExternal
                                    href={project.demo}
                                    variant='outline'
                                    aria-label='demo'
                                    icon={<AiOutlineLink />}
                                />
                            )}
                        </Flex>
                        <Text>{project.description}</Text>
                    </Box>
                ))}
            </Stack>
        </Stack>
    )
}

export async function getStaticProps() {
    const projects = await getProjects();
    return {
        props: {
            projects,
        },
        revalidate: 60,
    };
}