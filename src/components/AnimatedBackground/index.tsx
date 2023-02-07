import React from "react";

import { Container } from "./styles";

const AnimatedBackground: React.FC = () => {
  return (
    <Container>
      <div className="area">
        <ul className="circles">
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
        </ul>
      </div>
    </Container>
  );
};

export default AnimatedBackground;
