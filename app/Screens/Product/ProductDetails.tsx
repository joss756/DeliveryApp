import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import {FONTS, COLORS, SIZES } from '../../constants/theme';
import CheckoutItems from '../../components/CheckoutItems';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducer/cartReducer';

import Button from '../../components/Button/Button';


type ProductDetailsScreenProps = StackScreenProps<RootStackParamList, 'ProductDetails'>;

const ProductDetails = ({ navigation } : ProductDetailsScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const productColors = ["#B45E58", "#5F75C5", "#C58F5E", "#919191", "#A872B1", "#699156"];

    const productWeight = ["250 G", "500 G", "750 G", "1 KG", "1.5 KG"];

    const [activeColor, setActiveColor] = useState(productColors[0]);

    const [activeWeight, setActiveWeight] = useState(productWeight[0]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const dispatch = useDispatch();

    const addItemToCart = () => {

        dispatch(addToCart({
            id:"0",
            image:IMAGES.itemDetails7,
            title:"Special Choco Chips Cake",
            price:"$140.20",
            review:"4.5"
        } as any ));
    }
    

    return (
        <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1 }]}>
            <View style={{position:'absolute',left:0,top:0,width:'100%',zIndex:1}}>
                <Header
                    title="Product Details"
                    leftIcon={'back'}
                    rightIcon={'cart'}
                    onPress={() => {addItemToCart(); navigation.navigate('MyCart')}}
                    //cartcount={14}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        height:null,
                        width:'100%',
                        aspectRatio:1/1.1,
                        backgroundColor:colors.card,
                        borderBottomLeftRadius:30,
                        borderBottomRightRadius:30,
                        overflow:'hidden'
                    }}
                >
                    <Image
                        style={{ width: '100%', height:null, aspectRatio: 1 /1.2,resizeMode:'contain'}}
                        source={IMAGES.itemDetails7}
                    />
                </View>
                <View style={[GlobalStyleSheet.container, { marginTop:0 }]}>
                    <View style={{ marginTop: 10, marginBottom: 20 }}>
                        <Text 
                            style={{ 
                                ...FONTS.DKDisplayPatrol, 
                                fontSize: 35, 
                                color: colors.title
                                }}
                            >Special Choco Chips Cake</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 60, }}>
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title }}>Price:</Text>
                            <View style={{ flexDirection: 'row', alignItems:'baseline', gap: 5,}}>
                                <Text style={{ ...FONTS.AntonSCRegular, fontSize: 30, color: COLORS.primary }}>$270</Text>
                                <Text style={{ ...FONTS.AntonSCRegular, fontSize: 18, color: colors.text, textDecorationLine: 'line-through' }}>$310</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title  }}>Quantity:</Text>
                            <View style={{ marginTop: 15 }}>
                                <CheckoutItems />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title }}>Weight:</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 10
                            }}>
                            {productWeight.map((data:any, index:any) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => setActiveWeight(data)}
                                        key={index}
                                        style={[{
                                            height: 34,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginHorizontal: 4,
                                            backgroundColor: colors.card,
                                            paddingHorizontal:17,
                                            borderRadius:10
                                        }, activeWeight === data && {
                                            backgroundColor: COLORS.primary,
                                            borderColor: COLORS.primary,
                                            borderBottomWidth:1
                                        }]}
                                    >
                                        <Text style={[{ ...FONTS.fontSemiBold, fontSize: 14, color: colors.title }, activeWeight === data && { color: COLORS.white }]}>{data}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title}}>Description:</Text>
                        <View>
                            <Text style={{ ...FONTS.fontRegular, fontSize: 18, color: colors.title, opacity: 0.7, marginTop: 10,lineHeight:24 }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor.</Text>
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
                }, Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                    borderRadius:35
                }]}
            >
                <View 
                    style={{ 
                        height: 88, 
                        width: '100%', 
                        backgroundColor:theme.dark ? colors.background : colors.card,
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20 
                    }}
                >
                    <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 20, padding: 0 }]}>
                        <Button
                            title={'Add To cart'}
                            onPress={() => {addItemToCart(); navigation.navigate('MyCart')}}
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

export default ProductDetails