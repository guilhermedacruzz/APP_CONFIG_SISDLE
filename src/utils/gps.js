import Geolocation from 'react-native-geolocation-service';

import { blinkAlert } from './alert';

export async function getCurrentGPS (props) {

    Geolocation.getCurrentPosition(
        position => {
            props.callbackSuccessGPS(position.coords.latitude, position.coords.longitude);
        },
        error => {
            props.callbackErrorGPS();
            console.log(error);
            blinkAlert("Erro", "Não foi possível recuperar os dados do WiFi!", props.clearData());
        }
    );

}