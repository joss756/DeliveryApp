import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Platform } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';

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

const CategoryData = [
    {
        image: IMAGES.item20,
        title: "Cupcake",
        color:'#FFA048'
    },
    {
        image: IMAGES.item21,
        title: "Coolies",
        color:'#50B0BF'
    },
    {
        image: IMAGES.item22,
        title: "Croissant",
        color:'#FEC936'
    },
    {
        image: IMAGES.item23,
        title: "Macarons",
        color:'#E592E7'
    },
]

type CategoryScreenProps = StackScreenProps<RootStackParamList, 'Category'>;

const Category = ({ navigation } : CategoryScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title={"Category"}
                rightIcon2={'search'}
                titleLeft
                paddingLeft
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={[GlobalStyleSheet.container,{paddingTop:20}]}>
                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize:24, color: colors.title }}>THE BEST WAY TO BUY THE{"\n"}PRODUCTS YOU LOVE</Text>
                    <View style={{ marginHorizontal: -15 }}>
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
                                                style={{ height:120, width:120, resizeMode: 'contain', borderRadius:30,marginBottom:15 }}
                                                source={data.image}
                                            />
                                             <Text style={{ ...FONTS.fontSemiBold, fontSize: 14, color:colors.title,lineHeight:17,textTransform:'uppercase' }}>{data.title}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ paddingTop:20 }}>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize:24, color: colors.title,textTransform:'uppercase' }}>Surprise Your Loved One</Text>
                    </View>
                    <View style={[GlobalStyleSheet.row,{marginTop:20}]}>
                        {CategoryData.map((data:any, index:any) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => navigation.navigate('Products')} 
                                    key={index} 
                                    style={[GlobalStyleSheet.col50, { marginBottom: 20,alignItems:'center' }]}
                                >
                                    <Image
                                        style={{ height:260, width:'100%',resizeMode:'contain',borderRadius:20}}
                                        source={data.image}
                                    />
                                    <View 
                                        style={{
                                            backgroundColor:data.color,
                                            height:40, 
                                            width:145, 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            position:'absolute',
                                            bottom:20,
                                            borderRadius:10
                                        }}
                                    >
                                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: COLORS.white,lineHeight:20 }}>{data.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Category