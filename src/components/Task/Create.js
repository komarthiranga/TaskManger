import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../UI/Button';
const Create = () => {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInput placeholder={"Title"} style={styles.inputText} />
                    <TextInput placeholder={"Description"} style={styles.inputText} numberOfLines={4} multiline={true} />
                </View>
                <View>
                    <Button>Create a task</Button>
                </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
        padding: 10,
        margin: 10
    },

    inputText: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        padding: 10,
        margin: 10
    }
});

export default Create;