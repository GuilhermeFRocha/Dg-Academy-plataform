import styled from "styled-components";
import { ArrowDown } from "phosphor-react";

export const Arrow = styled(ArrowDown)`
  transition: transform 0.2s ease;

  &.rotated {
    transform: rotate(-90deg);
  }
`;
