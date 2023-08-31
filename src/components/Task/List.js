import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from './Item';
import { API, graphqlOperation } from 'aws-amplify';
import { listTasks } from '../../graphql/queries';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

const List = ({today}) => {
    const route = useRoute();
    const getListFlag = route.params?.getListFlag;
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState(null)

    useEffect( () => {
        console.log(' I am her.......');
        fetchTasks();
    }, []);

    useEffect( () => {
        console.log(' I am her.......');
        fetchTasks();
    }, [getListFlag]);

    const fetchTasks = async() => {
        const taskList = await API.graphql(graphqlOperation(listTasks));
        setTasks(taskList.data?.listTasks?.items)
        setLoading(false);
    }

    const Data = [
        {
        id: 1,    
        title: 'My First Task',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        status: 'In Progress',
        createdAt: '30th Aug 2023'
      },
      {
        id: 2,    
        title: 'My First Task',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        status: 'In Progress',
        createdAt: '30th Aug 2023'
    },
    {
        id: 3,    
        title: 'My First Task',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        status: 'In Progress',
        createdAt: '30th Aug 2023'
    },
    {
        id: 4,    
        title: 'My First Task',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        status: 'In Progress',
        createdAt: '30th Aug 2023'
    },
    {
        id: 5,    
        title: 'My First Task',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        status: 'In Progress',
        createdAt: '30th Aug 2023'
    }
]

    return (
        <View style={styles.container}>
              {loading && <View><Text>Loading Please wait !!!</Text></View>}
              {!loading && <FlatList  data={tasks} keyExtractor={ (item) => item.id } renderItem={({item}) => <Item task={item} today={today} /> } /> }
        </View>
    )

}

const styles = StyleSheet.create({
    container: {

    }
})

export default List;