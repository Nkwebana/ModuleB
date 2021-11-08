/**
 * ModuleB
 */

import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native";

import Home from "./src/components/Home";

function ModuleB({ message = "This is moduleB", changeModuleAState }) {
  return (
    <SafeAreaView>
      <Home message={message} changeModuleAState={changeModuleAState} />
    </SafeAreaView>
  );
}

ModuleB.propTypes = {
  message: PropTypes.string,
  changeModuleAState: PropTypes.func,
};

export default ModuleB;
