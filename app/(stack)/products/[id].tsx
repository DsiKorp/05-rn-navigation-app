import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {
    const params = useLocalSearchParams();

    console.log({ params });

    return (
        <View>
            <Text>ProductScreen</Text>
        </View>
    );
};

export default ProductScreen;