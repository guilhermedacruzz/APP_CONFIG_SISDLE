import React from 'react';
import { Text, View } from "react-native";

import styles from './styles';

export default function(props) {
    return(
        <View>
            <Text style={styles.sectionTitle}>{props.ontext}</Text>
        </View>
    );
}