import React, { useState, useRef } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IconButton } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { ScrollView } from 'react-native-gesture-handler';
import CardStyle1 from '../../components/Card/CardStyle1';
import CardStyle3 from '../../components/Card/CardStyle3';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';
import BottomSheet2 from '../Shortcode/BottomSheet2';
import { useDispatch } from 'react-redux';
import { addTowishList } from '../../redux/reducer/wishListReducer';
import { addToCart } from '../../redux/reducer/cartReducer';



const sliderData = [
    {
        title: "Crazy Deals",
    },
    {
        title: "Budget Buys",
    },
    {
        title: "Best Offer",
    },
]

const ListData = [
    {
        id:"4",
        image: IMAGES.item11,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"5",
        image: IMAGES.item12,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"6",
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"7",
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"8",
        image: IMAGES.item15,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"9",
        image: IMAGES.item16,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"10",
        image: IMAGES.item11,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"11",
        image: IMAGES.item12,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"12",
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"13",
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"14",
        image: IMAGES.item15,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
    {
        id:"15",
        image: IMAGES.item16,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
    },
]

const gridData = [
    {
        id:"10",
        image: IMAGES.item11,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"11",
        image: IMAGES.item12,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"12",
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"13",
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"14",
        image: IMAGES.item15,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"15",
        image: IMAGES.item16,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"16",
        image: IMAGES.item11,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"17",
        image: IMAGES.item12,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"18",
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"19",
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"20",
        image: IMAGES.item15,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
    {
        id:"21",
        image: IMAGES.item16,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        discount: "$95",
        review: "4.8",
        text: "FREE"
    },
]

type ProductsScreenProps = StackScreenProps<RootStackParamList, 'Products'>;

const Products = ({ navigation }: ProductsScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [show, setshow] = useState(true);

    const sheetRef = useRef<any>();

    const dispatch = useDispatch();

    const addItemToWishList = (data: any) => {
        dispatch(addTowishList(data));
    }

    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    }

    return (
        <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1 }]}>
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
                    style={{ 
                        height: 60, 
                        backgroundColor:colors.card, 
                        flexDirection: 'row', 
                        alignItems: 'center',
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20,
                    }}
                >
                    <IconButton
                        onPress={() => navigation.goBack()}
                        icon={props => <MaterialIcons name="arrow-back-ios" {...props} />}
                        iconColor={colors.title}
                        size={20}
                    />
                    <View 
                        style={{ 
                            height: 45, 
                            marginLeft: -5, 
                            flex: 1,
                            borderRadius:SIZES.radius_sm 
                        }}
                    >
                        <TextInput
                            placeholder='Search Products'
                            placeholderTextColor={COLORS.placeholder}
                            style={{
                                ...FONTS.fontMedium, 
                                fontSize: 14, 
                                color: colors.title, 
                                paddingLeft: 40,
                                flex:1,
                                borderWidth:2,
                                borderColor:colors.background,
                                borderRadius:15
                            }}
                        />
                        <View style={{ position: 'absolute', top: 12, left: 10 }}>
                            <Image
                                style={{ height: 20, width: 20, resizeMode: 'contain', tintColor:COLORS.primary }}
                                source={IMAGES.search}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{ padding: 10, marginLeft: 10 }}
                        onPress={() => {
                            setshow(!show)
                        }}
                    >
                        <Image
                            style={{ height: 22, width: 22, resizeMode: 'contain' }}
                            source={
                                show
                                    ?
                                    IMAGES.list
                                    :
                                    IMAGES.grid
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ padding: 10, marginRight: 10 }}
                    >
                        <Image 
                            style={{
                                height: 20,
                                width: 20,
                                resizeMode: 'contain',
                                tintColor:COLORS.primary
                            }} 
                            source={IMAGES.shopping} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[GlobalStyleSheet.container, { paddingTop: 10,flex:1}]}>
                <View style={{ marginHorizontal: -15,paddingBottom:10}}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15}}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                            {sliderData.map((data:any, index:any) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.8}
                                        style={{
                                            backgroundColor: colors.card,
                                            borderRadius:SIZES.radius_sm,
                                            height:40,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 10,
                                            paddingHorizontal: 20,
                                            paddingVertical: 5
                                        }}>
                                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title }}>{data.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ marginHorizontal: -15,marginTop:10,flex:1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 300,paddingHorizontal:15 }}
                    >
                        {show ?
                            <View style={[GlobalStyleSheet.row]}>
                                {ListData.map((data:any, index:any) => {
                                    return (
                                        <View key={index} style={[GlobalStyleSheet.col50, { marginBottom: 20 }]}>
                                            <CardStyle1
                                                id={data.id}
                                                key={index}
                                                image={data.image}
                                                title={data.title}
                                                price={data.price}
                                                discount={data.discount}
                                                review={data.review}
                                                closebtn
                                                onPress1={() => addItemToWishList(data)}
                                                onPress2={() =>{addItemToCart(data) ; navigation.navigate('MyCart')}}
                                                onPress={() => navigation.navigate('ProductDetails')}
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                            :
                            <View style={{ marginTop: -10 }}>
                                {gridData.map((data:any, index:any) => {
                                    return (
                                        <CardStyle3
                                            id={data.id}
                                            key={index}
                                            title={data.title}
                                            price={data.price}
                                            image={data.image}
                                            grid
                                            discount={data.discount}
                                            review={data.review}
                                            text={data.text}
                                            onPress={() =>{addItemToCart(data) ; navigation.navigate('MyCart')}}
                                            onPress1={() => addItemToWishList(data)}
                                        />
                                    )
                                })}
                            </View>
                        }

                    </ScrollView>
                </View>
            </View>
            <View 
                style={{ 
                    backgroundColor: colors.card,
                    height: 60,
                    width:'100%',
                    flexDirection: 'row',
                    position:'absolute',
                    bottom:0,
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row', alignItems: 'center', gap: 5,flex:1,
                        paddingHorizontal:10,
                        justifyContent:'center'
                    }}
                    onPress={() => sheetRef.current.openSheet('gender')}
                >
                    <Image
                        style={{ height: 16, width: 16, resizeMode: 'contain', tintColor:COLORS.primary }}
                        source={IMAGES.user2}
                    />
                    <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title,textTransform:'uppercase' }}>GENDER</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row', alignItems: 'center', gap: 5,flex:1,
                        paddingHorizontal:10,
                        justifyContent:'center'
                    }}
                    onPress={() => sheetRef.current.openSheet('short')}
                >
                    <Image
                        style={{ height: 16, width: 16, resizeMode: 'contain', tintColor:COLORS.primary }}
                        source={IMAGES.arrowup}
                    />
                    <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title,textTransform:'uppercase'  }}>SORT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row', alignItems: 'center', gap: 5,flex:1,
                        paddingHorizontal:10,
                        justifyContent:'center'
                    }}
                    onPress={() => sheetRef.current.openSheet('filter')}
                >
                    <Image
                        style={{ height: 16, width: 16, resizeMode: 'contain', tintColor:COLORS.primary }}
                        source={IMAGES.filter}
                    />
                    <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title,textTransform:'uppercase'  }}>FILTER</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: 1, height: 32, backgroundColor: '#D9D9D9', position: 'absolute', left: 135, bottom: 15 }}></View>
            <View style={{ width: 1, height: 32, backgroundColor: '#D9D9D9', position: 'absolute', right: 135, bottom: 15 }}></View>
            <BottomSheet2
                ref={sheetRef}
            />
        </SafeAreaView>
    )
}

export default Products