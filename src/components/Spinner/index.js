import React, {useEffect} from 'react';
import { View } from 'react-native';

export default function(props) {

    useEffect(() => {
        async function check() {
            var dict = props.getData();
            console.log(dict);
            props.clearButton();
        };

        if(props.hasPressable == 'Desativado')
            check();
    }, [props.hasPressable])

    return(
        <View>

        </View>
    );
}