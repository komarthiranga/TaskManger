import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../UI/Button';
import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createTask } from '../../graphql/mutations';
import { useNavigation } from '@react-navigation/native';

const Create = () => {
    const navigation = useNavigation();
    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const handleTaskChange = (key, value) => setTask({...task, [key]: value})

    const handleSubmit = async() => {
        console.log(task);
        try {
            const taskInst = {
                title: task.title,
                status: 'NEW',
                description: task.description
            }
            const persistTask = await API.graphql(graphqlOperation(createTask, {input: taskInst}))
            navigation.navigate("TodayTaskList", {getListFlag: true});

        } catch(error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInput placeholder={"Title"} style={styles.inputText} onChangeText={ text  => handleTaskChange('title', text) }/>
                    <TextInput placeholder={"Description"} style={styles.inputText} numberOfLines={4} multiline={true} onChangeText={ text  => handleTaskChange('description', text) } />
                </View>
                <View>
                    <Button onPress={handleSubmit} >Create a task</Button>
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