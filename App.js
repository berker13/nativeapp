import React, { useState } from 'react';
import { StyleSheet, Button, View, Image, Text, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MyTabs from './components/bottom_navigation_bar';

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [description, setDescription] = useState('');

    const pickImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setSelectedImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <MyTabs />
            <Text style={styles.title}>Vítejte v aplikaci pro výběr obrázků!</Text>
            <Button title="Vyberte obrázek z galerie" onPress={pickImage} color="#6200EE" />
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
            {selectedImage && (
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Zadejte popis obrázku"
                    placeholderTextColor="#999"
                />
            )}
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
        marginBottom: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#6200EE',
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
