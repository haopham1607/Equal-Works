import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import componentStyle from "../assets/componentStyleSheet";
import styles from "../assets/stylesheet";
import { gradientRectangle, jobNews1, marginBottomForScrollView, mostCompany, searchNav, suitableJob } from "../assets/component";
import { heartDouble } from "../assets/svgXml";
import { useNavigatio, NavigationContainer } from '@react-navigation/native';

function Home({ navigation }) {

    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.white }]}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content"   />
            <LinearGradient
                colors={['#E2EAFF', '#FFE7AB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ height: vh(50), position: 'absolute', left: 0, right: 0, top: 0, zIndex: -1 }}
            >

            </LinearGradient>
            {searchNav("App Name", null, () => { })}

            <ScrollView style={[styles.flex1, styles.flexCol, styles.gap5vw, { backgroundColor: colorStyle.white, paddingTop: vw(5) }]}>
                <View style={{ paddingHorizontal: vw(5) }}>
                    {gradientRectangle()}
                </View>

                <View style={[styles.positionRelative, styles.marginVertical6vw]}>
                    <View style={[styles.flexRow, styles.alignItemsCenter, styles.borderRadius16, styles.wfit, styles.positionAbsolute, { zIndex: 1, gap: vw(2.5), paddingVertical: vw(2.5), paddingHorizontal: vw(5), backgroundColor: colorStyle.blue1, marginLeft: vw(6.5) }]}>
                        <Text style={[componentStyle.Os20Bold, { color: colorStyle.tan1, }]}>Công việc phù hợp</Text>
                        {heartDouble(vw(6), vw(6))}
                    </View>
                    <View style={[styles.w100, styles.flex1, { borderTopLeftRadius: vw(7.5), borderTopWidth: vw(0.5), borderColor: colorStyle.blue1, borderLeftWidth: 1, top: vw(8) }]}>
                        <View style={{ margin: vw(5), }}>
                            {jobNews1()}
                        </View>
                    </View>
                </View>

                <View style={[styles.positionRelative, styles.marginVertical6vw, { borderTopWidth: vw(0.5), borderColor: colorStyle.blue1, }]}>
                    <LinearGradient
                        colors={['#E2EAFF', '#FFE7AB']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View style={[styles.flexRow, styles.alignItemsCenter, styles.borderRadius16, styles.wfit, styles.positionAbsolute, { zIndex: 1, gap: vw(2.5), paddingVertical: vw(2.5), paddingHorizontal: vw(6.5) }]}>
                            {heartDouble(vw(6), vw(6))}
                            <Text style={[componentStyle.Os20Bold, { color: colorStyle.blue1, }]}>TOP công ty hàng đầu</Text>
                        </View>
                        <View style={[styles.w100, styles.flex1, { paddingVertical: vw(6), paddingHorizontal: vw(6.5), }]}>
                            <View>
                                {mostCompany()}
                            </View>
                        </View>
                    </LinearGradient>
                </View>



                <View style={[styles.w100, styles.flex1, { borderTopLeftRadius: vw(7.5), borderTopWidth: vw(0.5), borderColor: colorStyle.blue1, borderLeftWidth: 1, }]}>

                    <View style={{ margin: vw(5), }}>
                        {suitableJob()}
                    </View>
                </View>

                {marginBottomForScrollView()}
            </ScrollView>

        </SafeAreaView>
    )
}
export default Home;