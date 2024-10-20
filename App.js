import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, Easing, ScrollView, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Header from './src/Components/Header';
import Chart from './src/Components/Chart';
import Planets from './src/Components/Planets';
import Description from './src/Components/Description';
import { ball } from './src/SVG/files';

const { width, height } = Dimensions.get('window');

const App = () => {
  const position = useRef(new Animated.ValueXY({ x: width / 2, y: height / 2 })).current;
  const dynamicValues = [8, 6, "Mo", 5, 3, 2, 12, 11, "Me", 9, "Ke", "Ra", "Su Ju", "Ve Sa", 10, 1, 7, 4];
  const moveToRandomPosition = () => {
    const toX = Math.random() * width;
    const toY = Math.random() * height;
    const duration = Math.random() * 3000 + 2000;

    Animated.timing(position, {
      toValue: { x: toX, y: toY },
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => moveToRandomPosition());
  };

  useEffect(() => {
    moveToRandomPosition();
    return () => {
      position.stopAnimation();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: position.x }, { translateY: position.y }],
          position: 'absolute',
        }}
      >
        <SvgXml xml={ball} height={280} width={280} />
      </Animated.View>
      <ScrollView>
        <Header />
        <Chart dynamicValues={dynamicValues} />
        <Planets />
        <Description />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#192219' },
});

export default App;