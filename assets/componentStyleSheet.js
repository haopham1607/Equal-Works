import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { useFonts } from 'expo-font';

import {
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
} from '@expo-google-fonts/oswald';

import {
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

export const useCustomFonts = () => {
    return useFonts({
        Oswald_200ExtraLight,
        Oswald_300Light,
        Oswald_400Regular,
        Oswald_500Medium,
        Oswald_600SemiBold,
        Oswald_700Bold,
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light_Italic,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black_Italic,
        // 'anuphanBold': require('../assets/fonts/Anuphan-Bold.ttf'),
        // 'anuphanLight': require('../assets/fonts/Anuphan-Light.ttf'),
        // 'anuphanMedium': require('../assets/fonts/Anuphan-Medium.ttf'),
        // 'anuphanSemiBold': require('../assets/fonts/Anuphan-SemiBold.ttf'),
        // 'anuphanThin': require('../assets/fonts/Anuphan-Thin.ttf'),
        // 'anuphanRegular': require('../assets/fonts/Anuphan-Regular.ttf'),
    });
};

export const colorStyle = StyleSheet.create({
    white: '#FAFAFA',
    grey: '#BABABA',
    darkGray: '#383838',
    black: '#3C3C3C',
    blue1: '#1F57E8',
    blue2: '#517AE4',
    blue3: '#E2EAFF',
    blue4: '#3454A4',
    tan1: '#E2B647',
    tan2: '#FFE7AB',
});

const componentStyle = StyleSheet.create({

    // font
    Oswald_200ExtraLight: {
        fontFamily: 'Oswald_200ExtraLight',
    },
    Oswald_300Light: {
        fontFamily: 'Oswald_300Light',
    },
    Oswald_400Regular: {
        fontFamily: 'Oswald_400Regular',
    },
    Oswald_500Medium: {
        fontFamily: 'Oswald_500Medium',
    },
    Oswald_600SemiBold: {
        fontFamily: 'Oswald_600SemiBold',
    },
    Oswald_700Bold: {
        fontFamily: 'Oswald_700Bold',
    },
    Montserrat_100Thin: {
        fontFamily: 'Montserrat_100Thin'
    },
    Montserrat_200ExtraLight: {
        fontFamily: 'Montserrat_200ExtraLight'
    },
    Montserrat_300Light: {
        fontFamily: 'Montserrat_300Light'
    },
    Montserrat_400Regular: {
        fontFamily: 'Montserrat_400Regular'
    },
    Montserrat_500Medium: {
        fontFamily: 'Montserrat_500Medium'
    },
    Montserrat_600SemiBold: {
        fontFamily: 'Montserrat_600SemiBold'
    },
    Montserrat_700Bold: {
        fontFamily: 'Montserrat_700Bold'
    },
    Montserrat_800ExtraBold: {
        fontFamily: 'Montserrat_800ExtraBold'
    },
    Montserrat_900Black: {
        fontFamily: 'Montserrat_900Black'
    },
    Montserrat_100Thin_Italic: {
        fontFamily: 'Montserrat_100Thin_Italic'
    },
    Montserrat_200ExtraLight_Italic: {
        fontFamily: 'Montserrat_200ExtraLight_Italic'
    },
    Montserrat_300Light_Italic: {
        fontFamily: 'Montserrat_300Light_Italic'
    },
    Montserrat_400Regular_Italic: {
        fontFamily: 'Montserrat_400Regular_Italic'
    },
    Montserrat_500Medium_Italic: {
        fontFamily: 'Montserrat_500Medium_Italic'
    },
    Montserrat_600SemiBold_Italic: {
        fontFamily: 'Montserrat_600SemiBold_Italic'
    },
    Montserrat_700Bold_Italic: {
        fontFamily: 'Montserrat_700Bold_Italic'
    },
    Montserrat_800ExtraBold_Italic: {
        fontFamily: 'Montserrat_800ExtraBold_Italic'
    },
    Montserrat_900Black_Italic: {
        fontFamily: 'Montserrat_900Black_Italic'
    },

    // text
    Os32Bold: {
        fontFamily: 'Oswald_700Bold',
        fontSize: vw(8),
    },
    Os24Bold: {
        fontFamily: 'Oswald_700Bold',
        fontSize: vw(6),
    },
    Os20Bold: {
        fontFamily: 'Oswald_700Bold',
        fontSize: vw(5),
    },
    Os16Bold: {
        fontFamily: 'Oswald_700Bold',
        fontSize: vw(4),
    },
    Os14Bold: {
        fontFamily: 'Oswald_700Bold',
        fontSize: vw(3.5),
    },
    Os12Bold: {
        fontFamily: 'Oswald_700Bold',
        fontSize: vw(3),
    },
    Mon10Bold: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: vw(2.5),
    },
    Mon12Bold: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: vw(3),
    },
    Mon14Bold: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: vw(3.5),
    },
    Mon16Bold: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: vw(4),
    },
    Mon18Bold: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: vw(4.5),
    },
    Mon20Bold: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: vw(5),
    },
    Mon10Reg: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: vw(2.5),
    },
    Mon12Reg: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: vw(3),
    },
    Mon14Reg: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: vw(3.5),
    },
    Mon16Reg: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: vw(4),
    },

    // shadow
    shadowW0H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW1H1: {
        shadowColor: 'black',
        shadowOffset: { width: vw(1), height: vw(1) },
        shadowOpacity: 0.25,
    },

    shadowW0H1B1S0: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
        shadowRadius: vw(1),
    },

    shadowBtn: {
        borderBottomColor: colorStyle.main4,
        borderBottomWidth: vw(0.5),
        backgroundColor: colorStyle.main2,
    },

    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: vw(4),
        width: '90%',
        marginLeft: '5%'
    },

    loginInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw(2.5),
        borderRadius: vw(4),
        paddingHorizontal: vw(5),
        width: '100%',
    },

    loginInputText: {
        fontSize: vw(3.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4),
        paddingHorizontal: vw(2),
        width: '100%',
        height: '100%',
    },

    submitBtn: {
        borderWidth: 2,
        borderRadius: vw(4),
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto'
    },

    submitBtnText: {
        fontSize: vw(4.5),
        lineHeight: vw(4.5),
        paddingVertical: vw(4.5),
    },

});

export default componentStyle;