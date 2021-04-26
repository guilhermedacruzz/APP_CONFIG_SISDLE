import React, {useState, useEffect} from 'react';
import { View } from 'react-native';

import { connectWithWifi } from '../../utils/wifi';
import { sendInfo } from '../../utils/httppost';
import { blinkAlert } from '../../utils/alert';
import { wait } from '../../utils/await';

import Spinner from 'react-native-loading-spinner-overlay';


const assid = "Teste12345";
const apassword = "12345678";

export default function(props) {

    const [hasLoading, setHasLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    useEffect(() => {
        async function check() {
            console.log(props.data);
            setLoadingText("Verificando os dados do WiFi...");
            setHasLoading(true);

            let status = await connectWithWifi(props.data["ssid"], props.data["password"]);
        
            if(!status) {
                blinkAlert("Erro", "Verificar se o nome ou a senha da rede estão corretos!", props.clearData());
            } else {
                setLoadingText("Conectando com a placa...");
                let status = await connectWithWifi(assid, apassword);

                if(!status) {
                    blinkAlert("Erro", "Não foi possível se conectar com a placa!", props.clearData());
                }
                else {
                    wait(2000);
                    setLoadingText("Enviando as configurações...");
                    status = await sendInfo('http://192.168.4.1/hello?', props.data);

                    if(!status) {
                        blinkAlert("Erro", "Não foi possível enviar as informações!", () => props.clearData());
                    }
                    else {
                        blinkAlert("Tudo Ok!", "Todas as informações foram cadastradas com sucesso!", () => props.clearData());
                    }
                }
            }

            setHasLoading(false);
            setTimeout(() => {
            }, 100);

            props.clearButton();
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