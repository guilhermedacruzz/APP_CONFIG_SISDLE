import React from 'react'
import {View, Text, TextInput} from 'react-native'

import Styles from './styles';

import colors from '../../styles/colors';

export default function(props) {

    return (
        <View>
            <Text style={Styles.sectionInstructions}>{props.title}</Text>
            <TextInput
                {...props}
                editable
                placeholder={props.placeholder}
                placeholderTextColor = {colors.secondary}
                selectionColor={colors.primary}
                underlineColorAndroid={colors.primary}
                style={Styles.sectionTextField}
            />
        </View>
      );
}
