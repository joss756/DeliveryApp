import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform } from 'react-native'
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';

import Button from '../../components/Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

const saveData = [
    {
        image: IMAGES.home,
        title: "Home Address",
        text: "123 Main Street, Anytown, USA 12345",
    },
    {
        image: IMAGES.map,
        title: "Office Address",
        text: "456 Elm Avenue, Smallville, CA 98765",
    },
    {
        image: IMAGES.home,
        title: "Home Address",
        text: "789 Maple Lane, Suburbia, NY 54321",
    },
    {
        image: IMAGES.shop,
        title: "Shop Address",
        text: "654 Pine Road, Countryside, FL 34567",
    },
]

type SaveAddressScreenProps = StackScreenProps<RootStackParamList, 'SaveAddress'>;

const SaveAddress = ({ navigation } : SaveAddressScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [isChecked, setIsChecked] = useState(saveData[0]);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Delivery Address"}
                leftIcon={'back'}
            />
            <ScrollView contentContainerStyle={{paddingBottom:150}}>
                <View style={[GlobalStyleSheet.container, { paddingTop: 10 }]}>
                    {saveData.map((data:any, index:any) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setIsChecked(data)}
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
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 ,flex:1}}>
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
                                        <Text style={{  ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title  }}>{data.title}</Text>
                                        <Text style={{ ...FONTS.fontMedium, fontSize: 13, color: colors.title,opacity:0.60 }}>{data.text}</Text>
                                    </View>
                                </View>
                                <View
                                    style={[{
                                        width: 24,
                                        height: 24,
                                        borderRadius: 50,
                                        backgroundColor:colors.card,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        // flex:1
                                    },isChecked === data && {
                                        backgroundColor:colors.card
                                    }]}
                                >
                                    <View style={[{
                                        width: 14,
                                        height: 14,
                                        backgroundColor:colors.card,
                                        borderRadius: 50
                                    }, isChecked === data && {
                                        backgroundColor: COLORS.primary
                                    }]}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            height: 48,
                            width: '100%',
                            borderRadius:15,
                            backgroundColor:colors.card,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 15,
                            marginTop: 30
                        }}
                        onPress={() => navigation.navigate('SavedAddresses')}
                    >
                        <View style={{ flexDirection: 'row', gap: 10 ,alignItems:'center'}}>
                            <Image
                                style={{ height: 20, width: 20, resizeMode: 'contain', tintColor:COLORS.secondary }}
                                source={IMAGES.plus}
                            />
                            <Text style={{ ...FONTS.fontMedium, fontSize: 16, color: colors.title,textTransform:'uppercase' }}>Add Address</Text>
                        </View>
                        <Image
                            style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: colors.title }}
                            source={IMAGES.rightarrow}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View
                style={[{
                   shadowColor: 'rgba(0, 0, 0, 0.10)',
                    shadowOffset: {
                        width: 2,
                        height: -3,
                    },
                    shadowOpacity: .1,
                    shadowRadius: 5,
                }, Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                    borderRadius:35
                }]}
            >
                <View style={{ height: 88, backgroundColor:theme.dark ? colors.background : colors.card,borderTopWidth:1,borderTopColor:colors.background,borderTopLeftRadius:20,borderTopRightRadius:20 }}>
                    <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 15, paddingTop: 0 }]}>
                        <Button
                            title={"Save Address"}
                            onPress={() => navigation.navigate('Checkout')}
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

export default SaveAddress