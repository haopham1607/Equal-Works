import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { useCustomFonts } from "../assets/componentStyleSheet";
import { useNavigation } from '@react-navigation/native';
import { fetchUserData } from "../assets/DATA"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
function PreLoad() {
    let [fontsLoaded] = useCustomFonts();
    const navigation = useNavigation();

    useEffect(() => {
        if (fontsLoaded) {
            navigateToHome();
        }
    }, [fontsLoaded]);

    function navigateToHome() {
        if (AsyncStorage.getItem('userData')) {
            AsyncStorage.clear();
            console.log('All data cleared successfully.');
        }
        navigation.navigate('LogReg');
    }

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <View>
                {/* your other components go here */}
            </View>
        );
    }
}

export default PreLoad;