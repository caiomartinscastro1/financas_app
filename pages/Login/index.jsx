import { View , Text , StyleSheet , Image , TextInput , TouchableOpacity , ScrollView } from 'react-native';

export default function Login({navigation}){
    return(
        <View style={style.container}>
            <View style={style.logoBox}>
                <Image
                    source={require('../../assets/logo.png')}
                    resizeMode='contain'
                    style={style.logo}
                />
            </View>
            <View style={style.form}>
                <Text style={style.title}>
                    Login
                </Text>
                <TextInput
                    placeholder='Digite seu email...'
                    keyboardType='email-address'
                    style={style.input}
                />
                <TextInput
                    placeholder='Digite sua senha...'
                    keyboardType='default'
                    secureTextEntry={true}
                    style={style.input}
                />
                <View style={style.links}>
                    <TouchableOpacity style={style.button}
                        onPress={() => {
                            navigation.navigate('Perfil')
                        }}
                    >
                        <Text style={style.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Home')
                        }}
                    >
                        <Text>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'teal',
        },
        form: {
            flex: 1,
            backgroundColor: 'white',
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
            padding: 40,
        },
        title: {
            fontSize: 25,
            marginBottom: 20,
            fontWeight: 'bold',
        },
        logoBox: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            height: '70%',
        },
        input: {
            width: '100%',
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginVertical: 10,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 20,
        },
        links: {
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        button: {
            paddingHorizontal: 40,
            paddingVertical: 13,
            backgroundColor: 'teal', 
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
        },
        buttonText: {
            fontSize: 15,
            color: 'white'
        },
        backButton: {
            paddingHorizontal: 40,
            paddingVertical: 13,
            justifyContent: 'center',
            alignItems: 'center',
        },
        backButtonText: {
            fontSize: 15,
        }
    }
);