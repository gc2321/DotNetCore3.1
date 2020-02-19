import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComponent: React.FC<{ inverted?: boolean }> = ({
  inverted = true
}) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader />
    </Dimmer>
  );
};

export default LoadingComponent;
