import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, SafeAreaView, LayoutAnimation } from 'react-native';
import Header from '../../layout/Header';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import SwipeBox from '../../components/SwipeBox';
import { IMAGES } from '../../constants/Images';
import { GlobalStyleSheet } from '../../constants/StyleSheet';

const SwipeData = [
    {
        image: IMAGES.small6,
        title: "New Arrivals Alert!",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small5,
        title: "Flash Sale Announcement",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small4,
        title: "Exclusive Discounts Inside",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small3,
        title: "Limited Stock - Act Fast!",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small2,
        title: "Get Ready to Shop",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small6,
        title: "Don't Miss Out on Savings",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small5,
        title: "Special Offer Just for You",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small4,
        title: "Don't Miss Out on Savings",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small3,
        title: "Get Ready to Shop",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small2,
        title: "Special Offer Just for You",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small6,
        title: "New Arrivals Alert!",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small5,
        title: "Flash Sale Announcement",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small4,
        title: "Exclusive Discounts Inside",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small3,
        title: "Limited Stock - Act Fast!",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small2,
        title: "Get Ready to Shop",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small6,
        title: "Don't Miss Out on Savings",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small5,
        title: "Special Offer Just for You",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small4,
        title: "Don't Miss Out on Savings",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small3,
        title: "Get Ready to Shop",
        date: "15 July 2023"
    },
    {
        image: IMAGES.small2,
        title: "Special Offer Just for You",
        date: "15 July 2023"
    },

]

const Notification = () => {


    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const [lists, setLists] = useState(SwipeData);

    const deleteItem = (index:any) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        const arr = [...lists];
        arr.splice(index, 1);
        setLists(arr);
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
            <Header
                title="Notifications (12)"
                leftIcon={'back'}
                rightIcon2={'search'}
            />
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[GlobalStyleSheet.container,{padding:0, paddingTop: 5, paddingBottom: 5 }]}>
                        {lists.map((data, index) => {
                            return (
                                <View
                                    key={index}
                                >
                                    <SwipeBox data={data} theme={theme} colors={colors} handleDelete={() => deleteItem(index)} />
                                    <View
                                        style={{
                                            height: 1,
                                            width: '100%',
                                            backgroundColor:colors.title,
                                            opacity:0.10
                                        }}
                                    />
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </GestureHandlerRootView>
        </SafeAreaView>
    )
}

export default Notification