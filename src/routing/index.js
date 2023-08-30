import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskList from '../screens/taskList';
import TodayTaskList from '../screens/todayTaskList';
import CreateIcon from '../components/Util/CreateIcon';
import CreateTask from '../screens/CreateTask';
import ListIcon from '../components/Util/ListIcon';

const Stack = createNativeStackNavigator();

const AppRouting = () => {
    return(
        <NavigationContainer>
             <Stack.Navigator>
                  <Stack.Screen name="TodayTaskList" component={TodayTaskList} options={{headerTitle: 'Today Tasks', headerRight: () => <CreateIcon />, 
                  headerLeft: () => <ListIcon />, headerTitleStyle: { color: 'black',fontFamily: 'ChalkboardSE-Bold' , headerBackTitleStyle: { color: 'black',fontFamily: 'ChalkboardSE-Bold' }}  }} />
                  <Stack.Screen name="TaskList" component={TaskList} options={{headerTitle: 'Tasks', headerTitleStyle: { color: 'black',fontFamily: 'ChalkboardSE-Bold' }, headerBackTitleStyle: { color: 'black',fontFamily: 'ChalkboardSE-Bold' } }}/>
                  <Stack.Screen name="CreateTask"  component={CreateTask} options={{headerTitle: 'Create Task', headerTitleStyle: { color: 'black',fontFamily: 'ChalkboardSE-Bold' }, headerBackTitleStyle: { color: 'black',fontFamily: 'ChalkboardSE-Bold' } }} />
             </Stack.Navigator>
        </NavigationContainer>
    )
} 

export default AppRouting;
