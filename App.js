import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './src/screens/taskList';
import AppRouting from './src/routing';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppRouting />
    </>
  );
}