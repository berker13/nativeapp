import { StyleSheet, Button, View, ScrollView, Text } from 'react-native';
import React from 'react';

export default function Homepage() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Welcome to the Homepage!</Text>
            <Button
                title="Login page"
                color="#6200EE"
                accessibilityLabel="Learn more about this purple button"
            />
            {/* <LongText/> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
        fontWeight: 'bold',
    },
});
