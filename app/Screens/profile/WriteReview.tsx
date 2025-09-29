import React, { useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native'
import Header from '../../layout/Header';
import { FONTS, COLORS } from '../../constants/theme';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CardStyle3 from '../../components/Card/CardStyle3';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';



const TrackorderData = [
    {
        image: IMAGES.item13,
        title: "Special Choco Chips Cake",
        price: "$110.20",
        review: "4.8",
    },

]

const btnData = [
    {
        name:"Yes"
    },
    {
        name:"No"
    }
]

const WriteReview = () => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [isChecked, setIsChecked] = useState(btnData[0]);

    const navigation = useNavigation();

    const [rating , setRating] = useState(4);
    

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Write Review"}
                leftIcon={"back"}
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={[GlobalStyleSheet.container, { flex: 1 }]}>
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
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 20, color: colors.title }}>Overall Rating</Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color:colors.text, marginTop: 5 }}>Your Average Rating Is {rating}.0</Text>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            {new Array(rating).fill(rating).map((_,index) => {
                                return(
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => setRating(index + 1)}
                                        key={index}
                                        style={{margin:5}}
                                    >
                                        <Image
                                            style={[{height:35,width:35,resizeMode:'contain',zIndex:1,tintColor:'#FFB444'}]}
                                            source={IMAGES.star7}
                                        /> 
                                    </TouchableOpacity>
                                )
                            })}
                            {new Array(5 - rating).fill(5 - rating).map((_,index) => {
                                return(
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        key={index}
                                        onPress={() => setRating(index + rating + 1)}
                                        style={{margin:5}}
                                    >
                                        <Image
                                            style={[{height:35,width:35,resizeMode:'contain',zIndex:1,tintColor:colors.card}]}
                                            source={IMAGES.star6}
                                        />    
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                    <View style={{ marginBottom: 15, marginTop: 30 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Full Name</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                        />
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ ...FONTS.fontMedium, fontSize: 15, color: colors.text, marginBottom: 5,textTransform:'uppercase' }}>Product Review</Text>
                        <CustomInput
                            onChangeText={(value: any) => console.log(value)}
                            inputLg
                        />
                    </View>
                    <View>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 15, color: colors.title }}>Would you recommend this product to a friend?</Text>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            gap:15,
                            marginTop:10
                        }}>
                            {btnData.map((data:any,index:any) => {
                                return(
                                    <View key={index} style={{flexDirection:'row',alignItems:'center',gap:5}}>
                                        <TouchableOpacity
                                            style={[{
                                                width: 24,
                                                height: 24,
                                                borderRadius: 50,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor:colors.card
                                            }]}
                                            onPress={() => setIsChecked(data)}
                                        >
                                            <View style={[{
                                                width: 14,
                                                height: 14,
                                                //backgroundColor: theme.colors.background,
                                                borderRadius: 50
                                            }, isChecked === data && {
                                                backgroundColor:COLORS.primary
                                            }]}></View>
                                        </TouchableOpacity>
                                        <Text style={{ ...FONTS.fontMedium, fontSize: 16, color: colors.title }}>{data.name}</Text>
                                    </View>
                                )
                            })}
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
                    <View style={[GlobalStyleSheet.container, { paddingHorizontal: 10, marginTop: 20, paddingTop: 0 }]}>
                        <Button
                            onPress={() => navigation.goBack()}
                            title={"Submit Review"}
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

export default WriteReview