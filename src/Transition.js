import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './components/Card';
import Button from './components/Button';

import {Value} from 'react-native-reanimated';



const Transition = () => {

  const [show, setShow] = useState(true);

  // Initial animation value
  const opacityStartAnimation = new Value(0);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{opacity: show? 1: 0}}>
          <Card/>
        </View>
      </View>
      <Button title={'Press this'}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Transition;
