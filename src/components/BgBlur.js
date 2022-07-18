import { useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

export default function BgBlur({ show }) {
  const bg = useColorModeValue('#ffffff55', '#00000033');
  return <StyledBgBlur $show={show} $bg={bg} />;
}

const StyledBgBlur = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  inset: -2rem 0 0 0;
  opacity: 0;
  background: ${props => props.$bg};
  backdrop-filter: blur(2px);
  z-index: 10;
  pointer-events: none;
  transition: opacity 200ms ease-in;

  ${props =>
    props.$show &&
    `
      opacity: 1;
      pointer-events: initial;
      transition: opacity 200ms ease-in;
  `};
`;
