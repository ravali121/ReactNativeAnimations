 import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
 import StyleGuide from 'src/helpers/StyleGuide';
 import assets from 'src/helpers/Assets';

const {width} = Dimensions.get('window');
 const CARD_ASPECT_RATIO = 1324 / 863;
 export const CARD_WIDTH = width - StyleGuide.spacing * 8;
 export const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO;

const Card = () => {
  return (
    <Image style={styles.imgStyle} source={assets.card1}/>
  )
};

const styles = StyleSheet.create({
  imgStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 18,
  }
});

export default Card;

