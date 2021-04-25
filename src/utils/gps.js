import Geolocation from 'react-native-geolocation-service';

export default async function gps () {
    Geolocation.getCurrentPosition(
        position => {
            props.onGPS(position.coords.latitude, position.coords.longitude);
        },
        error => {
            console.log(error.code, error.message);
            numberError = 3;
        }
    );
}