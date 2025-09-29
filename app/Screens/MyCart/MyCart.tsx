import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CheckoutItems from '../../components/CheckoutItems';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';
import { useDispatch, useSelector } from 'react-redux';
import { addTowishList, removeFromwishList } from '../../redux/reducer/wishListReducer';
import { removeFromCart } from '../../redux/reducer/cartReducer';
import { Feather } from "@expo/vector-icons";



type MyCartScreenProps = StackScreenProps<RootStackParamList, 'MyCart'>;

const MyCart = ({ navigation } : MyCartScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;


    const dispatch = useDispatch();

    const wishList = useSelector((state:any) => state.wishList.wishList);

    const inWishlist = () => {
        var temp = [] as any;
        wishList.forEach((data:any) => {
            temp.push(data.id);
        });
        return temp;
    }

    const addItemToWishList = (data: any) => {
        dispatch(addTowishList(data));
    }

    const removeItemFromWishList = (data: any) => {
        dispatch(removeFromwishList(data));
    }

    const cart = useSelector((state:any) => state.cart.cart);

    const removeItemFromCart = (data: any) => {
        dispatch(removeFromCart(data));
    }


    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <View
                style={[{
                    shadowColor: 'rgba(50, 21, 17, 0.10)',
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: .1,
                    shadowRadius: 5,
                }, Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                }]}
            >
                <View
                    style={[{
                        height: 60,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: colors.card,
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                    }]}
                >
                    <View style={[GlobalStyleSheet.container, {
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        justifyContent: 'space-between'
                    }]}
                    >
                        <View style={{}}>
                            <Text style={{  ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title, textAlign: 'left' }}>My Cart</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Text style={{ ...FONTS.fontBold, fontSize: 14, color:COLORS.primary }}>{cart.length}<Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}> Items</Text></Text>
                                <View style={{ height: 4, width: 4, backgroundColor: theme.dark ? COLORS.white : COLORS.primary, transform: [{ rotate: '45deg' }] }}></View>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title  }}>Deliver to:<Text style={{ ...FONTS.fontBold,color:COLORS.primary }}> London</Text></Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SavedAddresses')}
                        >
                            <View 
                                style={{
                                    flexDirection: 'row', 
                                    alignItems: 'center', 
                                    gap: 5, 
                                    width:90, 
                                    height: 32,
                                    justifyContent: 'center',
                                    borderRadius:20,
                                    backgroundColor:COLORS.primary
                                }}
                            >
                                <Image
                                    style={{ height: 14, width: 14, resizeMode: 'contain', tintColor:COLORS.white }}
                                    source={IMAGES.map}
                                />
                                <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 14, color:COLORS.white }}>Change</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {cart.length > 0 ?
                <View style={[GlobalStyleSheet.container, { paddingHorizontal: 15, paddingTop: 15, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor:colors.card }]}>
                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title,textTransform:'uppercase' }}>Subtotal<Text style={{ ...FONTS.AntonSCRegular, fontSize: 18,color:COLORS.primary }}> $3,599</Text></Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                        <Image
                            style={{ height: 23, width: 23, resizeMode: 'contain' }}
                            source={IMAGES.check}
                        />
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: COLORS.success }}>Your order is eligible for free Delivery</Text>
                    </View>
                </View>
            :
                null
            }
            <View style={[GlobalStyleSheet.container, { paddingTop: 0 }]}>
                <View style={{ marginHorizontal: -15, paddingHorizontal:15}}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 220, }}
                    >
                        {cart.map((data:any, index:any) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        marginTop: 15,
                                        padding:15,
                                        paddingVertical:15,
                                        borderRadius:20,
                                        backgroundColor:colors.card
                                    }}
                                >
                                    <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
                                        <View style={{alignItems:'center'}}>
                                            <Image
                                                style={[{ 
                                                    height:null, 
                                                    width:SIZES.width /3,
                                                    aspectRatio:1/1, 
                                                    backgroundColor:COLORS.card,
                                                    resizeMode:'contain',
                                                    borderRadius:10 
                                                },Platform.OS === 'web' && {width:SIZES.width / 4.5}]}
                                                source={data.image}
                                            />
                                        </View>
                                        <View style={{flex:1,}}>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('ProductDetails')}
                                            >
                                                <Text style={{ ...FONTS.DKDisplayPatrol, fontSize:20, color: colors.title,paddingRight:25}}>{data.title}</Text>
                                            </TouchableOpacity>
                                            <Text style={{ ...FONTS.fontMedium, fontSize: 16, color: COLORS.success, marginTop: 5 }}>FREE Delivery</Text>
                                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                                                <Text style={{...FONTS.AntonSCRegular,fontSize:17,color:COLORS.primary}}>{data.price}</Text>
                                                <View style={{flexDirection:'row',alignItems:'center',gap:2}}>
                                                    <Image
                                                        style={{ height: 16, width: 16, resizeMode: 'contain',tintColor:COLORS.secondary }}
                                                        source={IMAGES.star4}
                                                    />
                                                    <Text style={{ ...FONTS.fontSemiBold, fontSize: 16, color:colors.text,lineHeight:20,marginLeft:3 }}>{data.review}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View 
                                        style={{
                                            flexDirection:'row',
                                            alignItems:'center',
                                            justifyContent:'space-between',
                                            gap:15,
                                            backgroundColor:colors.background,
                                            padding:10,
                                            borderRadius:10,
                                            marginTop:10
                                        }}
                                    >
                                        <CheckoutItems />
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => removeItemFromCart(data)}
                                            style={{ 
                                                flexDirection: 'row', 
                                                alignItems: 'center', 
                                                gap: 2,
                                                marginRight:10,
                                                backgroundColor:colors.card,
                                                paddingHorizontal:8,
                                                paddingVertical:3,
                                                borderRadius:6 
                                            }}
                                        >
                                            <Image
                                                style={{ height: 16, width: 16, resizeMode: 'contain', tintColor:'#FF3E3E' }}
                                                source={IMAGES.delete}
                                            />
                                            <Text style={{ ...FONTS.fontRegular, fontSize: 14, color:'#818181' }}>Remove</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
            {cart.length > 0 ?
                (
                   
                    <View 
                        style={{ 
                            height: 88, 
                            width: '100%', 
                            backgroundColor:colors.card,
                            flex: 1, 
                            paddingHorizontal: 15,
                            position:'absolute',
                            bottom:0,
                            borderTopLeftRadius:20,
                            borderTopRightRadius:20  
                        }}
                    >
                        <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 20, paddingTop: 0 }]}>
                            <Button
                                title={'Proceed to Buy (8 items)'}
                                onPress={() => navigation.navigate('Checkout')}
                                color={theme.dark ? COLORS.white :COLORS.primary}
                                text={colors.card}
                                btnRounded
                            />
                        </View>
                    </View>
                )
                :
                (
                    <View style={[GlobalStyleSheet.container,{padding:0,position:'absolute',left:0,right:0,bottom:0,top:20}]}>
                        <View
                            style={{
                                flex:1,
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <View
                                style={{
                                    height:60,
                                    width:60,
                                    borderRadius:60,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    backgroundColor:theme.dark ? 'rgba(255,255,255,0.15)':COLORS.primaryLight,
                                    marginBottom:20,
                                }}
                            >
                                <Feather color={colors.title} size={24} name='shopping-cart'/>
                            </View>
                            <Text style={{...FONTS.h5,color:colors.title,marginBottom:8}}>Your shopping-cart is Empty!</Text>    
                            <Text
                                style={{
                                    ...FONTS.fontSm,
                                    color:colors.text,
                                    textAlign:'center',
                                    paddingHorizontal:40,
                                    //marginBottom:30,
                                }}
                            >Add Product to you favourite and shop now.</Text>
                        </View>
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default MyCart