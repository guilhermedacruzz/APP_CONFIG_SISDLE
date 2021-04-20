import React from 'react';
import { Image,  } from 'react-native';

import styles from './styles';

export default function() {
    return(
        <Image
        style={styles.logo}
        resizeMode="center"
        source={require('../../assets/images/logo_size.jpg')}
        />
    );
}