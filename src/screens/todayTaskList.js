import { SafeAreaView, StyleSheet, Text } from 'react-native';
import List from '../components/Task/List';
const TodayTaskList = () => {

    return (
        <SafeAreaView style={styles.container}>
           <List today={true} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 10
    }
})

export default TodayTaskList;