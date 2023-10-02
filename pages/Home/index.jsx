import { View , Text , StyleSheet , Image , StatusBar , TouchableOpacity } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={style.container}>
            <View style={style.logoContainer}>
                <Image
                    source={require('../../assets/logo.png')}
                    resizeMode='contain'
                    style={style.logo}
                />
            </View>
            <View style={style.box}>
                <Text style={style.title}>
                    Suas finanças em um só lugar
                </Text>
                <Text style={style.subTitle}>
                    Crie sua conta para continuar
                </Text>
                <TouchableOpacity style={style.button}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={style.buttonText}>
                        Fazer login na sua conta
                    </Text>
                </TouchableOpacity>
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
        logo: {
            width: '50%',
            height: '50%'
        },
        logoContainer: {
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center'
        },
        box: {
            flex: 2,
            backgroundColor: 'white',
            padding: 30,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        subTitle: {
            color: 'gray',
            marginVertical: 40,
        },
        button: {
            backgroundColor: 'teal',
            width: '70%',
            paddingVertical: 12,
            paddingHorizontal: 12,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            color: 'white',
            fontSize: 15,
        }
    }
);