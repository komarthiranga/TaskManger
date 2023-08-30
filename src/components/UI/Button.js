import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Button = ({children}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.innerContainer}>
                 <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    },
    innerContainer: {
        margin: 20,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C2C2C2',
        backgroundColor: '#B200FF',
        borderRadius: 25,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 25,
        elevation: 2
    },
    text: {
        fontFamily: 'ChalkboardSE-Bold',
        fontSize: 16,
        color: 'white'
    }
})

export default Button;