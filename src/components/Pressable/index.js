import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import styles from './styles';

export default function(props) {

    return(
        <View>
            <Pressable
                {...props}
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? '#D3D3D3' : '#F0F',
                    },
                    styles.sectionButton
                ]}
                
            >
                <Text style={styles.sectionButtonText}>Enviar</Text>
            </Pressable>
        </View>
    );
}