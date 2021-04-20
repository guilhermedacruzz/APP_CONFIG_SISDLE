import React from 'react';
import { StatusBar } from 'react-native';

import colors from '../../styles/colors'

export default function() {
    return(
        <StatusBar barStyle="light-content" backgroundColor={colors.header} />
    );
}