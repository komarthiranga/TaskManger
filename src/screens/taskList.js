import { SafeAreaView, StyleSheet, Text } from 'react-native';
import List from '../components/Task/List';
const TaskList = () => {

    return (
        <SafeAreaView style={styles.container}>
           <List />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 10
    }
})

export default TaskList;