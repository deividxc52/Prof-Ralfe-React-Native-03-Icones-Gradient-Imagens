import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import estiloLogin from './estiloLogin';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    return (
        <View style={estiloLogin.container}>

            <ImageBackground source={require('../../../assets/imagens/mup.jpg')} style={estiloLogin.fundo}>

                <View style={estiloLogin.logoContainer}>
                <LinearGradient colors={['#4c669f','#192f6a','#081a31']} style={estiloLogin.logo}>
                <AntDesign name="team" size={40} color="white" />
                </LinearGradient>
                </View>

                <View style={estiloLogin.campoContainer}>  
                    <AntDesign name="user" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}/>
                </View>

                <View style={estiloLogin.campoContainer}>
                <AntDesign name="lock" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}/>
                </View>
                
                <TouchableOpacity onPress={entrar}>
                <LinearGradient colors={['#4c669f','#192f6a','#081a31']} style={estiloLogin.botaoLinearGradient}>
                    <MaterialCommunityIcons name="adchoices" size={24} color="white" />
                    <Text style={estiloLogin.botaoTexto}>
                        Entrar
                    </Text>
                </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
export default Login;