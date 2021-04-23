import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';

import TextField from './components/TextField';
import Pressable from './components/Pressable';
import Logo from './components/Logo';
import BarColor from './components/BarColor';

import { general } from './styles';

import { teste } from './utils';

const styles = StyleSheet.create({
    ...general,
});

export default function App() {

    return (
        <View
            style={styles.container}
        >

            <Logo/>

            <BarColor/>

            <ScrollView style={styles.mind}>
                <Text style={styles.sectionTitle}>Bem Vindo ao APP de configuração ;)</Text>
                <Text style={[styles.sectionAttention, styles.sectionInstructions]}>Aqui você configurara a lixeira!</Text>
                <Text style={styles.sectionAttention}>Cuidado ao Digitar as Informações</Text>

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

                <Pressable onPress={() => {teste()}}/>

                <Text style={[styles.sectionAttention, styles.sectionInstructions]}>Latitude: -23.665425</Text>
                <Text style={[styles.sectionAttention, styles.sectionInstructions]}>Longitude: -48.213525</Text>

            </ScrollView>

        </View>
    );
}