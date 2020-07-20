
import React from "react";
import { Text as RNText } from "react-native";
import StyleGuide from '../helpers/StyleGuide';
import PropTypes from 'prop-types';
import fonts from '../helpers/fonts';



const Text = ({ dark, type, style, children }) => {
  const color = dark ? "white" : "black";
  return (
    <RNText style={{...fonts().paragraph, color, ...style}}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Text;
