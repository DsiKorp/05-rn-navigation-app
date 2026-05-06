import { products } from '@/store/products.store';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    console.log({ id });

    const product = products.find((p) => p.id === id);

    useEffect(() => {
        console.log({ product });
        navigation.setOptions({
            title: product ? product.title : 'Product Details'
        });
    }, [product]);

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