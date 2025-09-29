import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import ThemeBtn from '../components/ThemeBtn';
import { IMAGES } from '../constants/Images';

const Sidebar = ({navigation} : any) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const navItem = [
        {
            icon: IMAGES.home,
            name: "Home",
            navigate: "BottomNavigation",
        },
        {
            icon: IMAGES.producta,
            name: "Products",
            navigate: "Products",
        },
        {
            icon: IMAGES.components,
            name: "Components",
            navigate: "Components",
        },
        {
            icon: IMAGES.star,
            name: "Featured",
            navigate: "WriteReview",
        },
        {
            icon: IMAGES.heart2,
            name: "Wishlist",
            navigate: "Wishlist",
        },
        {
            icon: IMAGES.order,
            name: "My Orders",
            navigate: 'Myorder',
        },
        {
            icon: IMAGES.shopping,
            name: "My Cart",
            navigate: 'MyCart',
        },
        {
            icon: IMAGES.chat,
            name: "Chat List",
            navigate: 'Chat',
        },
        {
            icon: IMAGES.user2,
            name: "Profile",
            navigate: "Profile",
        },
        {
            icon: IMAGES.logout,
            name: "Logout",
            navigate: 'SignIn',
        },
    ]

    return (
        <>
            <View style={{ flex: 1, backgroundColor:COLORS.secondary}}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View
                        style={{
                            paddingTop: 30,
                            paddingHorizontal: 20,
                            borderBottomWidth: 1,
                            borderColor: colors.border,
                            paddingBottom: 20,
                            marginBottom: 15,
                            alignItems: 'flex-start',
                        }}
                    >
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <View style={{
                                alignItems: 'flex-start',
                                flex: 1,
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Image
                                        style={{ height: 60, width: 60, resizeMode: 'contain', borderRadius: 20 }}
                                        source={IMAGES.itemDetails8}
                                    />
                                    <View>
                                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize:24, color: COLORS.card }}>Roopa</Text>
                                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: COLORS.card }}>example@gmail.com</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ position: 'absolute', right: 0, top: -10 }}>
                                <ThemeBtn />
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        {navItem.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    //onPress={() => {data.navigate && navigation.navigate(data.navigate); navigation.closeDrawer()}}
                                    onPress={() => {
                                        data.navigate == "Account" ?
                                            navigation.navigate('BottomNavigation', { screen: data.navigate })
                                            :
                                            data.navigate && navigation.navigate(data.navigate);
                                        //navigation.closeDrawer()
                                    }}
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingHorizontal: 20,
                                        paddingVertical: 14,
                                    }}
                                >
                                    <View style={{ marginRight: 15 }}>
                                        <Image
                                            style={{ height: 20, width: 20, resizeMode: 'contain', tintColor:COLORS.card }}
                                            source={data.icon}
                                        />
                                    </View>
                                    <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 20, color: COLORS.card, flex: 1 }}>{data.name}</Text>
                                    <Feather size={16} color={COLORS.card} name='chevron-right' />
                                </TouchableOpacity>
                            )
                        })}
                    </View>

                    <View
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 20,
                            marginTop: 10,
                            borderTopWidth: 1,
                            borderTopColor: colors.border
                        }}
                    >
                        <Text style={{ ...FONTS.fontSemiBold, fontSize: 16, color:COLORS.card, marginBottom: 4 }}>BakeRon<Text style={{ ...FONTS.fontRegular, fontSize: 16 ,color:COLORS.card}}> Fashion Store</Text></Text>
                        <Text style={{ ...FONTS.fontRegular, fontSize: 16, color: COLORS.card }}>App Version 1.0</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default Sidebar;