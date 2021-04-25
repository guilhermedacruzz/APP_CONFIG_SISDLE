import React, {useState, useEffect} from 'react';
import { View, Alert } from 'react-native';

import { connectWithWifi } from '../../utils/wifi';
import { sendInfo } from '../../utils/httppost';

import Spinner from 'react-native-loading-spinner-overlay';

export default function(props) {

    const [hasLoading, setHasLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    useEffect(() => {
        async function check() {
            console.log(props.data);
            setLoadingText("Verificando os dados do WiFi...");
            setHasLoading(true);

            let a = await connectWithWifi(props.data["ssid"], props.data["password"]);
            console.log(a);

            setLoadingText("Enviando as configurações...");
            let b = await sendInfo("http://jsonplaceholder.typicode.com/posts", props.data);
            console.log(b);
            
            setHasLoading(false);
            setTimeout(() => {
            }, 100);

            props.clearButton();
            props.clearData();
        };

        if(props.hasPressable == 'Desativado')
            check();
    }, [props.hasPressable])

    return(
        <View>
            <Spinner
                visible={hasLoading}
                textContent={loadingText}
                size="large"
                animation="slide"
                textStyle={{color:"#fff"}}
            />
        </View>
    );
}