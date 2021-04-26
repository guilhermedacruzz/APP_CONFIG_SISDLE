import WifiManager from "react-native-wifi-reborn";
import { wait } from './await';

export async function connectWithWifi (ssid, password) {

    await wait(1000);
    await WifiManager.disconnect();
    await wait(1000);

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