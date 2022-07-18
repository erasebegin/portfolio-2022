import React from 'react';
import {
  Text,
  Flex,
  Button,
  Image,
  Box,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function PortfolioCard({ data, setModalContent, buttonColor }) {
  const { title, description, image, repoUrl, demoUrl, modal } = data || {};
  const cardBg = useColorModeValue('white', 'gray.900');

  return (
    <Box bg={cardBg} h="full" pos="relative">
      <a href={demoUrl} rel="noopener noreferrer" target="_blank">
        <Image
          component="img"
          h="180"
          w="full"
          src={image}
          alt="site screenshot"
          objectFit="cover"
          objectPosition="50%, 20%"
        />
      </a>

      {/* CARD BOTTOM */}
      <Stack p="5" gap={3} h="full">
        <Heading as="h5" size="md">
          {title}
        </Heading>
        <Text
          align="left"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          pb={16}
        />
        <Flex
          justify="center"
          w="full"
          gap={3}
          pos="absolute"
          bottom="1rem"
          left="50%"
          transform="translateX(-50%)"
        >
          <a href={demoUrl} rel="noopener noreferrer" target="_blank">
            <Button color="primary">Demo</Button>
          </a>
          {repoUrl && (
            <a href={repoUrl} rel="noopener noreferrer" target="_blank">
              <Button $buttonColor={buttonColor}>Repo</Button>
            </a>
          )}
          {modal && (
            <Button
              $buttonColor={buttonColor}
              onClick={() => setModalContent({ list: modal, image })}
            >
              Info
            </Button>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}
