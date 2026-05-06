import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Stack, useNavigation, usePathname, useRouter } from 'expo-router';
import React from 'react';

const StackLayout = () => {

    const navigation = useNavigation();
    const router = useRouter();
    const pathname = usePathname();

    const onHeaderLeftClick = (canGoBack?: boolean) => {

        console.log({ pathname });

        // Si estamos en la página de detalles del producto, navega a productos
        if (pathname.includes('/products/') && !pathname.endsWith('/products')) {
            router.push('/(drawer)/(tabs)/(stack)/products');
            return;
        }

        // Si estamos en la lista de productos, navega a Start
        if (pathname.endsWith('/products')) {
            router.push('/(drawer)/(tabs)/(stack)/home');
            return;
        }

        // Si hay pantalla anterior, vuelve atrás
        if (canGoBack && navigation.canGoBack()) {
            navigation.dispatch(StackActions.pop());
            return;
        }

        // Si no hay pantalla anterior, abre el drawer
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) => (
                    <Ionicons
                        name={(canGoBack || pathname !== '/home') ? 'arrow-back-outline' : 'grid-outline'}
                        className="mr-5"
                        size={20}
                        onPress={() => onHeaderLeftClick(canGoBack)}
                    />
                ),

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
                name="products/[id]"
                options={{
                    title: 'Product Details',
                    animation: 'slide_from_right'
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