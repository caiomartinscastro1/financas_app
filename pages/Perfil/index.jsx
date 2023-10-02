import { Text , View , TouchableOpacity , StyleSheet } from "react-native";

export default function Perfil({navigation}){
    return(
        <View style={style.container}>
            <Text>
                Olá, este é seu perfil
            </Text>
            <TouchableOpacity
                style={style.button}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <Text>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        button: {
            paddingVertical: 10,
            paddingHorizontal: 60,
            backgroundColor: 'cyan',
        }
    }
);