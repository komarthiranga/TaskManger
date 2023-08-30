import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import Date from '../UI/Date';
import { Entypo, Ionicons, MaterialCommunityIcons, Octicons, AntDesign } from '@expo/vector-icons'; 
import BottomSheet from 'react-native-bottomsheet';
const Item = ({task, today}) => {

    const showBottomSheet = () => {
        BottomSheet.showBottomSheetWithOptions({
          options: ['In Progress', 'Completed', 'Blocked'],
          cancelButtonIndex: 2,
          title: 'Select task status',
          dark: true,
          destructiveButtonIndex: -1,
        }, (value) => {
          if (value === 0) {
            console.log('Option 1 selected');
          } else if (value === 1) {
            console.log('Option 2 selected');
          }
        });
      };

    return (
        <TouchableOpacity style={styles.container} onPress={showBottomSheet}>
             {!today && <View style={styles.dateContainer}>
                <Date />
             </View> }
             <View style={styles.innerContainer}>
                  <Text style={styles.titleText}>{task?.title}</Text>
                  <Text style={styles.descriptionTitle}>{task?.description}</Text>
             </View>
             <View style={styles.actionsContainer}>
                {/* <Entypo name="dots-three-vertical" size={24} color="black" /> */}
                {/* <Octicons name="blocked" size={24} color="red" /> */}
                {/* <Ionicons name="checkmark-circle-sharp" size={24} color="green" /> */}
                {/* <MaterialCommunityIcons name="progress-clock" size={24} color="orange" /> */}
                <AntDesign name="play" size={24} color="gray" />
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