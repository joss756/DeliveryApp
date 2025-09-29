import React, { useRef, useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';
import CardStyle1 from '../../components/Card/CardStyle1';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';
import { useDispatch } from 'react-redux';
import { addTowishList } from '../../redux/reducer/wishListReducer';
import { addToCart } from '../../redux/reducer/cartReducer';
import BottomSheet2 from '../Shortcode/BottomSheet2';
import StrokeTitle from '../../components/StrokeTitle';


const ArrivalData = [
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

const CardStyle1Data = [
    {
        id:"0",
        image: IMAGES.item11,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        review:"4.8",
    },
    {
        id:"1",
        image: IMAGES.item12,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        review:"4.8",
    },
    {
        id:"2",
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        review:"4.8",
    },
    {
        id:"3",
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        review:"4.8",
    },
    {
        id:"02",
        image: IMAGES.item15,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        review:"4.8",
    },
    {
        id:"03",
        image: IMAGES.item16,
        title: "Special Choco Chips Cake",
        price: "$142.20",
        review:"4.8",
    },
]

const selectionData = [
    {
        image: IMAGES.product5,
        title: "Cupcake"
    },
    {
        image: IMAGES.product6,
        title: "Cookies"
    },
    {
        image: IMAGES.product7,
        title: "Croissant"
    },
    {
        image: IMAGES.product5,
        title: "Cupcake"
    },
    {
        image: IMAGES.product6,
        title: "Cookies"
    },
    {
        image: IMAGES.product7,
        title: "Croissant"
    },
]

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation} : HomeScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const dispatch = useDispatch();

    const sheetRef = useRef<any>();

    const productSizes = ["X", "M", "S"];

    const [activeSize, setActiveSize] = useState(ArrivalData[0]);

    const addItemToWishList = (data: any) => {
        dispatch(addTowishList(data));
    }

    const addItemToCart = (data: any) => {
        dispatch(addToCart(data));
    }

    return (
        <SafeAreaView style={[GlobalStyleSheet.container,{padding:0, backgroundColor: colors.background, flex: 1,marginBottom:0 }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={[{
                        shadowColor: 'rgba(0, 0, 0, 0.60)',
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
                        style={[GlobalStyleSheet.container,{ 
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            height:60,
                            backgroundColor:colors.card,
                            borderBottomRightRadius:20,
                            borderBottomLeftRadius:20
                        }]}
                    >
                        <View
                            style={{ padding: 5 }}
                        >
                            <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                                <Image
                                    style={[GlobalStyleSheet.image3,]}
                                    source={IMAGES.map}
                                />
                                <View>
                                    <Text style={{...FONTS.DKDisplayPatrol,fontSize:18,color:colors.title}}>Los Angeles</Text>
                                    <Text style={{...FONTS.fontRegular,fontSize:13,color:colors.text}}>456 Elm Avenue Apt 5B</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                        >
                            <Image
                                style={{width:22,height:23,resizeMode:'contain'}}
                                source={IMAGES.menu}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{alignItems:'center'}]}>
                    <Text style={{...FONTS.DKDisplayPatrol,fontSize:48,color:colors.title}}>Will You Have</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={[{...FONTS.DKDisplayPatrol,fontSize:48,color:colors.title},Platform.OS === 'web' && {fontSize:45}]}>Some More</Text>
                        <StrokeTitle/>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    <View style={{paddingHorizontal:10}}>
                        <Image
                            style={{width:'100%',height:null,aspectRatio:1/.7,resizeMode:'contain'}}
                            source={IMAGES.banner1}
                        />
                        <View 
                            style={{
                                height:34,
                                width:84,
                                borderRadius:15,
                                backgroundColor:'#3F8FB1',
                                alignItems:'center',
                                justifyContent:'center',
                                position:'absolute',
                                top:100,
                                left:35,
                                transform:[{rotate:'-16deg'}]
                            }}
                        >
                            <Text style={{...FONTS.DKDisplayPatrol,fontSize:16,color:COLORS.card}}>Cookies</Text>
                        </View>
                        <View 
                            style={{
                                height:34,
                                width:71,
                                borderRadius:15,
                                backgroundColor:COLORS.white,
                                alignItems:'center',
                                justifyContent:'center',
                                position:'absolute',
                                top:125,
                                right:35,
                                transform:[{rotate:'16deg'}]
                            }}
                        >
                            <Text style={{...FONTS.DKDisplayPatrol,fontSize:16,color:COLORS.title}}>Cakes</Text>
                        </View>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{padding:0}]}>
                    <View style={{ marginHorizontal: -15,paddingHorizontal:15 }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15,paddingTop:10 }}
                        >
                            <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center', gap: 20, justifyContent: 'center' }}>
                                {selectionData.map((data:any, index:any) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            key={index}
                                            style={{ alignItems: 'center' }}
                                            onPress={() => navigation.navigate('Products')}
                                        >
                                            <Image
                                                style={{ height:120, width:120, resizeMode: 'contain', borderRadius:25,marginBottom:15 }}
                                                source={data.image}
                                            />
                                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color:colors.title,lineHeight:17,textTransform:'uppercase' }}>{data.title}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container,{paddingTop:20}]}>
                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize:24, color: colors.title}}>New Arrival</Text>
                    <View style={{ marginHorizontal: -15 }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
                                {ArrivalData.map((data:any, index:any) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            activeOpacity={0.5}
                                            onPress={() => {setActiveSize(data) ; navigation.navigate('Products')}}
                                            style={[{
                                                backgroundColor:colors.card,
                                                borderRadius:30,
                                                height: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: 10,
                                                paddingHorizontal: 25,
                                                paddingVertical: 5
                                            },activeSize === data && {
                                                backgroundColor:COLORS.primary,
                                            }]}>
                                            <Text style={[{ ...FONTS.DKDisplayPatrol, fontSize: 16, color:colors.title },activeSize === data &&{color:COLORS.white}]}>{data.title}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={[GlobalStyleSheet.container, { marginHorizontal: 5, marginVertical: 5,paddingTop:0 }]}>
                    <View style={[GlobalStyleSheet.row]}>
                        {CardStyle1Data.map((data:any, index:any) => {
                            return (
                                <View style={[GlobalStyleSheet.col50, { marginBottom: 20, }]} key={index}>
                                    <CardStyle1
                                        id={data.id}
                                        image={data.image}
                                        title={data.title}
                                        price={data.price}
                                        review={data.review}
                                        onPress1={() => addItemToWishList(data)}
                                        onPress={() => navigation.navigate('ProductDetails')}
                                    />
                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
            <BottomSheet2
                ref={sheetRef}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    scrolling2: {
        backgroundColor: "red",
        width: '100%',
        // padding: 10,
        marginBottom: 10,
    },
    welcome: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default Home;