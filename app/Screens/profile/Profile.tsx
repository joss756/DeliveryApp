import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, SectionList, Platform } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import {  FONTS, COLORS } from '../../constants/theme';
import ListItem from '../../components/list/ListItem';
import { IMAGES } from '../../constants/Images';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/RootStackParamList';


const btnData = [
    {
        title: "Your Order",
        navigate: 'Myorder',
    },
    {
        title: "Wishlist",
        navigate: 'Wishlist',
    },
    {
        title: "Coupons",
        navigate: 'Coupons',
    },
    {
        title: "Track Order",
        navigate: 'Trackorder',
    },
]


const ListwithiconData = [
    {
        title: 'Account Settings',
        data: [
            {
                icon: IMAGES.user2,
                title: "Edit Profile",
                navigate: 'EditProfile'
            },
            {
                icon: IMAGES.card2,
                title: "Saved Cards & Wallet",
                navigate: 'Payment'
            },
            {
                icon: IMAGES.map2,
                title: "Saved Addresses",
                navigate: 'SavedAddresses'
            },
            {
                icon: IMAGES.translation,
                title: "Select Language",
                navigate: 'Language'
            },
            {
                icon: IMAGES.bell2,
                title: "Notifications Settings",
                navigate: 'Notification'
            },
        ],
    },
    {
        title: 'My Activity',
        data: [
            {
                icon: IMAGES.star,
                title: "Reviews",
                navigate: 'WriteReview'
            },
            {
                icon: IMAGES.comment,
                title: "Questions & Answers",
                navigate: 'Questions'
            },
        ],
    },

];

type ProfileScreenProps = StackScreenProps<RootStackParamList, 'Profile'>;

const Profile = ({ navigation } : ProfileScreenProps) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    return (

        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1, }}>
            <View style={[GlobalStyleSheet.container,{padding:0}]}>
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
                            justifyContent: 'space-between',
                            backgroundColor:colors.card,
                            paddingHorizontal:15,
                            height:60,
                            borderBottomLeftRadius:20,
                            borderBottomRightRadius:20
                        }}
                    >
                        <Image
                            style={{ resizeMode: 'contain'}}
                            source={IMAGES.logo}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Notification')}
                                style={{ padding: 5 }}
                            >
                                <Image
                                    style={[GlobalStyleSheet.image, { tintColor: colors.text }]}
                                    source={IMAGES.bell}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Search')}
                                style={{ padding: 5 }}
                            >
                                <Image
                                    style={[GlobalStyleSheet.image, { tintColor: colors.text }]}
                                    source={IMAGES.search}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[GlobalStyleSheet.container, { flex: 1 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingBottom:20 }}>
                    <View style={{ height: 45, width: 45, borderRadius: 50, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: 40, width: 40, borderRadius: 50 }}
                            source={IMAGES.itemDetails8}
                        />
                    </View>
                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 28, color: colors.title}}>Hello,<Text style={{ ...FONTS.DKDisplayPatrol,color:COLORS.secondary }}> Roopa</Text></Text>
                </View>
                <View style={[GlobalStyleSheet.row]}>
                    {btnData.map((data:any, index:any) => {
                        return (
                            <View key={index} style={[GlobalStyleSheet.col50, { marginBottom: 10 }]}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate(data.navigate)}
                                    style={{
                                        height: 48,
                                        backgroundColor: colors.card,
                                        borderRadius:15,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 16, color: colors.title}}>{data.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
                <View style={{ marginHorizontal: -15, flex: 1 }}>
                    <SectionList
                        sections={ListwithiconData}
                        keyExtractor={(item:any, index:any) => item + index}
                        renderItem={({ item } : any) => (
                            <ListItem
                                icon={
                                    <Image
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor:COLORS.primary,
                                            resizeMode: 'contain',
                                        }}
                                        source={item.icon}
                                    />
                                }
                                title={item.title}
                                onPress={() => navigation.navigate(item.navigate)}
                            />
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 20, color: colors.title, paddingLeft: 20, paddingBottom: 10, paddingTop: 20,backgroundColor:colors.background }}>{title}</Text>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile