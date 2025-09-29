import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Header from '../../layout/Header';
import {FONTS, COLORS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CardStyle3 from '../../components/Card/CardStyle3';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';

const TrackorderData = [
    {
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        price: "$110.20",
        review: "4.8",
    },
]

const Trackorder = () => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Track Order"}
                leftIcon={"back"}
            />
            <ScrollView contentContainerStyle={{paddingBottom:100}}>
                <View style={GlobalStyleSheet.container}>
                    <View style={{
                        marginHorizontal: -15,
                        paddingHorizontal:15
                    }}>
                        {TrackorderData.map((data, index) => {
                            return (
                                <View key={index}>
                                    <CardStyle3
                                        id=''
                                        title={data.title}
                                        price={data.price}
                                        image={data.image}
                                        review={data.review}
                                        grid
                                    />
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title,textTransform:'uppercase' }}>Track Order</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                        <Image
                            style={{ height: 24, width: 24, resizeMode: 'contain', }}
                            source={IMAGES.check2}
                        />
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: COLORS.primary,textTransform:'uppercase' }}>Order Placed<Text style={{ ...FONTS.fontMedium, fontSize: 14,color:colors.title,opacity:0.20 }}>  27 Dec 2023</Text></Text>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>We have received your order</Text>
                        </View>
                        <View style={{ height: 70, width: 2, backgroundColor: COLORS.primary, position: 'absolute', left: 11, top: 33 }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 40 }}>
                        <Image
                            style={{ height: 24, width: 24, resizeMode: 'contain' }}
                            source={IMAGES.check2}
                        />
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: COLORS.primary,textTransform:'uppercase' }}>Order Confirm<Text style={{...FONTS.fontMedium, fontSize: 14,color:colors.title,opacity:0.20}}>  27 Dec 2023</Text></Text>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>We has been confirmed</Text>
                        </View>
                        <View style={{ height: 60, width: 2, backgroundColor: COLORS.primary, position: 'absolute', left: 11, top: 33 }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 40 }}>
                        <View style={{ height: 24, width: 24, borderWidth: 2, borderColor:theme.dark ? colors.border : COLORS.primary, borderRadius: 24,backgroundColor:colors.card }}>
                        </View>
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title,textTransform:'uppercase' }}>Order Processed<Text style={{...FONTS.fontMedium, fontSize: 14,color:colors.title,opacity:0.20}}>  28 Dec 2023</Text></Text>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>We are preparing your order</Text>
                        </View>
                        <View style={{ height: 60, width: 2, backgroundColor:theme.dark ? colors.border : COLORS.primary, position: 'absolute', left: 11, top: 33 }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 40 }}>
                        <View style={{ height: 24, width: 24, borderWidth: 2, borderColor:theme.dark ? colors.border : COLORS.primary, borderRadius: 24,backgroundColor:colors.card }}>
                        </View>
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title,textTransform:'uppercase' }}>Ready To Ship<Text style={{...FONTS.fontMedium, fontSize: 14,color:colors.title,opacity:0.20}}>  29 Dec 2023</Text></Text>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Your order is ready for shipping </Text>
                        </View>
                        <View style={{ height: 60, width: 2, backgroundColor:theme.dark ? colors.border : COLORS.primary, position: 'absolute', left: 11, top: 33 }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 40 }}>
                        <View style={{ height: 24, width: 24, borderWidth: 2, borderColor:theme.dark ? colors.border : COLORS.primary, borderRadius: 24,backgroundColor:colors.card }}>
                        </View>
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title,textTransform:'uppercase' }}>Out For Delivery<Text style={{...FONTS.fontMedium, fontSize: 14,color:colors.title,opacity:0.20}}>  31 Dec 2023</Text></Text>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Your order is out for delivery</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Trackorder