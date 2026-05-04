import React from 'react';

import { Redirect } from 'expo-router';
import "../global.css";

const index = () => {

    return <Redirect href="/(stack)/home" />;

    // return (
    //     <SafeAreaView>
    //         <View className="mt-6 mx-2.5 bg-secondary rounded-lg p-4">
    //             <Text className="text-3xl font-work-black">
    //                 Welcome to Nativewind in!
    //             </Text>
    //             <Text className="text-2xl font-work-medium text-primary">
    //                 Welcome to Nativewind in!
    //             </Text>
    //             <Text className="text-1xl font-work-light text-tertiary">
    //                 Welcome to Nativewind in!
    //             </Text>

    //             <Link href="/products">View Products</Link>

    //         </View>
    //     </SafeAreaView>
    // );
};

export default index;