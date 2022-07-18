import { useState } from "react";
import styled from "@emotion/styled";

export default function Icon({ type }) {
  const typeSplit = type.split("-").join(" ");
  const [show, setShow] = useState(false);

  return (
    <IconContainer
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      show={show}
    >
      <img src={`./images/logos/${type}.svg`} alt={`${type} icon`} />
      <p>{typeSplit}</p>
    </IconContainer>
  );
}

const IconContainer = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  img {
    max-height: 50px;
    max-width: 50px;
  }

  p {
    font-size: 0.75rem;
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 0.5rem;
    padding-bottom: 0.5rem !important;
    border-radius: 0.5rem;
    transition: opacity 200ms;
    white-space: nowrap;

    ${props => !props.show && `
      opacity: 0;
      pointer-events: none;
    `};
  }
`;
