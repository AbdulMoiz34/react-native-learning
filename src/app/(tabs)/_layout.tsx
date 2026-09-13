import { Tabs } from 'expo-router';
import { Feather, Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: 'cart',
                    tabBarIcon: ({ color, size }) => <Feather name='shopping-cart' color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "heart" : "heart-outline"} size={26} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={26} color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabLayout;