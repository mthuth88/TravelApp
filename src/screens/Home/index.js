import React, { useEffect, useState } from "react";
import {SafeAreaView, View } from 'react-native';
import Title from "../../components/Title";


const Home = () => {
    const[title, setTitle] = useState('My First Component');

    useEffect(() => {
        setTimeout(() => {
            setTitle('Updated prop text');
        }, 3000);
    }, []);
    console.log('title :>> ', title);

    return (
        <SafeAreaView>
        <View>
            <Title />
                        
        </View>
        </SafeAreaView>
    );
};

export default Home;