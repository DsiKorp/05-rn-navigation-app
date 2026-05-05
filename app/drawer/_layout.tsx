import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';


const DrawerLayout = () => {
    return (
        // menu drawer
        <Drawer
            drawerContent={CustomDrawer}
            screenOptions={{
                headerShown: false,  // hide hambureger menu icon
                overlayColor: 'rgba(0, 0, 0, 0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <Drawer.Screen
                name="tabs" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tabs + Stack',
                    drawerIcon: ({ color, size, focused }) => (
                        <Ionicons name="albums-outline" size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'User',
                    drawerIcon: ({ color, size, focused }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Schedule',
                    title: 'Schedule',
                    drawerIcon: ({ color, size, focused }) => (
                        <Ionicons name="calendar-outline" size={size} color={color} />
                    )
                }}
            />
        </Drawer>
    );
};

export default DrawerLayout;