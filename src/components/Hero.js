import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { HiMail, HiCode, HiX } from 'react-icons/hi';
import Divider from './Divider';
import Logos from './Logos';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Hero({ openContact, setOpenContact }) {
  const [showLogos, setShowLogos] = useState(false);

  const theme = useTheme();

  const transition = time => `${time || '400ms'} ease-in-out`;
  console.log(transition());
  return (
    <Box>
      <Divider color={theme.colors.blue[100]} />

      <Stack pt={[100, 100, 100]}>
        <Flex
          align="center"
          justify="center"
          pos="relative"
          direction={['column', 'column', 'row']}
        >
          <Button
            onClick={() => setShowLogos(!showLogos)}
            colorScheme="blue"
            pr={[3, 3, 50]}
            pt={[3, 3, 1]}
            pb={1}
            transform={[
              showLogos ? 'translateY(100%)' : 'translateY(35%)',
              showLogos ? 'translateY(100%)' : 'translateY(35%)',
              showLogos ? 'translateX(100%)' : 'translateX(2rem)',
            ]}
            zIndex="3"
            h={[120, 120, 10]}
          >
            <Flex
              gap={[1, 1, 3]}
              align="center"
              justify={['start', 'start', 'center']}
              h="100%"
              direction={['column', 'column', 'row']}
            >
              <HiCode size="2rem" />
              <Text
                maxW={showLogos ? 0 : 70}
                overflow="hidden"
                transition="200ms"
              >
                My skills
              </Text>
            </Flex>
          </Button>

          <Button
            onClick={() => setShowLogos(false)}
            pos="absolute"
            left="48%"
            top={['3rem', showLogos ? '-2rem' : '0.5rem']}
            h={20}
            colorScheme="cyan"
            transition="400ms ease-in-out"
          >
            <Stack justify="start" height="100%" pt={3}>
              <HiX />
            </Stack>
          </Button>

          <Box pos="relative" zIndex="4">
            <Logos showLogos={showLogos} />
            <Image
              src="./images/headshot3-small.jpg"
              alt="headshot, sketch style with flower-pattern background"
              borderRadius="full"
              boxSize={[
                showLogos ? '200px' : '300px',
                showLogos ? '200px' : '300px',
                showLogos ? '300px' : '400px',
              ]}
              transition="400ms ease-in-out"
              objectFit="cover"
            />
          </Box>

          <Button
            onClick={() => setOpenContact(!openContact)}
            colorScheme="blue"
            pl={showLogos ? '40px' : 50}
            pr={showLogos ? 1 : 5}
            zIndex="3"
            transform="translateX(-2rem)"
          >
            <Flex gap={3} align="center">
              <HiMail size="2rem" />
              <Text
                maxW={showLogos ? 0 : 70}
                overflow="hidden"
                transition="200ms"
              >
                Say hi
              </Text>
            </Flex>
          </Button>
        </Flex>

        <Heading
          as="h1"
          size="4xl"
          mb={3}
          pt={showLogos ? 150 : 0}
          transition="400ms ease-in-out"
        >
          Chris Haupt's
        </Heading>
        <Heading as="h2" size="2xl" mb={5}>
          Portfolio
        </Heading>
        <Heading as="h3" size="lg" maxW={700} fontWeight="400">
          A collection of some of my favourite projects created over the years
          using <b>React</b>.
        </Heading>
      </Stack>
    </Box>
  );
}
