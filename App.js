import { StyleSheet, Button, View, ScrollView } from 'react-native';
import MyTabs from './components/bottom_navigation_bar';

export default function App() {
  return (
      <View style ={styles.container}>
        <MyTabs/>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});