import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IconButton } from 'react-native-paper';
import { Feather } from "@expo/vector-icons";
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { ScrollView } from 'react-native-gesture-handler';
import CardStyle1 from '../../components/Card/CardStyle1';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/reducer/cartReducer';
import { removeFromwishList } from '../../redux/reducer/wishListReducer';


const sliderData = [
    {
        title: "All",
        active: true,
    },
    {
        title: "Cookies",
    },
    {
        title: "Cakes",
    },
    {
        title: "Croissant",
    },
    {
        title: "Bagel",
    },
]

type WishlistScreenProps = StackScreenProps<RootStackParamList, 'Wishlist'>;

const Wishlist = ({ navigation } : WishlistScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const wishList = useSelector((state:any) => state.wishList.wishList);

    const dispatch = useDispatch();

    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    }

    const removeItemFromWishList = (data: any) => {
        dispatch(removeFromwishList(data));
    }

    const [activeSize1, setActiveSize1] = useState(sliderData[0]);

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
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title, textAlign: 'left' }}>Wishlist</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Text style={{ ...FONTS.fontBold, fontSize: 14, color:COLORS.primary }}>{wishList.length}<Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}> Items</Text></Text>
                                <View style={{ height: 4, width: 4, backgroundColor: colors.title, transform: [{ rotate: '45deg' }] }}></View>
                                <Text style={{ ...FONTS.fontRegular, fontSize: 14, color: colors.title }}>Total:<Text style={{ ...FONTS.fontBold,color:COLORS.primary }}> $213</Text></Text>
                            </View>
                        </View>
                        <View style={{}}>
                            <IconButton
                                onPress={() => navigation.navigate('Search')}
                                size={20}
                                iconColor={colors.textLight}
                                icon={props => <Feather name="search" {...props} />}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[GlobalStyleSheet.container,{flex:1}]}>
                {wishList.length > 0 ? 
                    <View style={{ marginHorizontal: -15,marginBottom:15 }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
                                {sliderData.map((data:any, index:any) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            activeOpacity={0.5}
                                            onPress={() => {setActiveSize1(data) ; navigation.navigate('Products')}}
                                            style={[{
                                                backgroundColor:colors.card,
                                                borderRadius:30,
                                                height: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop:5,
                                                paddingHorizontal: 25,
                                                paddingVertical: 5
                                            },activeSize1 === data && {
                                                backgroundColor:COLORS.primary,
                                            }]}>
                                            <Text style={[{ ...FONTS.DKDisplayPatrol, fontSize: 16, color:colors.title },activeSize1 === data &&{color:COLORS.white}]}>{data.title}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    :
                    null
                } 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 100,
                        flexGrow:1,
                        justifyContent:wishList.length === 0 ? 'center' : 'flex-start',
                        alignItems:wishList.length === 0 ? 'center' : 'flex-start',
                        marginTop:10 
                    }}
                >
                    <View style={[GlobalStyleSheet.row]}>
                        {wishList.map((data:any, index:any) => {
                            return (
                                <View key={index} style={[GlobalStyleSheet.col50, { marginBottom: 20 }]}>
                                    <CardStyle1
                                        id={data.id}
                                        image={data.image}
                                        title={data.title}
                                        price={data.price}
                                        discount={data.discount}
                                        review={data.review}
                                        closebtn
                                        likebtn
                                        onPress1={() => removeItemFromWishList(data.id)}
                                        onPress2={() =>{addItemToCart(data) ; navigation.navigate('MyCart')}}
                                        onPress={() => navigation.navigate('ProductDetails')}
                                    />
                                </View>
                            )
                        })}
                        {wishList.length === 0 && 
                               <View
                                    style={{
                                        alignItems:'center',
                                        justifyContent:'center',
                                        marginTop:110
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
                                        <Feather color={colors.title} size={24} name='heart'/>
                                    </View>
                                    <Text style={{...FONTS.h5,color:colors.title,marginBottom:8}}>Your Wishlist is Empty!</Text>    
                                    <Text
                                        style={{
                                            ...FONTS.fontSm,
                                            color:colors.text,
                                            textAlign:'center',
                                            paddingHorizontal:40,
                                            marginBottom:30,
                                        }}
                                    >Add Product to you favourite and shop now.</Text>
                                </View>
                            }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Wishlist