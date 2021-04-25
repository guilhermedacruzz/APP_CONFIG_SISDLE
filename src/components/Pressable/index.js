import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';

import {verifyLocationPermission} from '../../utils/permission';

import styles from './styles';
import colors from '../../styles/colors';

export default function(props) {

    useEffect(() => {
        async function check() {
            let a = verifyLocationPermission();
            if(a) {
                console.log("Sim");
            }
            else {
                console.log("nao");
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