import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';

export default function(props) {

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