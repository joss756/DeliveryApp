import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';

import Button from '../../components/Button/Button';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

const checkoutData = [
    {
        image: IMAGES.map,
        title: "Delivery address",
        text: "123 Main Street, Anytown, USA 12345",
        navigate: "SaveAddress"
    },
    {
        image: IMAGES.card2,
        title: "Payment",
        text: "XXXX XXXX XXXX 3456",
        navigate: "Payment"
    },
]

type CheckoutScreenProps = StackScreenProps<RootStackParamList, 'Checkout'>;

const Checkout = ({ navigation } : CheckoutScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Checkout"}
                leftIcon={'back'}
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View style={[GlobalStyleSheet.container, { paddingTop: 10 }]}>
                    {checkoutData.map((data:any, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate(data.navigate)}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.border,
                                    paddingBottom: 10,
                                    marginTop: 10
                                }}
                                key={index}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10,flex:1 }}>
                                    <View 
                                        style={{ 
                                            height: 40, 
                                            width: 40, 
                                            backgroundColor:COLORS.primary, 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            borderRadius:10 
                                        }}
                                    >
                                        <Image
                                            style={{ height: 20, width: 20, tintColor:COLORS.card, resizeMode: 'contain' }}
                                            source={data.image}
                                        />
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16,textTransform:'uppercase', color: colors.title }}>{data.title}</Text>
                                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.title ,opacity:0.60}}>{data.text}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image
                                        style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: colors.title }}
                                        source={IMAGES.rightarrow}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    <View style={{ marginTop: 20, }}>
                        <Text style={{ ...FONTS.fontSemiBold, fontSize: 15, color: colors.text,textTransform:'uppercase' }}>Additional Notes:</Text>
                        <View 
                            style={{ 
                                height: 120, 
                                width: '100%', 
                                backgroundColor: colors.card, 
                                marginTop: 10 ,
                                borderRadius:SIZES.radius_sm
                            }}
                        >
                            <TextInput
                                style={{
                                    ...FONTS.fontRegular,
                                    fontSize: 15,
                                    color: colors.title,
                                    paddingVertical: 12,
                                    paddingHorizontal: 15,
                                }}
                                placeholder='Write Here'
                                multiline
                                placeholderTextColor={colors.textLight}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 180 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:15 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color:colors.title,opacity:0.60 }}>Smooth Silhouette T-Shirt Bra</Text>
                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color: colors.title }}>2 x $2000.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:15 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color:colors.title,opacity:0.60 }}>Comfort Underwire Bra</Text>
                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color: colors.title }}>2 x $1699.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:15 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color:colors.title,opacity:0.60 }}>Discount</Text>
                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color: colors.title }}>-$100.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:15 }}>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 16, color:colors.title,opacity:0.60}}>Shipping</Text>
                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color: COLORS.success }}>FREE Delivery</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor:colors.border }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20,marginBottom:10 }}>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title,textTransform:'uppercase' }}>My Order</Text>
                            <Text style={{ ...FONTS.AntonSCRegular, fontSize:20, color:COLORS.primary }}>$3,599.00</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View
                style={[{
                   shadowColor: 'rgba(0, 0, 0, 0.10)',
                    shadowOffset: {
                        width: -2,
                        height: 3,
                    },
                    shadowOpacity: .2,
                    shadowRadius: 5,
                    position: 'absolute', 
                    bottom: 0,
                    width:'100%'
                }, Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                    borderRadius:35
                }]}
            >
                <View style={{ height: 88, backgroundColor:theme.dark ? colors.background : colors.card,borderTopWidth:1,borderTopColor:colors.background,borderTopLeftRadius:20,borderTopRightRadius:20 }}>
                    <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 15, paddingTop: 0 }]}>
                        <Button
                            title={"Submit Order"}
                            onPress={() => navigation.navigate('Myorder')}
                            color={theme.dark ? COLORS.white :COLORS.primary}
                            text={colors.card}
                            btnRounded
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Checkout;