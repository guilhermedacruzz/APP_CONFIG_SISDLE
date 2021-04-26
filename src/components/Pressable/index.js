import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';

import {verifyLocationPermission} from '../../utils/permission';
import {getCurrentGPS} from '../../utils/gps';
import { blinkAlert } from '../../utils/alert';

import styles from './styles';
import colors from '../../styles/colors';

export default function(props) {

    useEffect(() => {
        async function check() {
            let permission = await verifyLocationPermission();
            
            if(permission){
                await getCurrentGPS(props);
            } else {
                blinkAlert("Erro", "Permissão de acesso ao GPS negada!", props.clearData());
            }
        };

        if(props.hasPressable == "Pressionado")
            check();
    }, [props.hasPressable]);

    return(
        <View>
            <Pressable
                {...props}
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? colors.secondary : colors.header,
                    },
                    styles.sectionButton
                ]}
            >
                <Text style={styles.sectionButtonText}>Enviar</Text>
            </Pressable>
        </View>
    );
}