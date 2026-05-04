import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                }

            }}
        >
            <Stack.Screen
                name="home/index"
                options={{
                    title: 'Start'
                }}

            />
            <Stack.Screen
                name="products/index"
                options={{
                    title: 'Products Screen',
                    animation: 'fade_from_bottom'
                }}

            />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: 'Profile Screen',
                    animation: 'simple_push'
                }}

            />
            <Stack.Screen
                name="settings/index"
                options={{
                    title: 'Settings Screen',
                    animation: 'ios_from_right'
                }}

            />
        </Stack>
    );
};

export default StackLayout;