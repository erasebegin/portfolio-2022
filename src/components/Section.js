import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Box, Button, Grid, Stack, useColorModeValue } from '@chakra-ui/react';
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
    buttonColor,
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
      px={10}
      bg={`${color}.${shade}`}
      marginTop="0 !important"
    >
      <Divider color={() => convertDividerColor()} alt={dividerAlt} />
      <Stack w="full" align="center" marginTop="0 !important" py={20}>
        <ImageModal modalContent={modalContent} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {sectionInfo && (
          <SectionInfo>
            <SectionInfoBody showInfo={showInfo}>
              <h4>{sectionInfo?.duration}</h4>
              <p>{sectionInfo?.description}</p>
              <TechIcons>
                {sectionInfo?.tech.map(type => {
                  return <TechIcon type={type} key={type} />;
                })}
              </TechIcons>
            </SectionInfoBody>
            <Button onClick={() => setShowInfo(!showInfo)} showInfo={showInfo} colorScheme={color}>
              More info <IoMdArrowDropright size="1.5rem" />
            </Button>
          </SectionInfo>
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
              buttonColor={colors[buttonColor]}
              setModalContent={setModalContent}
            />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

const Title = styled.h2`
  color: ${props => props.theme.colors.blackGreen};
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  font-size: 3rem;
  text-align: center;
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  margin: auto;
  padding-bottom: 2rem;
  max-width: 600px;
`;

const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
`;

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
