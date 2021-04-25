import Geolocation from 'react-native-geolocation-service';

export async function getCurrentGPS (props) {

    Geolocation.getCurrentPosition(
        position => {
            props.onGPS(position.coords.latitude, position.coords.longitude);
        },
        error => {
            console.log(error.code, error.message);
        }
    );

}