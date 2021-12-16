import {
  Heading,
  Text,
  Stack,
  List,
  ListIcon,
  ListItem,
  HStack,
  Box,
  Flex,
  Spacer,
  IconButton,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import {
  AiOutlineCheckCircle,
  AiOutlineGithub,
  AiOutlineLink,
} from 'react-icons/ai'
import { getProjects } from '../lib/api'
import Head from 'next/head'

export default function Index({ projects } = props) {

  const technologies = [
    'Kotlin',
    'Python',
    'C',
    'Javascript',
    'LaTex',
  ]

  return (
    <Stack spacing={4}>
      <Head>
        <title>Home</title>
      </Head>
      <HStack>
        <Heading as='h1' size='2xl' fontWeight='bold'>
          Halo, Koh Endru here
        </Heading>
      </HStack>
      <Text pb={2}>
        Real name Junianto, nice to meet you 👋
      </Text>

      <Link passhref="true" href='/projects'>
        <a>See more my projects ➡️</a>
      </Link>
      <Stack spacing={4}>
        {projects.slice(0, 2).map((project) => (
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

      <Heading>Tools</Heading>
      <List spacing={2}>
        {technologies.map((technology) => (
          <ListItem key={technology}>
            <ListIcon as={AiOutlineCheckCircle} color='green.400' />
            {technology}
          </ListItem>
        ))}
      </List>
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