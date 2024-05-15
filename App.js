import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>fortnite mobile</Text>
      <StatusBar style="auto" />
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
