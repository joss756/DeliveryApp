import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import LikeBtn from '../LikeBtn';
import { FONTS, COLORS, SIZES } from '../../constants/theme';
import { useNavigation, useTheme } from '@react-navigation/native';
import { IMAGES } from '../../constants/Images';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromwishList } from '../../redux/reducer/wishListReducer';

type Props = {
    id : string,
    title : string;
    price : string;
    image ?: any;
    closebtn?:any;
    review?:any;
    discount?:any;
    likebtn?:any;
    onPress ?:any,
    onPress1 ?: (e : any) => void,
    onPress2 ?: (e : any) => void,
}

const CardStyle1 = ({id, image, title, price, discount, review, closebtn, onPress, likebtn,onPress1,onPress2} : Props) => {

    const theme = useTheme();
    const { colors } : {colors : any } = theme;

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
        <TouchableOpacity
            activeOpacity={0.7}
            style={{
                borderRadius:20 ,
                paddingTop:10,
                backgroundColor:colors.card
            }}
            onPress={() => onPress && onPress()}
        >
            <Image
                style={{ height:null, width: '100%', aspectRatio: 1 / .7,resizeMode:'contain' }}
                source={image}
            />
            <View style={{ paddingHorizontal:15,paddingBottom:15 }}>
                <Text style={{ ...FONTS.DKDisplayPatrol, fontSize: 18, color: colors.title,paddingRight:20 }}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                    <Text style={{ ...FONTS.AntonSCRegular, fontSize: 16, color:COLORS.primary,flex:1 }}>{price}</Text>
                    <Image
                        style={{ height: 14, width: 14, resizeMode: 'contain',tintColor:COLORS.secondary }}
                        source={IMAGES.star4}
                    />
                    <Text style={{ ...FONTS.fontSemiBold, fontSize: 16, color:colors.textLight }}>{review}</Text>
                </View>
            </View>
            {likebtn
                ?
                <View style={{ position: 'absolute', right: 10, top: 5 }}>
                    <TouchableOpacity
                        onPress={onPress1}
                        activeOpacity={0.8}
                        style={{
                            height: 38,
                            width: 38,
                            backgroundColor:COLORS.card,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{ height: 16, width:16, resizeMode: 'contain' }}
                            source={IMAGES.delete}
                        />
                    </TouchableOpacity>
                </View>
                :
                <View style={{ position: 'absolute', right: 0, top: 0 }}>
                    <TouchableOpacity>
                         <LikeBtn
                            onPress={inWishlist().includes(id) ? removeItemFromWishList : onPress1}
                            id={id}
                            inWishlist={inWishlist}
                        />
                    </TouchableOpacity>
                </View>
            }
            {/* {closebtn ?
                <TouchableOpacity
                    style={{ position: 'absolute', width: '100%', bottom: 78 }}
                >
                    <BlurView
                        style={[{width:'100%',height:40,borderRadius:30 },Platform.OS === "ios" && {height:40}]}
                        overlayColor=''
                        blurType="light"
                        blurAmount={10}
                        reducedTransparencyFallbackColor="white"
                    >
                        <Button
                            color={theme.dark ? 'rgba(255,255,255,.6)' : 'rgba(118, 84, 63, 0.75)'}
                            btnRounded
                            text={colors.card}
                            title={'Add To Cart'}
                            size={"sm"}
                            onPress={onPress2}
                        />
                    </BlurView>
                </TouchableOpacity>
                :
                null
            } */}
        </TouchableOpacity>
    )
}

export default CardStyle1;