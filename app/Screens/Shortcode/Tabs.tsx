import React, { useRef } from 'react';
import { Animated, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import TabButtonStyle1 from '../../components/Tabs/TabButtonStyle1';
import TabButtonStyle2 from '../../components/Tabs/TabButtonStyle2';


const Tabs = () => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const buttons = ['First', 'Second', 'Third'];
    const scrollX = useRef<any>(new Animated.Value(0)).current;
    const scrollViewHomeRef = useRef<ScrollView>(null);
    interface ScrollToParams {
        x: number;
    }

    type ScrollViewRef = ScrollView | null;

    interface OnClickParams {
        i: number;
    }

    const onCLick = (i: number): void => {
        if (scrollViewHomeRef.current) {
            scrollViewHomeRef.current.scrollTo({ x: i * SIZES.width - 60 } as ScrollToParams);
        }
    };
    const scrollX2 = useRef(new Animated.Value(0)).current;
    const scrollViewHome2Ref = useRef<ScrollView>(null);
    interface ScrollToParams {
        x: number;
    }

    const onCLick2 = (i: number): void => {
        if (scrollViewHome2Ref.current) {
            scrollViewHome2Ref.current.scrollTo({ x: i * SIZES.width - 60 } as ScrollToParams);
        }
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.card,
            }}
        >
            <View style={{ flex: 1, backgroundColor: colors.background }}>
                <View
                    style={[{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 2,
                            height: 2,
                        },
                        shadowOpacity: .1,
                        shadowRadius: 5,
                    }, Platform.OS === "ios" && {
                        backgroundColor: colors.card,
                    }]}
                >
                    <Header title={'Tabs'} titleLeft leftIcon={'back'} />
                </View>
                <ScrollView
                    ref={scrollViewHomeRef}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    scrollEnabled={false}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false },
                    )}
                >
                    {/* tab 1 */}
                    <View style={[styles.tabBody]} >
                        <Text style={{ ...FONTS.font, color: colors.title }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    {/* tab 2 */}
                    <View style={[styles.tabBody]} >
                        <Text style={{ ...FONTS.font, color: colors.title }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    {/* tab 3 */}
                    <View style={[styles.tabBody]} >
                        <Text style={{ ...FONTS.font, color: colors.title }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                </ScrollView>
                <ScrollView
                    ref={scrollViewHome2Ref}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    scrollEnabled={false}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX2 } } }],
                        { useNativeDriver: false },
                    )}
                >
                    {/* tab 1 */}
                    <View style={[styles.tabBody]} >
                        <Text style={{ ...FONTS.font, color: colors.title }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    {/* tab 2 */}
                    <View style={[styles.tabBody]} >
                        <Text style={{ ...FONTS.font, color: colors.title }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    {/* tab 3 */}
                    <View style={[styles.tabBody]} >
                        <Text style={{ ...FONTS.font, color: colors.title }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    tabBody: {
        width: SIZES.width - 60,
    },
})

export default Tabs;