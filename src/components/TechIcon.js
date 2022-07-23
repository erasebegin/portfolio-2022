import { useState } from 'react';
import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';

export default function Icon({ type, labelColor }) {
  const typeSplit = type.split('-').join(' ');
  const [show, setShow] = useState(false);

  return (
    <IconContainer
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      show={show}
    >
      <img src={`./images/logos/${type}.svg`} alt={`${type} icon`} />
      <Text bg={labelColor}>{typeSplit}</Text>
    </IconContainer>
  );
}

const IconContainer = styled.div`
  position: relative;

  img {
    max-height: 50px;
    max-width: 85px;
    margin: auto;

    @media (max-width: 500px) {
      max-height: 40px;
      max-width: 75px;
    }
  }

  p {
    font-size: 0.75rem;
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    padding: 0.5rem;
    padding-bottom: 0.5rem !important;
    border-radius: 0.5rem;
    transition: opacity 200ms;
    white-space: nowrap;

    @media (max-width: 500px) {
      font-size: 1rem;
    }

    ${props =>
      !props.show &&
      `
      opacity: 0;
      pointer-events: none;
    `};
  }
`;
