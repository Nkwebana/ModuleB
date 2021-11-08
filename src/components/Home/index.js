import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

import { StyledHome, StyledTitle } from "./styledComponents";

function Home({ message, changeModuleAState }) {
  return (
    <StyledHome>
      <StyledTitle>{message}</StyledTitle>

      <Button
        backgroundColor="red"
        color="yellow"
        title="Update"
        onPress={() => changeModuleAState()}
      />
    </StyledHome>
  );
}

Home.propTypes = {
  message: PropTypes.string,
  changeModuleAState: PropTypes.func,
};

export default Home;
