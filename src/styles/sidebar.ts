import styled from "styled-components";
import { ArrowRight } from "phosphor-react";

export const Arrow = styled(ArrowRight)`
  transition: transform 0.2s ease;

  &.rotated {
    transform: rotate(90deg);
  }
`;
