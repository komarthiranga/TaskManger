import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
const CreateIcon = () => {
    const navigation = useNavigation();
    const navigateHandler = () => {
        navigation.navigate('CreateTask')
    }
    return(
        <Ionicons name="ios-create-sharp" size={24} color="black" onPress={navigateHandler} />
    )
}

export default CreateIcon;