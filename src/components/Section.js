import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { IoMdArrowDropright } from 'react-icons/io';
import {
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from './Card';
import ImageModal from './ImageModal';
import Divider from './Divider';
import TechIcon from './TechIcon';

export default function Section({ sectionData }) {
  const {
    cards,
    title,
    subtitle,
    color,
    dividerColor,
    dividerAlt,
    sectionInfo,
    columns,
  } = sectionData || {};

  const [modalContent, setModalContent] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const colors = useTheme().colors;
  const shade = useColorModeValue('100', '800');

  const convertDividerColor = () => {
    if (dividerColor === 'white') {
      if (shade === '800') return '#1A202C';

      return '#fff';
    }

    return colors[dividerColor][shade];
  };

  return (
    <Box
      pos="relative"
      w="full"
      px={10}
      bg={`${color}.${shade}`}
      marginTop="0 !important"
    >
      <Divider color={() => convertDividerColor()} alt={dividerAlt} />
      <Stack
        w="full"
        maxW="1200px"
        align="center"
        marginTop="0 !important"
        py={20}
        margin="auto"
        gap={3}
      >
        <ImageModal modalContent={modalContent} />
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <Text maxW="600">{subtitle}</Text>
        {sectionInfo && (
          <Stack align="center" pb={5}>
            <SectionInfoBody showInfo={showInfo}>
              <Heading as="h3" size="md" fontWeight="300" mb={3}>
                {sectionInfo?.duration}
              </Heading>
              <Text align="left" fontSize="md" mb={5}>
                {sectionInfo?.description}
              </Text>
              <TechIcons>
                {sectionInfo?.tech.map(type => {
                  return <TechIcon type={type} key={type} />;
                })}
              </TechIcons>
            </SectionInfoBody>
            <Button
              onClick={() => setShowInfo(!showInfo)}
              showInfo={showInfo}
              colorScheme={color}
            >
              More info
              <Icon
                as={IoMdArrowDropright}
                w="1.5rem"
                h="1.5rem"
                transform={showInfo ? 'rotate(-90deg)' : 'rotate(90deg)'}
                transition="400ms ease-in-out"
              />
            </Button>
          </Stack>
        )}
        <Grid
          gap={3}
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            `repeat(2, 1fr)`,
            `repeat(${columns || 3}, 1fr)`,
          ]}
          gridAutoRows="1fr"
        >
          {cards.map((cardData, index) => (
            <Card
              key={`main-section-card-${index}`}
              data={cardData}
              sectionColor={`${color}.${
                parseInt(shade) < 300
                  ? parseInt(shade) + 500
                  : parseInt(shade) - 400
              }`}
              setModalContent={setModalContent}
            />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

const SectionInfoBody = styled.div`
  text-align: center;
  max-height: ${props => (props.showInfo ? '1000px' : 0)};
  opacity: ${props => (props.showInfo ? 1 : 0)};
  padding-bottom: ${props => (props.showInfo ? '1rem' : 0)};
  overflow: hidden;
  transition: 400ms ease-in-out;

  p {
    max-width: 600px;
    padding-bottom: 1rem;
  }

  h4 {
    font-weight: bold;
  }
`;

const TechIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2rem;
  flex-wrap: wrap;
  background: #ffffff55;
  border-radius: 0.5rem;
`;
