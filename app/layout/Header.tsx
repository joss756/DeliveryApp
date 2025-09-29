import React from 'react';
import { Image, Platform, Text, TouchableOpacity, View, } from 'react-native';
import { COLORS, FONTS,} from '../constants/theme';
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import { IMAGES } from '../constants/Images';

const Header = (props: { productId?: any; transparent?: any; paddingLeft?: any; leftIcon?: any; backAction?: any; titleLeft?: any; title?: any; rightIcon2?: any; rightIcon?: any; rightIcon3?: any; rightIcon4?: any; handleLike?: any; isLike?: any; grid?: any; handleLayout?: any; layout?: any;onPress ? : any; }) => {

    const navigation = useNavigation<any>();

    const theme = useTheme();
    const { colors }: {colors :any} = theme;

    const { grid, handleLayout, layout } = props;

    return (
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
                style={[{
                    height: props.productId ? 60 : 60,
                    backgroundColor: colors.card,
                    borderBottomLeftRadius:20,
                    borderBottomRightRadius:20
                }, props.transparent && {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    borderBottomWidth: 0,
                }]}
            >
                <View style={[GlobalStyleSheet.container, {
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft:props.paddingLeft ? 15 : 0,
                    justifyContent: 'space-between',
                    paddingTop:10
                }]}
                >
                    {props.leftIcon == "back" &&
                        <IconButton
                            onPress={() => props.backAction ? props.backAction() : navigation.goBack()}
                            icon={props => <MaterialIcons name="arrow-back-ios" {...props} />}
                            iconColor={colors.title}
                            size={20}
                        />
                    }
                    <View style={{ flex: 1 }}>
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title, textAlign: props.titleLeft ? 'left' : 'center',textTransform:'uppercase' }}>{props.title}</Text>
                        {props.productId &&
                            <Text style={{ ...FONTS.fontSm, color: colors.text, textAlign: 'center', marginTop: 2 }}>{props.productId}</Text>
                        }
                    </View>
                    {props.rightIcon2 == "search" &&
                        <IconButton
                            onPress={() => navigation.navigate('Search')}
                            size={20}
                            iconColor={colors.textLight}
                            icon={props => <Feather name="search" {...props} />}
                        />
                    }
                    {props.rightIcon == "cart" &&
                        <IconButton
                            onPress={props.onPress}
                            size={20}
                            iconColor={colors.title}
                            icon={prop =>

                                <Image {...prop} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor:COLORS.primary }} source={IMAGES.shopping} />

                            }
                        />

                    }
                    {props.rightIcon3 == "home" &&
                        <IconButton
                            onPress={() => navigation.navigate('DrawerNavigation')}
                            size={20}
                            iconColor={colors.title}
                            icon={props => <Feather name="home" {...props} />}
                        />
                    }
                    {props.rightIcon4 == "chat" &&
                        <IconButton
                            onPress={() => navigation.navigate('SingleChat')}
                            size={20}
                            iconColor={colors.title}
                            icon={props => <Image {...props} style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: colors.title }} source={IMAGES.comment} />}
                        />
                    }
                    {props.rightIcon == "wishlist" &&
                        <IconButton
                            onPress={() => props.handleLike()}
                            size={20}
                            iconColor={props.isLike ? "#F9427B" : colors.title}
                            icon={val => <FontAwesome name={props.isLike ? "heart" : "heart-o"} {...val} />}
                        />
                    }
                    {grid &&
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => handleLayout('grid')}
                                style={{
                                    padding: 10,
                                }}
                            >
                                <Image
                                    style={{
                                        height: 22,
                                        width: 22,
                                        resizeMode: 'contain',
                                        tintColor: layout === 'grid' ? COLORS.primary : '#BEB9CD',
                                    }}
                                    source={IMAGES.grid}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleLayout('list')}
                                style={{
                                    padding: 10,
                                }}
                            >
                                <Image
                                    style={{
                                        height: 22,
                                        width: 22,
                                        resizeMode: 'contain',
                                        tintColor: layout === 'list' ? COLORS.primary : '#BEB9CD',
                                    }}
                                    source={IMAGES.grid2}
                                />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        </View>
    );
};



export default Header;