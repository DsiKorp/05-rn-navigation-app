import { products } from '@/store/products.store';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {
    const { id } = useLocalSearchParams();

    console.log({ id });

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <View className='px-5 mt-10'>
                <Text>Producto no encontrado</Text>
            </View>
        );
    }

    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl font-bold'>{product.title}</Text>
            <Text className='font-work-light mt-2'>{product.description}</Text>
            <Text className='font-work-black text-2xl mt-4'>${product.price.toFixed(2)}</Text>
        </View>
    );
};

export default ProductScreen;