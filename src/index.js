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

    const [title, setTitle] = useState('Lixeira do IFPR');
    const [description, setDescription] = useState('Implementada pelo IFPR');
    const [distanceBottom, setDistanceBottom] = useState('27');
    const [distanceCover, setDistanceCover] = useState('5');
    const [ssid, setSsid] = useState('2.4g Adalberto');
    const [password, setPassword] = useState('qi2001to500');
    const [userPosition, setUserPosition] = useState(false);
    const [hasPressable, setHasPressable] = useState('Ocioso');

    return (
        <View style={styles.container} >

            <Logo/>

            <BarColor/>

            <ScrollView style={styles.mind}>
                <Text style={styles.sectionTitle}>Bem Vindo ao APP de configuração ;)</Text>
                <Text style={[styles.sectionAttention, styles.sectionInstructions]}>Aqui você configurara a lixeira!</Text>
                <Text style={styles.sectionAttention}>Cuidado ao Digitar as Informações</Text>

                <TextField
                    title={"Digite um título para a lixeira:"}
                    placeholder={"Título"}
                    value={title}
                    onChangeText={text => setTitle(text)}
                />

                <TextField
                    title={"Digite uma Descrição para a lixeira:"}
                    placeholder={"Descrição"}
                    value={description}
                    onChangeText={text => setDescription(text)}
                    multiline = {true}
                    numberOfLines = {4}
                />

                
                <TextField
                    title={"Digite a distância do sensor da Lixeira até o fundo:"}
                    placeholder={"Distância até o fundo"}
                    value={distanceBottom}
                    onChangeText={text => setDistanceBottom(text)}
                    keyboardType='numeric'
                />

                
                <TextField
                    title={"Digite a distância do sensor da Lixeira até o topo:"}
                    placeholder={"Distância até o topo"}
                    value={distanceCover}
                    onChangeText={text => setDistanceCover(text)}
                    keyboardType='numeric'
                />

                
                <TextField
                    title={"Digite o nome da rede WiFi em que a lixeira irá se conectar:"}
                    placeholder={"SSID"}
                    value={ssid}
                    onChangeText={text => setSsid(text)}
                />

                
                <TextField
                    title={"Digite a senha da rede WiFi em que a lixeira irá se conectar:"}
                    placeholder={"Título"}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                <Pressable onPress={() => {
                    console.log(title);
                    console.log(description);
                    console.log(distanceBottom);
                    console.log(distanceCover);
                    console.log(ssid);
                    console.log(password);
                }}/>

                <Text style={[styles.sectionAttention, styles.sectionInstructions]}>Latitude: -23.665425</Text>
                <Text style={[styles.sectionAttention, styles.sectionInstructions]}>Longitude: -48.213525</Text>

            </ScrollView>

        </View>
    );
}