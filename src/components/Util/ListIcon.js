import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
const ListIcon = () => {
    const navigation = useNavigation();
    const navigateHandler = () => {
        navigation.navigate('TaskList')
    }
    return(
        <Entypo name="list" size={24} color="black" onPress={navigateHandler} />
    )
}

export default ListIcon;