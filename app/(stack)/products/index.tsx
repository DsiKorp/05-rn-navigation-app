
import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const ProductsScren = () => {
    return (
        <View className='flex flex-1 px-4 py-6 bg-white'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='p-4 border-b border-gray-200'>
                        <Text className='text-lg font-work-black'>{item.title}</Text>
                        <Text className='text-gray-600'>{item.description}</Text>
                        <View className='flex-row items-center mt-2 justify-between'>
                            <Text className='font-work-light mt-2'>${item.price.toFixed(2)}</Text>
                            <Link href={`/(stack)/products/${item.id}`} className='text-blue-500 underline'>
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default ProductsScren;
