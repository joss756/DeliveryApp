import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import { IMAGES } from '../../constants/Images';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromwishList } from '../../redux/reducer/wishListReducer';

type Props = {
    id : string,
    title : string;
    text ?: string;
    price ?: string;
    image ?: any;
    btntitel?:any;
    removebtn?:any;
    discount?:any;
    grid?:any;
    review?:any;
    onPress ?:any,
    onPress1 ?: (e : any) => void,
    onPress2 ?: (e : any) => void,
}

const CardStyle3 = ({id, title, text, price, discount, image, btntitel, onPress, removebtn, grid, review,onPress1,onPress2 } : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

    const navigation = useNavigation<any>();

    const dispatch = useDispatch();

    const wishList = useSelector((state:any) => state.wishList.wishList);

    const inWishlist = () => {
        var temp = [] as any;
        wishList.forEach((data:any) => {
            temp.push(data.id);
        });
        return temp;
    }

    const removeItemFromWishList = () => {
        dispatch(removeFromwishList(id as any));
    }

    return (
        <View
            style={{
                marginTop: 15,
                padding:15,
                paddingVertical:15,
                borderRadius:20,
                backgroundColor:colors.card
            }}
        >
            <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
                <View style={{alignItems:'center'}}>
                    <Image
                        style={[{ 
                            height:null, 
                            width:SIZES.width /3,
                            aspectRatio:1/1, 
                            backgroundColor:COLORS.card,
                            resizeMode:'contain',
                            borderRadius:10 
                        },Platform.OS === 'web' && {width:SIZES.width / 4.5}]}
                        source={image}
                    />
                </View>
                <View style={{flex:1,}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProductDetails')}
                    >
                        <Text style={{ ...FONTS.DKDisplayPatrol, fontSize:20, color: colors.title,paddingRight:25}}>{title}</Text>
                    </TouchableOpacity>
                    <Text style={{...FONTS.fontMedium, fontSize: 16, color: COLORS.success, marginTop: 5}}>FREE Delivery</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:15}}>
                            {grid
                                ?
                                    <Text style={{...FONTS.AntonSCRegular,fontSize:17,color:COLORS.primary}}>{price}</Text>
                                :
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={() => onPress && onPress()}
                                        style={{
                                            backgroundColor:COLORS.primary,
                                            height:26,
                                            paddingHorizontal:8,
                                            borderRadius:5,
                                            alignItems:'center',
                                            justifyContent:'center'
                                        }}
                                    >
                                    
                                            <Text style={{...FONTS.DKDisplayPatrol,fontSize:14,color:COLORS.white}}>{btntitel}</Text>
                                    </TouchableOpacity>
                            }
                       
                        <View style={{flexDirection:'row',alignItems:'center',gap:2}}>
                            <Image
                                style={{ height: 16, width: 16, resizeMode: 'contain',tintColor:COLORS.secondary }}
                                source={IMAGES.star4}
                            />
                            <Text style={{ ...FONTS.fontSemiBold, fontSize: 16, color:colors.text,lineHeight:20,marginLeft:3 }}>{review}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardStyle3