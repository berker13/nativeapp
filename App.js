<<<<<<<<< Temporary merge branch 1
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';


export default function App() {
  return (
      <SafeAreaView>
        <ScrollView style = {styles.ScrollView}>
          <View style = {styles.container}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris metus. Cras elementum. Aliquam id dolor. Duis pulvinar. Praesent id justo in neque elementum ultrices. Suspendisse nisl. Nullam rhoncus aliquam metus. Nulla non arcu lacinia neque faucibus fringilla. Integer vulputate sem a nibh rutrum consequat. Donec vitae arcu. Vivamus porttitor turpis ac leo. Nullam eget nisl. Nam sed tellus id magna elementum tincidunt. Nullam at arcu a est sollicitudin euismod. Maecenas libero.

            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Praesent id justo in neque elementum ultrices. Nullam dapibus fermentum ipsum. Et harum quidem rerum facilis est et expedita distinctio. Phasellus et lorem id felis nonummy placerat. Mauris elementum mauris vitae tortor. Integer pellentesque quam vel velit. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Nullam rhoncus aliquam metus. In dapibus augue non sapien.

            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Praesent dapibus. Integer lacinia. Sed convallis magna eu sem. Nulla est. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Etiam neque. Duis risus. Donec quis nibh at felis congue commodo. Sed ac dolor sit amet purus malesuada congue. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. In rutrum. Vestibulum fermentum tortor id mi. Aenean placerat. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.

            Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Vivamus luctus egestas leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Etiam posuere lacus quis dolor. Duis condimentum augue id magna semper rutrum. Sed convallis magna eu sem. Integer in sapien. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Proin in tellus sit amet nibh dignissim sagittis. Pellentesque sapien.

            Aliquam erat volutpat. Integer malesuada. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Integer in sapien. Vestibulum fermentum tortor id mi. Aenean id metus id velit ullamcorper pulvinar. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Aenean fermentum risus id tortor. Aliquam erat volutpat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Aenean fermentum risus id tortor. In enim a arcu imperdiet malesuada. In convallis. Nunc tincidunt ante vitae massa.
          </Text>
          <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
=========
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import MyStack from './components/pages/router';

export default function App() {
  return (
      <MyStack/>
>>>>>>>>> Temporary merge branch 2
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
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
<<<<<<<<< Temporary merge branch 1
});
=========
});
>>>>>>>>> Temporary merge branch 2
