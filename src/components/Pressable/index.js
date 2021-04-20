import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';

export default function(props) {

    return(
        <View>
            <Pressable
                {...props}
                style={({pressed}) => [
                    {
                      backgroundColor: pressed ? colors.primary : colors.secondary,
                    },
                    styles.sectionButton
                ]}
                
            >
                <Text style={styles.sectionButtonText}>Enviar</Text>
            </Pressable>
        </View>
    );
}