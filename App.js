import { StatusBar } from 'expo-status-bar';
import AppRouting from './src/routing';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <AppRouting />
    </>
  );
}

export default withAuthenticator(App);