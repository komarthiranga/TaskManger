import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from './Item';
const List = ({today}) => {

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
              <FlatList  data={Data} keyExtractor={ (item) => item.id } renderItem={({item}) => <Item task={item} today={today} /> } />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {

    }
})

export default List;