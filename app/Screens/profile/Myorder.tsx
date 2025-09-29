import React, { useRef, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, SafeAreaView, Animated, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS,  SIZES } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import { ScrollView } from 'react-native-gesture-handler';
import CardStyle3 from '../../components/Card/CardStyle3';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';
import { IMAGES } from '../../constants/Images';
import { useDispatch } from 'react-redux';
import { addTowishList } from '../../redux/reducer/wishListReducer';


const MyorderData = [
    {
        id:"30",
        image: IMAGES.item12,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Track Order",
    },
    {
        id:"31",
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Track Order",
    },
    {
        id:"32",
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Track Order",
    },
    {
        id:"33",
        image: IMAGES.item15,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Track Order",
    },
    {
        id:"34",
        image: IMAGES.item11,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Track Order",
    },
]
const CompletedData = [
    {
        id:"35",
        image: IMAGES.item11,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Write Review",
    },
    {
        id:"36",
        image: IMAGES.item12,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Write Review",
    },
    {
        id:"37",
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Write Review",
    },
    {
        id:"38",
        image: IMAGES.item14,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Write Review",
    },
    {
        id:"39",
        image: IMAGES.item15,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Write Review",
    },
    {
        id:"40",
        image: IMAGES.item16,
        title: "Special Choco Chips Cake",
        review: "4.8",
        discount: "$95",
        btntitel: "Write Review",
    },
]

type MyorderScreenProps = StackScreenProps<RootStackParamList, 'Myorder'>;

const Myorder = ({ navigation } : MyorderScreenProps) => {


    const scrollRef = useRef<any>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const onPressTouch = (val : any) => {
        setCurrentIndex(val)
        scrollRef.current?.scrollTo({
            x: SIZES.width * val,
            animated: true,
        });
    }

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const dispatch = useDispatch();

    const addItemToWishList = (data: any) => {
        dispatch(addTowishList(data));
    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"My Order"}
                leftIcon={'back'}
            />
            <View style={{ flex: 1 }}>
                <View style={GlobalStyleSheet.container}>
                    <View style={{ flexDirection: 'row', gap: 10, marginRight: 10 }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => onPressTouch(0)}
                            style={[
                                GlobalStyleSheet.TouchableOpacity2, 
                                { 
                                    backgroundColor:colors.card 
                                },currentIndex === 0 && {
                                    backgroundColor:COLORS.primary,
                                }
                            ]}
                        >
                            <Text 
                                style={{ 
                                    ...FONTS.DKDisplayPatrol, 
                                    fontSize: 18, 
                                    color: currentIndex === 0 ? COLORS.card : colors.title,
                                }}
                            >Ongoing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => onPressTouch(1)}
                            style={[
                                GlobalStyleSheet.TouchableOpacity2, 
                                { 
                                    backgroundColor: colors.card
                                },currentIndex === 1 && {
                                    backgroundColor:COLORS.primary,
                                }
                            ]}
                        >
                            <Text 
                                style={{ 
                                    ...FONTS.DKDisplayPatrol, 
                                    fontSize: 18, 
                                    color: currentIndex === 1 ? COLORS.card : colors.title,
                                }}
                            >Completed</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    ref={scrollRef}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    onMomentumScrollEnd={(e:any) => {
                        if (e.nativeEvent.contentOffset.x.toFixed(0) == SIZES.width.toFixed(0)) {
                            setCurrentIndex(1)
                        } else if (e.nativeEvent.contentOffset.x.toFixed(0) == 0) {
                            setCurrentIndex(0)
                        } else {
                            setCurrentIndex(0)
                        }
                    }}
                >
                    <View style={{ width: SIZES.width,flex:1 }}>
                        <View style={[GlobalStyleSheet.container, { paddingTop: 0,flex:1 }]}>
                            <View style={{ marginHorizontal: -15,paddingHorizontal:15,flex:1 }}>
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                >
                                    {MyorderData.map((data, index) => {
                                        return (
                                            <CardStyle3
                                                id={data.id}
                                                key={index}
                                                title={data.title}
                                                image={data.image}
                                                discount={data.discount}
                                                btntitel={data.btntitel}
                                                review={data.review}
                                                onPress={() => navigation.navigate('Trackorder')}
                                                onPress1={() => addItemToWishList(data)}
                                            />
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: SIZES.width,flex:1 }}>
                        <View style={[GlobalStyleSheet.container, { paddingTop: 0,flex:1 }]}>
                            <View style={{ marginHorizontal: -15,paddingHorizontal:15,flex:1 }}>
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                >
                                    {CompletedData.map((data, index) => {
                                        return (
                                            <CardStyle3
                                                id={data.id}
                                                key={index}
                                                title={data.title}
                                                image={data.image}
                                                discount={data.discount}
                                                btntitel={data.btntitel}
                                                review={data.review}
                                                onPress={() => navigation.navigate('WriteReview')}
                                                onPress1={() => addItemToWishList(data)}
                                            />
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Myorder;