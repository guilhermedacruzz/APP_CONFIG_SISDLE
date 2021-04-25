import React from 'react';

import {PermissionsAndroid} from 'react-native';


export default async function verifyLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('permissão concedida');
        } else {
            console.error('permissão negada');
            return false;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }

    return true;
}