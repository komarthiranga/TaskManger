import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import Date from '../UI/Date';
import { Entypo, Ionicons, MaterialCommunityIcons, Octicons, AntDesign } from '@expo/vector-icons'; 
import BottomSheet from 'react-native-bottomsheet';
import { API, graphqlOperation } from 'aws-amplify';
import { updateTask, deleteTask } from '../../graphql/mutations';
import { useState } from 'react';


const Item = ({task, today}) => {
    const [taskStatus, setTaskStatus] = useState(task?.status)    
    const showBottomSheet = () => {
        BottomSheet.showBottomSheetWithOptions({
          options: ['In Progress', 'Completed', 'Blocked', 'Delete'],
          cancelButtonIndex: 2,
          title: 'Select Options',
          dark: true,         
          destructiveButtonIndex: -1,
        }, (value) => {
          if (value === 0) {
            updateTaskStatus('INPROGRESS')
          } else if (value === 1) {
            updateTaskStatus('COMPLETED')
          }  else if (value === 2) {
            updateTaskStatus('BLOCKED') 
          } else if (value === 3) {
            deleteTaskFn()
          }
        });
      };

    const updateTaskStatus = async(status) => {
        try {
            const updateTaskInst = await API.graphql(graphqlOperation(updateTask, { input: {  id: task.id, _version: task._version, status: status }} ))
            setTaskStatus(status);
        } catch(error) {
            console.error(error);
        }
    }  


    const deleteTaskFn = async() => {
        try {
            const deleteTaskInst = await API.graphql(graphqlOperation(deleteTask, { input: {  id: task.id, _version: task._version}} ))
            console.log(deleteTaskInst);
        } catch(error) {
            console.error(error);
        }
    }  

    return (
        <TouchableOpacity style={styles.container} onPress={showBottomSheet}>
             {!today && <View style={styles.dateContainer}>
                <Date dateString={task?.createdAt} />
             </View> }
             <View style={styles.innerContainer}>
                  <Text style={styles.titleText}>{task?.title}</Text>
                  <Text style={styles.descriptionTitle}>{task?.description}</Text>
             </View>
             <View style={styles.actionsContainer}>
               {taskStatus === 'BLOCKED' &&  <Octicons name="blocked" size={24} color="red" /> }
               {taskStatus === 'COMPLETED' && <Ionicons name="checkmark-circle-sharp" size={24} color="green" /> }
               {taskStatus === 'INPROGRESS' && <MaterialCommunityIcons name="progress-clock" size={24} color="orange" /> }
               {taskStatus === 'NEW' && <AntDesign name="play" size={24} color="gray" /> }
             </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 15
    },
    actionsContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    titleText: {
        fontFamily: 'ChalkboardSE-Bold',
        fontSize: 18
    },
    descriptionTitle: {
        fontFamily: 'ChalkboardSE-Light',
        color: 'gray',
        fontSize: 14
    }
    
})

export default Item;