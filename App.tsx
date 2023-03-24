import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screen/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor='transparent'
      />
      <Home />
    </>
  );
}

