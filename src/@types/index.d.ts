declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  import Svg from 'react-native-svg';

  const content: Svg;
  export default content;
}
