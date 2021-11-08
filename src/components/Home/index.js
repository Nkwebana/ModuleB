import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

import { StyledHome, StyledTitle } from "./styledComponents";

function Home({ message, changeModuleAState, backgroundColor }) {
  const changeGlobalState = () => {
    changeModuleAState({
      name: "Buyisile",
      modulebBackgroundColor: "brown",
      secondaryColor: "green",
    });
  };

  return (
    <StyledHome backgroundColor={backgroundColor}>
      <StyledTitle>{message}</StyledTitle>

      <Button
        backgroundColor="red"
        color="yellow"
        title="Update"
        onPress={() => changeGlobalState()}
      />
    </StyledHome>
  );
}

Home.propTypes = {
  message: PropTypes.string,
  backgroundColor: PropTypes.string,
  changeModuleAState: PropTypes.func,
};

export default Home;
