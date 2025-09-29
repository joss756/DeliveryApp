import { useEffect, useRef, useState } from 'react';
import { Image, Platform, TouchableOpacity, View, Animated, Text, Dimensions } from 'react-native';
import { COLORS,  SIZES, FONTS } from '../constants/theme';
import { useTheme } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { IMAGES } from '../constants/Images';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import { useSelector } from 'react-redux';

type Props = {
    state : any,
    navigation : any,
    descriptors : any
}

const BottomTab = ({ state, descriptors, navigation } : Props) => {

    const cart = useSelector((state:any) => state.cart.cart);

    const theme = useTheme();
    const { colors } : {colors : any} = theme;

    const [tabWidth, setWidth] = useState(wp('100%'));

    const tabWD =
        tabWidth < SIZES.container ? tabWidth / 5 : SIZES.container / 5;

    const circlePosition = useRef(
        new Animated.Value(0),
    ).current;

    Dimensions.addEventListener('change', val => {
        setWidth(val.window.width);
    });
    
    useEffect(() => {
        Animated.spring(circlePosition, {
            toValue: state.index * tabWD,
            useNativeDriver: true,
        }).start();
    },[state.index,tabWidth])


    const onTabPress = (index: number) => {
        const tabW =
            tabWidth < SIZES.container ? tabWidth / 5 : SIZES.container / 5; // Adjust this according to your tab width

        Animated.spring(circlePosition, {
            toValue: index * tabW,
            useNativeDriver: true,
        }).start();
    };


    return (
        <View style={{position:'relative'}}>
            <View
                style={[{
                    shadowColor: 'rgba(0, 0, 0, 0.10)',
                    shadowOffset: {
                        width: 0,
                        height: -3,
                    },
                    shadowOpacity:.1,
                    shadowRadius: 5,
                    left: 0,
                    bottom:-27,
                    right: 0,
                    position:'absolute',
                }]}
            >
                <Image
                    style={{
                        width:'100%',
                        resizeMode:'contain',
                    }}
                    source={IMAGES.bottomtab}
                />
            </View>
            <View
                style={{
                    height: 55,
                    backgroundColor:'transpret'
                }}>
                <View style={[GlobalStyleSheet.container,{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                }]}>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            height: '100%',
                            bottom:25,
                           // width: tabWidth < SIZES.container ? tabWidth / 5 : SIZES.container / 5,
                            width:'100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            //transform: [{ translateX: circlePosition }],
                        }}
                    >
                        <View
                            style={{
                                height: 55,
                                width: 55,
                                borderRadius: 50,
                                backgroundColor: COLORS.primary,
                            }}
                        />
                    </Animated.View>
                    {state.routes.map((route:any, index:any) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;


                        const iconTranslateY = useRef(new Animated.Value(0)).current;
                        Animated.timing(iconTranslateY, {
                            toValue:label === 'MyCart' ? -27 : 0,
                            duration: 200,
                            useNativeDriver: true,
                        }).start();

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate({ name: route.name, merge: true });
                                onTabPress(index);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={.8}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                style={{
                                    flex: 1, 
                                    alignItems: 'center', 
                                    height: '100%', 
                                    justifyContent: 'center', 
                                    marginTop: 5 
                                }}
                            >
                                <Animated.View
                                    style={{
                                        transform: [{translateY: iconTranslateY}],
                                }}>
                                    <Image
                                        style={{ 
                                            width: 21, 
                                            height: 21, 
                                            tintColor:label == 'MyCart' ? COLORS.white : isFocused ?  COLORS.primary : '#D7CCBF', 
                                            resizeMode: 'contain' 
                                        }}
                                        source={
                                            label == 'Home' ? IMAGES.home :
                                                label == 'Wishlist' ? IMAGES.heart2 :
                                                    label == 'MyCart' ? IMAGES.shopping :
                                                        label == 'Category' ? IMAGES.document :
                                                            label == 'Profile' ? IMAGES.user2 : IMAGES.home
                                        }

                                    />
                                </Animated.View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export default BottomTab;