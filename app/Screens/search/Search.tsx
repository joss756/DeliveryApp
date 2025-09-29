import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';


const SearchData = [
    {
        title: "All",
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

const SearchHistoryData = [
    {
        title: "Woman Fashion Watch",
    },
    {
        title: "Man Watch",
    },
    {
        title: "Girl Watch",
    },
    {
        title: "Sports Watch",
    },
    {
        title: "Child Watch",
    },
]

type SearchScreenProps = StackScreenProps<RootStackParamList, 'Search'>;

const Search = ({ navigation } : SearchScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [items, setItems] = useState(SearchHistoryData);

    const [activeSize1, setActiveSize1] = useState(SearchData[0]);

    const removeItem = () => {
        setItems([]);
    };

    const [show, setshow] = useState(SearchHistoryData);


    const removeItem2 = (indexToRemove: number) => {
        setshow(prevItems => prevItems.filter((item, index) => index !== indexToRemove));
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <View style={[GlobalStyleSheet.container, { paddingBottom: 10, }]}>
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
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            gap: 10,
                            backgroundColor:colors.card,
                            marginHorizontal:-15,
                            marginTop:-15,
                            padding:15,
                            borderBottomLeftRadius:20,
                            borderBottomRightRadius:20,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[
                                GlobalStyleSheet.background,
                                {
                                    height: 48,
                                    width: 48,
                                    borderRadius:10,
                                    backgroundColor:COLORS.primary,
                                }]}
                        >
                            <Image
                                style={{ height: 18, width: 18, resizeMode: 'contain', tintColor:COLORS.white  }}
                                source={IMAGES.arrowleft}
                            />
                        </TouchableOpacity>
                        <View 
                            style={{ 
                                height: 48, 
                                flex: 1, 
                                borderWidth:2,
                                borderColor:'#F3EAE5',
                                borderRadius:10 
                            }}
                        >
                            <TextInput
                                style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.text, paddingLeft: 20,flex:1 }}
                                placeholder='Search Best items for You'
                                placeholderTextColor={COLORS.text}
                            />
                        </View>
                    </View>
                </View>
                <View style={{marginHorizontal:-15,marginTop:10}}> 
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 20 ,paddingHorizontal:15}}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 10 }}>
                            {SearchData.map((data:any, index:any) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {setActiveSize1(data) ; navigation.navigate('Products')}}
                                        activeOpacity={0.7}
                                        style={[{
                                            backgroundColor:colors.card,
                                            borderRadius:25,
                                            height: 40,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 10,
                                            paddingHorizontal: 25,
                                            paddingVertical: 5
                                        },activeSize1 === data && {
                                            backgroundColor:COLORS.primary,
                                        }]}>
                                        <Text style={[{ ...FONTS.DKDisplayPatrol, fontSize: 16, color:colors.title,lineHeight:18 },activeSize1 === data &&{color:COLORS.white}]}>{data.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                {items.length > 0 &&
                    <View style={{ marginTop: 15 }}>
                         {show.length > 0 && 
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 20, color: colors.title}}>Search History</Text>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={() => removeItem()}
                                >
                                    <Text style={{ ...FONTS.fontRegular, fontSize: 14, color:COLORS.primary }}>Clear All</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        <View style={{ marginTop: 10 }}>
                            {show.map((data:any, index:any) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Products')} 
                                        key={index} 
                                        style={{ 
                                            flexDirection: 'row', 
                                            alignItems: 'center', 
                                            justifyContent: 'space-between', 
                                            paddingVertical: 5 
                                        }}
                                    >
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: colors.title }}>{data.title}</Text>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => removeItem2(index)}
                                        >
                                            <Image
                                                style={{ height: 19, width: 19, resizeMode: 'contain', opacity: 0.5, tintColor: colors.title }}
                                                source={IMAGES.close}
                                            />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

export default Search