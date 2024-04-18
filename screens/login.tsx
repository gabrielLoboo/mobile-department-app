import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "navigation";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, Text, Button, Alert } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login(){
    const navigation = useNavigation<OverviewScreenNavigationProps>();
    const [credentials, SetCredentials] = useState({email: ''})

    const handleLogin = async () => {
        try{
            const credentialStringfied = JSON.stringify(credentials)
            await AsyncStorage.setItem('credentials', credentialStringfied)
            Alert.alert('Sucesso','Credenciais Salvas!');
        } catch(error) {
            Alert.alert('Erro', 'Falha ao salvar os dados!')
        }
        navigation.navigate("Overview")
    }

    useEffect(()=> {

        const loadCredentials = async () =>{
            try{

                const desinstrigfiedCredentials = await AsyncStorage.getItem('credentials')
                if (desinstrigfiedCredentials){
                    const credentialsStored = JSON.parse(desinstrigfiedCredentials)
                    SetCredentials(credentialsStored)
                }
            } catch(error) {
                Alert.alert('Erro','Falha ao recuperar os dados')
            }
        }

        loadCredentials();
    }, [])

    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo!</Text>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                style={styles.input}    
                value={credentials.email}
                onChangeText={email => SetCredentials({...credentials, email})}
                placeholder="Digite o seu email"
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput 
                style={styles.input}
                placeholder="Digite sua senha"
                />
            </View>

            
            <Button
            onPress={handleLogin}
             
            title="Salvar"
            /> 
        
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    label: {
      marginBottom: 5
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 40,
        fontSize: 25
    },
    btn: {
        borderRadius: 50
    }
  });