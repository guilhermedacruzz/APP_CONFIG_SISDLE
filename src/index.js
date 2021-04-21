import React, {useState} from 'react';
import { View, ImageBackground, ScrollView, StyleSheet} from 'react-native';

import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Attention from './components/Attention';
import TextField from './components/TextField';
import Pressable from './components/Pressable';
import Logo from './components/Logo';
import BarColor from './components/BarColor';

import { general } from './styles';

const styles = StyleSheet.create({
    ...general,
});

export default function App() {

    return (
        <ImageBackground
            style={styles.container}
            source={require('./assets/images/back.jpg')}
            resizeMode='cover'
        >

            <Logo/>

            <BarColor/>

            <ScrollView style={styles.mind}>
                <Title ontext="Hello"/>
                <SubTitle ontext='Faça nada'/>
                <Attention ontext='Não feche'/>

                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />

                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />

                
                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />

                
                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />

                
                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />

                
                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />


                
                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />

                
                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                />

                <Pressable/>
                
            </ScrollView>

        </ImageBackground>
    );
}