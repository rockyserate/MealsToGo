import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const Spacer = ({ horizontal, size }) => {
  const defaultVal = "auto";

  return (
    <View
      style={{
        width: horizontal ? size : defaultVal,
        height: !horizontal ? size : defaultVal,
      }}
    />
  );
};

Spacer.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  horizontal: PropTypes.bool,
};

Spacer.defaultProps = {
  horizontal: false,
};

export default Spacer;
