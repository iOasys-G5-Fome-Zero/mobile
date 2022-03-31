import Snackbar from 'react-native-snackbar';

export default function handleMessage(message: string) {
  Snackbar.show({
    text: message
  });
}
