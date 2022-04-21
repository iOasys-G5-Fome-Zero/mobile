import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../Routes';

// icons
import Logo from '../../../assets/icons/logo.svg';

// types
type NavProps = NativeStackNavigationProp<MainStackParams, 'Login'>;

const Splash: React.FC = () => {
  const { width, height } = Dimensions.get('window');
  const translateYMontainOne = useSharedValue(width * 3);
  const translateYMontainTwo = useSharedValue(width * 2);
  const scaleLogo = useSharedValue(0);
  const navigation = useNavigation<NavProps>();

  useEffect(() => {
    const TIME_ANIMATION = 750;
    const TIME_ANIMATION_LOGO = 500;

    translateYMontainOne.value = withTiming(width * 2, { duration: TIME_ANIMATION });
    translateYMontainTwo.value = withTiming(width, { duration: TIME_ANIMATION });

    setTimeout(() => {
      scaleLogo.value = withTiming(1, { duration: TIME_ANIMATION_LOGO });
    }, TIME_ANIMATION);

    setTimeout(() => {
      navigation.navigate('Login');
    }, TIME_ANIMATION_LOGO + TIME_ANIMATION);
  }, [navigation, scaleLogo, translateYMontainOne, translateYMontainTwo, width]);

  const animatedMontainOne = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYMontainOne.value }, { translateX: -width * 0.2 }]
    };
  });

  const animatedMontainTwo = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYMontainTwo.value }, { translateX: width * 0.2 }]
    };
  });

  const animatedLogo = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleLogo.value }]
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
      <Animated.View style={[animatedLogo]}>
        <Logo
          width={width * 0.5}
          height={height * 0.5}
          style={{
            top: height * 0.75,
            left: width * 0.25,
            zIndex: 1
          }}
        />
      </Animated.View>
      <Animated.View
        style={[
          {
            width: width * 0.8,
            height: width * 0.8,
            borderRadius: (width * 0.8) / 2,
            backgroundColor: '#00B761'
          },
          animatedMontainOne
        ]}
      />
      <Animated.View
        style={[
          {
            width: width * 1.6,
            height: width * 1.6,
            borderRadius: (width * 1.5) / 2,
            backgroundColor: '#00843F'
          },
          animatedMontainTwo
        ]}
      />
    </SafeAreaView>
  );
};

export default Splash;
