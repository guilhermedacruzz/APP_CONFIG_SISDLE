import React, {useState} from 'react';
import { View, ImageBackground, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';

import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Attention from './components/Attention';
 
export default function App() {

    return (
        <View>
            <Title ontext="Hello"/>
            <SubTitle ontext='Faça nada'/>
            <Attention ontext='Não feche'/>
        </View>
    );
}