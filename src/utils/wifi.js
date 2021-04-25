import WifiManager from "react-native-wifi-reborn";

export async function connectWithWifi (ssid, password) {

    try {
        const data = await WifiManager.connectToProtectedSSID(
            ssid,
            password,
            false,
        );
        console.log('Connected successfully!', {data});
    } catch (error) {
        console.log('Connection failed!', {error});
        return false;
    }
    
    return true;
};