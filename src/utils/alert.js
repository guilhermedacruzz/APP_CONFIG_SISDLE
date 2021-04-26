import { Alert } from 'react-native';

export function blinkAlert(title, info, callbeckClear) {
    Alert.alert(
        title,
        info,
        [
          {
            text: "Limpar",
            onPress: callbeckClear,
            style: "cancel"
          },
          { text: "Mander", onPress: () => console.log("OK Pressed") }
        ]
      );
}
