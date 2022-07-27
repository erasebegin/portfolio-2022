import { BiLinkExternal } from 'react-icons/bi';
import {
  Text,
  Flex,
  Button,
  Image,
  Box,
  Heading,
  Stack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';

export default function PortfolioCard({ data, setModalContent, sectionColor }) {
  const { title, description, image, repoUrl, demoUrl, modal, tech, year } =
    data ?? {};

  const cardBg = useColorModeValue('white', 'gray.900');

  function handleClick() {
    setModalContent({ list: modal, image, tech });
  }

  return (
    <Box bg={cardBg} pos="relative">
      <Image
        component="img"
        h="180"
        w="full"
        src={image}
        alt="site screenshot"
        objectFit="cover"
        objectPosition="50%, 20%"
        onClick={handleClick}
        borderBottom="1px"
        borderColor={sectionColor}
      />
      {year && (
        <Text
          bg={sectionColor}
          color="white"
          fontWeight="500"
          pos="absolute"
          top="134"
          shadow="md"
          right="0"
          p={2}
          borderRadius="10px 0 0 0"
        >
          {year}
        </Text>
      )}

      {/* CARD BOTTOM */}
      <Stack p="5" gap={3}>
        <Heading as="h5" size="md">
          {title}
        </Heading>
        <Text
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
          overflowX="auto"
        >
          {demoUrl && (
            <a href={demoUrl} rel="noopener noreferrer" target="_blank">
              <Button color="primary" type="button">
                <Icon as={BiLinkExternal} mr={3} />
                View
              </Button>
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} rel="noopener noreferrer" target="_blank">
              <Button type="button">Repo</Button>
            </a>
          )}
          {modal && (
            <Button onClick={handleClick} type="button">
              Info
            </Button>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}
