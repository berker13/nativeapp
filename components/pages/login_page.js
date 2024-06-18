import { View, TextInput, Text, StyleSheet } from "react-native";
import React from 'react';

export default function LoginPage() {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Přihlašovací stránka</Text>
            <Text style={styles.subtitle}>Prosím, zadejte své údaje níže</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Zadejte své uživatelské jméno"
                placeholderTextColor="#999"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#333',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
});
