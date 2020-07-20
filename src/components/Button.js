import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from '../helpers/StyleGuide';
import Text from './Text';
import PropTypes  from 'prop-types';


const Button = ({ title, onPress, primary}) => {
  const color = primary ? "white" : undefined;
  return(
    <RectButton {...onPress}>
      <View style={styles.container}>
        <Text type="headline" style={{...styles.label, color}}>
          {title}
        </Text>
      </View>
    </RectButton>

  )
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  primary: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    padding: StyleGuide.spacing * 2,
  },
  label: {
    textAlign: "center",
    fontFamily: 'Lato-BoldItalic',
  },
});

export default Button;

