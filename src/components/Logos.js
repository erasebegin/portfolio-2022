import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useMediaQuery } from '@chakra-ui/react';

export default function Logos({ showLogos }) {
  const [isMobile] = useMediaQuery('(max-width: 48em)');

  const logoArr = [
    'firebase',
    'react',
    'graphql',
    'chakra',
    'next-js',
    'jira',
    'sass',
    'github',
    'vue',
    'nuxt',
  ];

  return (
    <CircleArrangement $show={showLogos} $isMobile={isMobile}>
      {logoArr.map((logo, idx) => {
        return (
          <li key={`tech-logo-${idx}`}>
            <img src={`/images/logos/${logo}.svg`} alt={`${logo} logo`} />
            <p>{logo}</p>
          </li>
        );
      })}
    </CircleArrangement>
  );
}

function generateCircleLayout(itemCount, circleSize, itemSize, options) {
  let rotation = options?.half ? 133 : 0;
  let angle = 0;
  let divideBy = options?.toggle ? 1.2 : 2;
  let transformationString;
  if (options?.half) {
    angle = 180 / itemCount;
  } else {
    angle = 360 / itemCount;
  }

  for (let i = 0; i < itemCount + 1; i++) {
    rotation += angle;
    transformationString += `
      &:nth-of-type(${i}) {
        transform: rotate(${rotation}deg) translate(${
      parseInt(circleSize) / divideBy
    }px)
          rotate(${rotation * -1}deg);
          transition: 200ms;
      }
    `;
  }

  return css`
    width: ${circleSize};
    height: ${circleSize};

    > * {
      display: block;
      position: absolute;
      top: 33%;
      left: 33%;
      width: ${itemSize};
      height: ${itemSize};
      margin: ${parseInt(itemSize) / 2}px;

      ${transformationString}
    }

    p {
      font-size: 1rem;
      white-space: nowrap;
    }
  `;
}

const CircleArrangement = styled.ul`
  ${props => {
        if(props.$isMobile) {
          return generateCircleLayout(10, '190px', '35px', { toggle: props.$show })
        } 

        return generateCircleLayout(10, '300px', '50px', { toggle: props.$show })
      }
    }

  list-style: none;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
