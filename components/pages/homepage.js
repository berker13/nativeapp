import { StyleSheet, Button, View, ScrollView } from 'react-native';

export default function Homepage(){
    return(
        <View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>

                    <Button
                        title="Login page"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    {/* <LongText/> */}
                </View>
            </ScrollView>
        </View>
    );
}