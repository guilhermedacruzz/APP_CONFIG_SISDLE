import React, {useState} from 'react';
import { View, ImageBackground, ScrollView} from 'react-native';

import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Attention from './components/Attention';
import TextField from './components/TextField';
import Pressable from './components/Pressable';
import Logo from './components/Logo';
import BarColor from './components/BarColor';

export default function App() {

    return (
        <View>

            <Logo/>

            <BarColor/>

            <Title ontext="Hello"/>
            <SubTitle ontext='Faça nada'/>
            <Attention ontext='Não feche'/>

            <TextField
                title={"Digite um título para a lixeira:"}
                placeholder={"Título"}
            />

            <Pressable/>
        </View>
    );
}